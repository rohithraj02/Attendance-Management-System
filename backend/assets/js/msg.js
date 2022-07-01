// console.log('This is msg')
$("#add_user").submit(function(event){
    alert("Data inserted Successfully");
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")
        var request={
            "url" : "http://localhost:8080/api/users/$(id)",
            "method" : "DELETE"
        }
        if(confirm("Do you really want to delete this student?")){
            $.ajax(request).done(function(response){
                alert("Student deleted successfully");
                location.reload()
            })
        }
    })
}