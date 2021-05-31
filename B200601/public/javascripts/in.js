

Array.from( document.getElementsByClassName("l")).forEach(i=>i.onclick=function(){
         let index=  this.getAttribute("data-id");
         window.location.href='/delete/'+index;
     
         });

     function search(){
          window.location.href='/d';
       
     }

    