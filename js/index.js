window.onload = function() {

    // https://edu.telking.com/api/?type=month

    var myChart = echarts.init(document.getElementById('lineChart'));
    // 指定图表的配置项和数据
    myChart.showLoading();
    loadXMLDoc()

    function loadXMLDoc() {
        var xmlhttp;
        // 兼容浏览器
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                myChart.hideLoading();
                let res = JSON.parse(xmlhttp.responseText).data
                myChart.setOption({
                    title: {
                        text: '曲线图数据展示',
                        left: 'center'
                    },
                    xAxis: {
                        type: 'category',
                        data: res.xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: res.series,
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            color: "#5490F0"
                        },
                        areaStyle: {
                            color: "#F3F6FE"
                        },
                        itemStyle: {
                            normal: {
                                color: "#5490F0"
                            }
                        }
                    }]
                });
            }
        }
        xmlhttp.open("GET", "https://edu.telking.com/api/?type=month", true);
        xmlhttp.send();
    }





    // 饼状图
    var pie = echarts.init(document.getElementById('pie'));
    pie.showLoading();
    loadXMLDoc2()

    function loadXMLDoc2() {
        var xmlhttp;
        // 兼容浏览器
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                pie.hideLoading();
                let res = JSON.parse(xmlhttp.responseText).data
                pie.setOption({
                    title: {
                        text: '饼状图数据展示',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    series: [{
                        name: "访问来源",
                        type: 'pie',
                        radius: '70%',
                        center: ['50%', '55%'],
                        data: [
                            { value: res.series[0], name: res.xAxis[0] },
                            { value: res.series[1], name: res.xAxis[1] },
                            { value: res.series[2], name: res.xAxis[2] },
                            { value: res.series[3], name: res.xAxis[3] },
                            { value: res.series[4], name: res.xAxis[4] },
                            { value: res.series[5], name: res.xAxis[5] },
                            { value: res.series[6], name: res.xAxis[6] }
                        ],
                        // res.series,

                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }]
                });
            }
        }
        xmlhttp.open("GET", "https://edu.telking.com/api/?type=week", true);
        xmlhttp.send();
    }



    // 柱状图
    var bar = echarts.init(document.getElementById('bar'));
    // 指定图表的配置项和数据
    bar.showLoading();
    loadXMLDoc3()

    function loadXMLDoc3() {
        var xmlhttp;
        // 兼容浏览器
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                bar.hideLoading();
                let res = JSON.parse(xmlhttp.responseText).data
                bar.setOption({
                    title: {
                        text: '柱状图数据展示',
                        left: 'center'
                    },
                    xAxis: {
                        type: 'category',
                        data: res.xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: res.series,
                        type: 'bar',
                        barMaxWidth: '30%',
                        itemStyle: {
                            color: "#4587EF"
                        },
                        // showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(220, 220, 220, 0.8)'
                        }
                    }]
                });
            }
        }
        xmlhttp.open("GET", "https://edu.telking.com/api/?type=week", true);
        xmlhttp.send();
    }
}