document.querySelector(".bi-list").addEventListener('click', function () {
    document.querySelector(".menu ul").classList.toggle("active1")
})

document.querySelector(".bi-list").addEventListener('click', function () {
    document.querySelector(".menus ul").classList.toggle("active1")
})
/* Inspect Closed */

document.addEventListener('contextmenu', function (ins) {
    ins.preventDefault();
})

document.onkeydown = function (e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

let thumbnails = document.getElementsByClassName('thumbnail')
let activeImages = document.getElementsByClassName('active')

let featured_img = document.getElementById('featured');
for (var i=0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('click', function(){
        featured_img.src = this.src; 
        if (activeImages.length > 0){
            activeImages[0].classList.remove('border_toggle')
            activeImages[0].classList.remove('active')
        }
        

        this.classList.add('active');
        this.classList.add('border_toggle')
        // document.getElementById('featured').src = this.src
    })
}


let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function(){
    if(thumbnails[0].classList.contains('active')){
        console.log();
    }
    else{
        for(var i = 0; i<thumbnails.length; i++){
        if(thumbnails[i].classList.contains('active')){
            thumbnails[i].classList.remove('border_toggle');
            thumbnails[i].classList.remove('active');
            thumbnails[i - 1].classList.add('border_toggle');
            thumbnails[i - 1].classList.add('active');
            featured_img.src = thumbnails[i - 1].src;
            break;
        }
    }
    }
})

buttonRight.addEventListener('click', function(){
    if(thumbnails[thumbnails.length - 1].classList.contains('active')){
        console.log();
    }
    else{
        for(var i = 0; i<thumbnails.length; i++){
        if(thumbnails[i].classList.contains('active')){
            thumbnails[i].classList.remove('border_toggle');
            thumbnails[i].classList.remove('active');
            thumbnails[i + 1].classList.add('border_toggle');
            thumbnails[i + 1].classList.add('active');
            featured_img.src = thumbnails[i + 1].src;
            break;
        }
    }
    }
})


var mezunlar = [
    {
        class1: "esas-mezun1",
        metn: "Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. AZII Academy bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək.",
        src: "Images/Mezun1.png",
        name: "Rauf İsmayılov",
        vezife: "Back End Proqramçı"
    },
    {
        class1: "esas-mezun2",
        metn: "Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. AZII Academy bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək.",
        src: "Images/Mezun2.png",
        name: "Leyla",
        vezife: "Front End Proqramçı"
    },
    {
        class1: "esas-mezun3",
        metn: "Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. AZII Academy bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək.",
        src: "Images/Mezun3.png",
        name: "Aynur",
        vezife: "Full Stack Proqramçı"
    },
    {
        class1: "esas-mezun4",
        metn: "Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. AZII Academy bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək.",
        src: "Images/Mezun4.png",
        name: "Nailə Əhmədova",
        vezife: "UI/UX Designer"
    },
    {
        class1: "esas-mezun3",
        metn: "Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. AZII Academy bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək.",
        src: "Images/Mezun5.png",
        name: "Kərim Əmiraslanov",
        vezife: "Back End Proqramçı"
    },
    {
        class1: "esas-mezun2",
        metn: "Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. AZII Academy bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək.",
        src: "Images/Mezun6.png",
        name: "Ayan",
        vezife: "UI/UX Designer"
    },
    {
        class1: "esas-mezun1",
        metn: "Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. AZII Academy bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək.",
        src: "Images/Mezun7.png",
        name: "Zeynəb",
        vezife: "Front End Proqramçı"
    }
]

for (let i = 0; i < mezunlar.length; i++) {
    document.querySelector(".esas-mezunlar1").innerHTML += `
    <div class="esas-mezun ${mezunlar[i].class1}">
    <div class="mez-text">${mezunlar[i].metn}</div>
    <div class="mez-img">
    <img src="${mezunlar[i].src}">
    </div>
    <h5>${mezunlar[i].name}</h5>
    <p>${mezunlar[i].vezife}</p>
</div>
    `
}

var n = 0;
$(".bi-arrow-right-short").click(function () {
    if (n <= -600) {

    }
    else {
        n += -100;
    }
    $(".box").css("transform", "translateX(" + n + "%)")
})


$(document).ready(function () {
    $(".esas-mezun img").mouseover(function () {
        $(this).parents(".esas-mezun").children().eq(0).show();
    })
    $(".esas-mezun img").mouseleave(function () {
        $(this).parents(".esas-mezun").children().eq(0).hide();
    })
})

//////////////////cateqoriya/////////////
$(document).ready(function () {
    $(".section ul li").click(function () {
        $("section ul li").removeClass("colorr") 
        $(this).addClass("colorr") 
        var a= $(this).attr("cat");
            if(a=='*'){
                $(".col-md-4").show()
            }else{
                $(".col-md-4").hide()
                $(".col-md-4").filter($("."+a)).show()
                }
    });
})