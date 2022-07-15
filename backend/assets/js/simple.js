// const fs = require('fs');
import * as fs from 'fs';
console.log('hello');
var users;
fs.readFile('../../../user.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    // parse JSON object
     users = JSON.parse(data.toString());
     var user = document.getElementById('userInput').value
     for(var i=0;i<users.length;i++)
     if(users[i]==user)
     alert("Welcome "+user);
    // print JSON object
    // console.log(user);
});
