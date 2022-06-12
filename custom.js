document.querySelector(".bi-list").addEventListener('click', function () {
    document.querySelector(".menus ul").classList.toggle("active1")
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