// console.log('This is msg')
$("#add_user").submit(function(event){
    alert("Data inserted Successfully");
})  

$("#update_user").submit(function(event){
    event.preventDefault();
    // console.log($(update_user));
    var unindexed_array=$(update_user).serializeArray();
    console.log(unindexed_array);
    var data={}
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    var request = {
        "url" : "http://localhost:8080/api/users/"+data.id,
        "method" : "PUT",
        "data" : data
    }
    $.ajax(request).done(function(response){
        alert("Data updated successfully");
    })
})  
function dele(){
    // var id=$(this).attr("data-id")
    var id=document.getElementById('delete-user').value;
    console.log(id);
    var request={   
        "url" : 'http://localhost:8080/api/users/'+id,
        "method" : "DELETE"
    }
    if(confirm("Do you really want to delete this student?")){
        $.ajax(request).done(function(response){
            alert("Student deleted successfully");
            location.reload()
        })
    }
    }