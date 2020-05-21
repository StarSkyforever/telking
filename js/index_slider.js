$(document).ready(function() {
    // 设置全局变量
    var cur = 0, //当前的图片序号
        imgLen = $(".imgList li").length; //获取图片数量
    timer = null; //设置定时器的名字


    // 鼠标移到向左和向右的图标上关闭定时，离开则重置定时器
    $(".pre,.next").hover(function() {
        clearInterval(timer);
    }, function() {
        // out,改变图片
        changeImg();
    });

    //鼠标悬停到图片上时，关掉计时器，离开则重置
    $(".imgList").hover(function() {
        // over
        clearInterval(timer)
    }, function() {
        // out
        changeImg();
    });

    //点击向左图标根据cur进行上一个图片处理
    $(".pre").click(function() {
        cur = cur > 0 ? (--cur) : (imgLen - 1);
        changeTo(cur);
    });
    //点击向右图标根据cur进行上一个图片处理
    $(".next").click(function() {
        cur = cur < (imgLen - 1) ? (++cur) : 0;
        changeTo(cur);
    });

    //下方的方块点击绑定事件，悬停时清空定时，移走。。。
    $(".dollList li").hover(function() {
        // over
        clearInterval(timer);
        var index = $(this).index();
        cur = index;
        changeTo(cur);
    }, function() {
        // out
        changeImg();
    });

    //封装图片自动播放函数
    function changeImg() {
        timer = setInterval(function() {
            if (cur < imgLen - 1) {
                cur++;
            } else {
                cur = 0;
            }
            changeTo(cur);
        }, 2000);
    }
    //自动切换图片
    changeImg();

    //图片切换函数
    function changeTo(num) {
        var go = num * 539;
        $(".imgList").animate({ "left": -go }, 1000);
        //找到当前的方块，移走标识，给num加上
        $(".dollList").find("li").removeClass("sec").eq(num)
            .addClass("sec");
        // var sec=$(".sec")  
    }
});