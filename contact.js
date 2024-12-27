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