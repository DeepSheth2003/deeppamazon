// Account Login :

const login = document.getElementById("nav-login");
login.addEventListener("click",()=>{
    window.open("./media/signin.html","_parent");
});

const searchbar = document.getElementById("search-box");
const searchicon = document.getElementById("search-icon");
searchicon.addEventListener("click",()=>{
    if(searchbar.value==0){
        searchbar.placeholder="Search something here!";
    }
});

const backTop = document.getElementById("back-btn");
backTop.addEventListener("click",()=>{   
    window.scrollTo({top:0,behavior:'smooth'});
});

const insta = document.getElementById("insta");
insta.addEventListener("click",()=>{
    window.open("https://www.instagram.com/deep_.088?igsh=NTc4MTIwNjQ2YQ==","_parent");
});

const whatsapp = document.getElementById("whatsapp");
whatsapp.addEventListener("click",()=>{
    window.open("https://wa.me/916353304906","_parent");
});
