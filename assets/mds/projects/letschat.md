# Letschat #

Simple chat app built with __Angular__ and __Firebase__

![screenshot](https://firebasestorage.googleapis.com/v0/b/portfolio-os-187bc.appspot.com/o/projects%2Fletschat%2Flanding_page.jpg?alt=media&token=b7c9a47b-6e9f-41ac-a2bd-290f789b1a4b)

# Demo #

See the live running app [here](http://ameerthehacker.github.io/letschat/)

# Github  #

Feel free to fork my git repo [here](https://github.com/ameerthehacker/letschat)

# Technology Stack

1. Angular 5
2. Firebase
3. Semantic UI

# Features #

## Social Login ##

People can login with OAuth provided by

* Facebook
* Google+
* Github

![screenshot](https://firebasestorage.googleapis.com/v0/b/portfolio-os-187bc.appspot.com/o/projects%2Fletschat%2Flogin_page.png?alt=media&token=588f118a-9b6d-4e1a-ae98-fb820c1f4e8b)

## Paginated Chats ##

Only last ten messages of the users are loaded and older messages can be loaded by using the old messages button at the top

![screenshot](https://firebasestorage.googleapis.com/v0/b/portfolio-os-187bc.appspot.com/o/projects%2Fletschat%2Fpagination.png?alt=media&token=5b1f4c64-81e3-4203-9879-ffb42d62bdb3)

## Typing indicator ##

A small typing... indicator is shown on the top when your friend is typing

## Online Status ##

People can see whether their friends are online and if not their last seen is shown in a user friendly manner

# Installation #

1. Install node.js from https://nodejs.org/en/

2. Install angular-cli using the command

```
npm install -g @angular/cli
```

3. In the project folder run

```
npm install
```

4. Update firebase config if needed in __src/environments/environment.ts__

```javascript
firebaseConfig: {
    apiKey: YOUR_KEY,
    authDomain: YOUR_DOMEAIN,
    databaseURL: YOUR_URL,
    projectId: YOUR_PROJECT_ID,
    storageBucket: YOUR_BUCKET,
    messagingSenderId: YOUR_SENDER_ID
}
```


5. Start the server using the command

```
ng serve
```

6. Browse the URL __localhost:4200__ in the browser