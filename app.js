var pages=["Home", "About Me ","Counter"];

function createNav(){
    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);

    document.body.appendChild(nav);

//     function createButton(pg){
//        var butt = document.createElement("button");
//        butt.innerHTML = pg;
//        butt.addEventListener("click", function(){
//            // console.log(pg);
//            navigate(pg);
//        })
//         nav.appendChild(butt);
//     }
// }
    function createButton(pg){
        var button = document.createElement("button");
        button.innerHTML = pg;
        button.addEventListener("click", function(){
            // console.log(pg);
            navigate(pg);
        })
        nav.appendChild(button);
    }
}

function createWrapper(){
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}

function navigate(pg){
    var wrapper = document.querySelector(".wrapper");
   if(pg==="Home"){
       homePage()
        // wrapper.innerHTML="Home Page";
   }else {
       // wrapper.innerHTML="Camelia Malone";
       aboutPage()
   }

}

function homePage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML="Home Page";
    wrapper.appendChild(header);
}
function aboutPage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var top = document.createElement("h1")
    top.innerHTML = "About";
    wrapper.appendChild(top);
    var header = document.createElement("h3");
    header.innerHTML = "Camelia Malone";
    wrapper.appendChild(header);
}
function interactpage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";

    header.innerHTML = "Interact Page";
    var counter = document.createElement("h1")
    counter.classList.add("launch")
    counter.innerHTML = "Counter";
    var num = 0
    var number = document.createElement("h3")
    number.innerHTML = num;
    counter.addEventListener("click", function(){
        number.innerHTML = "";
        num = (num + 1);
        number.innerHTML = num;
    })
    wrapper.appendChild(header);
    wrapper.appendChild(counter);
    wrapper.appendChild(number);

}


createNav();
createWrapper();
navigate('Home');

