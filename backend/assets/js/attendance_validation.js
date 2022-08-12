var checkboxes = document.getElementsByName("Att"); 
var ids = document.getElementsByName("id"); 
var Present= document.getElementsByName("present"); 
var v= document.getElementsByName("v"); 

function validateAtt()  
{  

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
        // console.log(ids[i].value)
        var request = {
            "url" : "http://localhost:8080/api/users/"+ids[i].value,
            "method" : "PUT",
            "data" : [{
                name:"__v",value:Number(v[i].value)+1
        }]}
        // console.log(request.url)
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
        $.ajax(request).done(function(response){
            console.log("Data updated successfully");
        })}
    }
    // console.log(ar);

    var uncheckedItems=checkboxes.length-numberOfCheckedItems;
    alert("Total present: "+numberOfCheckedItems+" \nTotal absent: "+uncheckedItems) ;
    location.reload()
}  
function toggle(source) {
      checkboxes = document.getElementsByName('Att');
      for(var i=0, n=checkboxes.length;i<n;i++) 
      checkboxes[i].checked = source.checked;   
}

