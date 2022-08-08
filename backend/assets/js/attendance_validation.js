var checkboxes = document.getElementsByName("Att"); 
var ids = document.getElementsByName("id"); 
var Present= document.getElementsByName("present"); 
var v= document.getElementsByName("v"); 

// import axios from 'axios';
// const form = document.getElementById('attendance'); 
// const axios = require('axios');
// const fs = require('fs');
// var json = require('../../../user.json');

// var user;
// fs.readFile('../../../user.json', 'utf-8', (err, data) => {
//     if (err) {
//         throw err;
//     }

//     // parse JSON object
//      user = JSON.parse(data.toString());
//      for(var i=0;i<user.length;i++)
//      console.log(user[i].name);
//     // print JSON object
//     console.log(user);
// });
function validateAtt()  
{  
    // console.log(users);
    // console.log(ids);
    var numberOfCheckedItems = 0;  
    const ar=[];
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        // console.log(ids[i].value)
   
        if(checkboxes[i].checked)  {
        ar.push(ids[i].value);
        numberOfCheckedItems++;  
        // console.log(Present[i].value)
        }
        else
        ar.push(0);
    }  
    for(let i=0;i<ids.length;i++){
        console.log(ids[i].value)
        var request = {
            "url" : "http://localhost:8080/api/users/"+ids[i].value,
            "method" : "PUT",
            "data" : [{
                name:"__v",value:Number(v[i].value)+1
        }]}
        console.log(request.url)
        $.ajax(request).done(function(response){
            console.log("Data updated successfully");
        })
    }
    for(var i=0;i<ar.length;i++){
        if(ar[i]!=0){
        var request = {
            "url" : "http://localhost:8080/api/users/"+ar[i],
            "method" : "PUT",
            "data" : [{
                name:"present",value:Number(Present[i].value)+1
        }]
        }
        // console.log(request.url);
        // console.log(request.data);
        $.ajax(request).done(function(response){
            console.log("Data updated successfully");
        })}
    }

    //try using $inc (see documentation). Store id of checkboxes ticked , and increment only those values.

    console.log(ar);
    // for(var i=0;i<ar.length;i++){}
    // var request = {
    //     "url" : "http://localhost:8080/api/users/",
    //     "method" : "GET",
    //     // "data" : data
    // }
    // $.ajax(request).done(function(response){
    //     alert("Data updated successfully");
    // })


    // window.open('http://localhost:8080/api/users')
    // .then(function(response){
    //     console.log(response.data);
    // });


    var uncheckedItems=checkboxes.length-numberOfCheckedItems;
    alert("Total present: "+numberOfCheckedItems+" \nTotal absent: "+uncheckedItems) ;
    // resp();
    // var markedCheckbox = document.getElementsByName('att');  
    // for (var checkbox of markedCheckbox) {  
    //   if (checkbox.checked)  
    //     document.body.append(checkbox.value + ' ');  
    // }  
}  
function toggle(source) {
      checkboxes = document.getElementsByName('Att');
      for(var i=0, n=checkboxes.length;i<n;i++) 
      checkboxes[i].checked = source.checked;   
}

