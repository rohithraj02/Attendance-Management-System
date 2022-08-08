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
    // var ur="http://localhost:8080/api/users/";
    // console.log(ur);
    // console.log(data.id);
    var request = {
        "url" : "http://localhost:8080/api/users/"+data.id,
        "method" : "PUT",
        "data" : data
    }
    $.ajax(request).done(function(response){
        alert("Data updated successfully");
    })
})  

// $("#mark_att").submit(function(event){
//     event.preventDefault();
//     // console.log($(update_user));
//     var unindexed_array=$(mark_att).serializeArray();
//     console.log(unindexed_array);
// })

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