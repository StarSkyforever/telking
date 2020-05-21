$(document).ready(function() {

    // $(".pre").hover(function() {
    //     $(".dollList").hide(1000)
    // })

    //淡入
    // $(".next").hover(function() {
    //         $(".dollList").fadeIn()
    //     })
    //     //淡出
    // $(".pre").hover(function() {
    //         $(".dollList").fadeToggle()
    //     })
    //fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）

    //切换hide和show()方法
    // $(".pre").hover(function() {
    //     $(".dollList").toggle()
    // })

    //show()回调方法
    // $(".next").hover(function() {
    //     $(".dollList").show(1000)
    // })

    $(".next").click(function() {
        $("#one").animate({
            left: '800px'
        })
    })

    $("h2").siblings("p").css({ "color": "red", "border": "2px solid red" });

    $(".flip").click(function() {
        $(".panel").slideDown()("slow");
    });
    // $("div").children().css({ "color": "red", "border": "2px solid blue" });
})