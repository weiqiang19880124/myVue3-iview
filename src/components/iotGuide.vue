<template>
  <div class="iot-guide">

    导览模块1
    <pdf
      src="http://192.168.1.24:8080/fjyximage//planapproval/programtrack/11/20200102150609217-test.pdf"
    >
      888
    </pdf>
    <div id="myChart" class="chart-wrap" style="display:none"></div>
  </div>
</template>
<script>
  import pdf from 'vue-pdf'
    export default {
        data(){
            return{}
        },
        mounted(){
            this.draw()
        },
        components:{
          pdf
        },
        methods:{
            draw(){
                let colorList=['#afa3f5', '#00d488', '#3feed4', '#3bafff', '#f1bb4c','#aff', "rgba(250,250,250,0.5)"];
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                let option= {
                    title: {
                        subtext: '报警占比',
                        x: 'center',
                        y: '47%',
                        textStyle: {
                            fontSize:18,
                            fontWeight:'normal',
                            color: ['#333']
                        },
                        subtextStyle: {
                            color: '#f1bb4c',
                            fontSize: 16
                        },
                    },
                    grid: {
                        bottom: 150,
                        left: 0,
                        right: '10%'
                    },
                    legend: {
                        show:false,
                        orient: 'vertical',
                        top: "middle",
                        right: "5%",
                        textStyle: {
                            color: '#f2f2f2',
                            fontSize: 25,

                        },
                        icon: 'roundRect'
                    },
                    series: [
                        // 主要展示层的
                        {
                            radius: ['29%', '59%'],
                            center: ['50%', '50%'],
                            type: 'pie',
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: true,
                                    length: 35,
                                    length2: 100,
                                    lineStyle: {
                                        color: '#d3d3d3'
                                    },
                                    align: 'right'
                                },
                                color: "#000",
                                emphasis: {
                                    show: true
                                }
                            },
                            label:{
                                normal:{
                                    formatter: function(params){
                                        var str = '';
                                        switch(params.name){
                                            case '烟雾传感器':str = '烟雾传感器'+params.value+'%';break;
                                            case '火焰传感器':str = '火焰传感器'+params.value+'%';break;
                                            case '一氧化碳传感器':str = '一氧化碳传感器'+params.value+'%';break;
                                            case '震动传感器':str = '震动传感器'+params.value+'%';break;
                                            case '雨滴传感器':str = '雨滴传感器 '+params.value+'%';break;
                                            case '蜂鸣器传感器':str = '蜂鸣器传感器 '+params.value+'%';break;
                                        }
                                        return str
                                    },
                                    padding: [0, -90],
                                    height: 35,
                                    rich: {
                                        a: {
                                            width:38,
                                            height:38,
                                            lineHeight: 50,

                                            align: 'left'
                                        },
                                        b: {
                                            width:29,
                                            height:45,
                                            lineHeight: 50,
                                            align: 'left'
                                        },
                                        c: {
                                            width:34,
                                            height:33,
                                            lineHeight: 50,

                                            align: 'left'
                                        },
                                        d: {
                                            width:34,
                                            height:44,
                                            lineHeight: 50,
                                            align: 'left'
                                        },
                                        e: {
                                            width:38,
                                            height:30,
                                            lineHeight: 50,
                                            align: 'left'
                                        },
                                        nameStyle: {
                                            fontSize: 16,
                                            color: "#555",
                                            align: 'left'
                                        },
                                        rate: {
                                            fontSize: 20,
                                            color: "#1ab4b8",
                                            align: 'left'
                                        }
                                    }
                                }
                            },
                            data: [
                                {
                                    value:17,
                                    name:'烟雾传感器',
                                },
                                {value:23, name:'火焰传感器'},
                                {value:27, name:'一氧化碳传感器'},
                                {value:33, name:'震动传感器'},
                                {value:9, name:'雨滴传感器'},
                                {value:9, name:'蜂鸣器传感器'}],
                        },
                        // 边框的设置
                        {
                            radius: ['54%', '59%'],
                            center: ['50%', '50%'],
                            type: 'pie',
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            animation: false,
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color:'rgba(250,250,250,0.5)'
                                }
                            },
                            data: [{
                                value: 1,
                            }],
                        }
                    ]
                };
                myChart.setOption(option);
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" type="text/scss" scoped>
  .iot-guide{
    width:100%;
    height:100%;
    //background:blue;
    display: flex;
    justify-content: center;
    align-items: center;
    .chart-wrap{
      width:500px;
      height:500px;
    }
  }
</style>
<style  lang="scss" type="text/scss">
  .iot-guide{

  }
</style>
