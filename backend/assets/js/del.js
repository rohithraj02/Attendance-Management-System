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