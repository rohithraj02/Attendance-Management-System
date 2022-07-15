var checkboxes = document.getElementsByName("Att"); 
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
    
    var numberOfCheckedItems = 0;  
    // const ar[];
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
        numberOfCheckedItems++;  
    }  
    var uncheckedItems=checkboxes.length-numberOfCheckedItems;
    alert("Total present: "+numberOfCheckedItems+" \nTotal absent: "+uncheckedItems) ;
    resp();
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

