//selecting sidenav bar and menu icon
var navbar=document.getElementById("sidenav")
var menuicon=document.getElementById("menu-icon")
var closenav=document.getElementById("close-nav")
menuicon.addEventListener("click",function()
{
    navbar.style.right=0;
})
closenav.addEventListener("click",function()
{
    navbar.style.right="-50%"
})

//search functionality
var dc=document.getElementById("product-container")
var search=document.getElementById("Search")
  
    var plist=dc.querySelectorAll("div")
    search.addEventListener("keyup",function(){
        var ev=event.target.value.toUpperCase()
        for(count=0;count<plist.length;count=count+1)
        {
            if(plist[count].textContent.toUpperCase().indexOf(ev)<0)
                {
                    plist[count].style.display="none"
                }
                else
                {
                    plist[count].style.display="block"
                }
            
        }
    })
   

    
        
      




