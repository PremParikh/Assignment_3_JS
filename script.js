//Author : Prem Parikh
//date:10/11/2022
//Assignment 3

$( document ).ready(function() {
    func1();    
});

function func1(){
    
        $.getJSON("team.json",function(final){
            $.each(final, function(_i,data){
                var script=`<h2>${data.name}</h2>
                   <h5></h5>${data.position}</h5>
                   <p>${data.bio}</p>`

               $('#team').append(script);
            });
          
       });
    }
   

