

Array.from( document.getElementsByClassName("l")).forEach(i=>i.onclick=function(){
         let index=  this.getAttribute("data-id");
         window.location.href='/delete/'+index;
     
         });

     
     Array.from( document.getElementsByClassName("p")).forEach(i=>i.onclick=function(){
              let index=  this.getAttribute("data-id");
              window.location.href='/update/'+index;
          
              });
     function search(){
          window.location.href='/d';
       
     }

    