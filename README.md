[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)![Misk Logo](https://i.ibb.co/KmXhJbm/Webp-net-resizeimage-1.png)


# The Captain's Log

![Insert Pun Image here](https://i.imgflip.com/2174sq.jpg)

#### Learning Objectives

- Full CRUD app with a mongo database

#### Prerequisites

- JavaScript
- Express / Node 
- Mongo / Mongoose

---

## Instructions

Every great captain, whether on the waters or in the skies, keeps a daily log. Let's build the perfect Captain's Log App for our extraordinary captains.

There are many ways to get started building an app. This lab follows a specific order for two reasons:

 - to align with the content of lecture
 - to give you an order to guide you to create small bits of functionality and test each one before moving on to the next part

 

### Set up

#### Restful Routes

Let's keep track of our Restful Routes as we build out our app. 

|#|Action|URL|HTTP Verb|mongoose method|
|:---:|:---:|:---:|:---:|:---:|
|1| Index | /logs | GET | `Log.find({})` |
|2| Show | /logs/:id | GET | `Log.findById(req.params.id)` |
|3| Create | /logs | POST| `Log.create(req.body)` |
|4| Update | /logs/:id | PUT | `Log.findByIdAndUpdate(req.params.id)` |
|5| Destroy | /logs | DELETE | `Log.findByIdAndRemove()` |

1. Create a new folder `mkdir captains_log`
1. `cd captains_log`
1. `npm init -y`
1. `npm install express`
1. `touch server.js`
1. Edit `package.json` to have `"main": "server.js",`

<br>

## `Log` Schema/Model

1. `mkdir models`
1. `touch models/log.js`
1. Create the log schema

  - title: string
  - entry: string
  - shipIsBroken: Boolean (bonus: set a default to true)
    - Bonus:
      - as a second argument to `mongoose.Schema()`, add `{ timestamps: true }`

**Use today's lesson as a guide on how to build out a CRUD API for `Log`.**

<br>


---

*Copyright 2019, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
