// Express
const express = require('express');
//Magic tool 
const app = express();
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is listining on ${PORT}`);
});



const Log = require('./models/log');
const mongoose = require('mongoose'); // DB

// DB Connection
mongoose.connect('mongodb://localhost:27017/app', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('MongoDB is connected successfully');
});

app.get('/logs', (req, res) => {
    Log.find({}, (error, result)=> {
        if (error) {
          console.log('==========ERROR==============');
          console.log('ERROR:', error);
        } else {
          console.log('find successfully', result);
          res.send(result)
        }
      });

    });

    app.get('/logs/:id', (req, res) => {
        Log.findById(req.params.id, (error, result)=> {
            if (error) {
              console.log('==========ERROR==============');
              console.log('ERROR:', error);
            } else {
              console.log('find successfully', result);
              res.send(result)
            }
          });
    
        });

        app.post('/logs', (req, res) => {
            console.log(req.body);
            Log.create(req.body, (error, result)=> {
              if (error) {
                console.log('==========ERROR==============');
                console.log('ERROR:', error);
              } else {
                console.log('Successfully CREATE:', result);
                res.send(result)
              }
            });
          });

          app.put('/logs/:id', (req, res) => {
            console.log(req.body);
            Log.findByIdAndUpdate(req.params.id,req.body,
                { new: true }, (error, result)=> {
              if (error) {
                console.log('==========ERROR==============');
                console.log('ERROR:', error);
              } else {
                console.log('UPDATE Successfully :', result);
                res.send(result)
              }
            });
          });
        
        
          app.delete('/logs', (req, res) => {
            console.log(req.body);
            Log.findByIdAndRemove(req.body, (error, result)=> {
              if (error) {
                console.log('==========ERROR==============');
                console.log('ERROR:', error);
              } else {
                console.log('Delete Successfully :', result);
                res.send(result)
              }
            });
          });
          
          




