$(document).ready(function(){
	// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init($('#main').get(0));
    var y=[0];
    var x=[0];
    for(var i=0.1;i<=1;i+=0.1){
    	x.push(round(i,1));
    	y.push(round(cal(i),2));
    }
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '二进熵函数曲线'
        },
        tooltip: {},
        legend: {
            data:['信息量']
        },
        xAxis: {
            data: x
        },
        yAxis: {},
        series: [{
            name: '信息量',
            type: 'line',
            data: y
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    function round(x, n) {
	    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
	}
    function cal(p){
    	return -1*p*Math.log2(p)-(1-p)*Math.log2(1-p);
    }
})