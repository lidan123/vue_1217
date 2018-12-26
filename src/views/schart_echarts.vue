<template>
  <div class="content-box">
    <h1 class='content-wrap-brand'>111 > form表单练习</h1>
    <div class='content-wrap-body'>
      <div class='cont-container'>
        <div class='schart'>
          <h3>schart折线图</h3>
          <schart :canvasId= "canvasData1.canvasId"
            :type= "canvasData1.type"
            :width= 'canvasData1.width'
            :height= "canvasData1.height"
            :data= 'canvasData1.data'
            :options= "canvasData1.options"
          ></schart>


          <schart :canvasId= "canvasData2.canvasId"
            :type= "canvasData2.type"
            :width= 'canvasData2.width'
            :height= "canvasData2.height"
            :data= 'canvasData2.data'
            :options= "canvasData2.options"
          ></schart>
        </div>

        <div class='echarts'>
          <h3>echarts饼状图</h3>
          <div class='echarts_item'>
            <div id="echarts1" :style="{flex:1,height:'400px',display:'inline-block'}"></div>
            </div>

          <h3>echarts折线图</h3>
          <div class='echarts_item'>
            <div id="echarts2" :style="{flex:1,height:'400px',display:'inline-block'}"></div>
          </div>
        </div>

        <!-- <div class=''>
          {{$store.state.count}}
          <button @click="add">+</button>
          <button @click="minus">-</button>
        </div> -->

      </div>
    </div>
  </div>
</template>

<script>

import Schart from 'vue-schart'
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {
  components: {
    Schart
  },
  name: 'vue2',
  data () {
    return {
      canvasData1: {
        canvasId: 'myCanvas',
        type: 'line',
        width: 500,
        height: 500,
        data: [
            {name: '2014', value: 1342},
            {name: '2015', value: 2123},
            {name: '2016', value: 1654},
            {name: '2017', value: 1795},
        ],
        options: {
            title: 'Total sales of stores in recent years-canvasData1'
        }
      },
      canvasData2: {
        canvasId: 'myCanvas1',
        type: 'line',
        width: 500,
        height: 800,
        data: [
            {name: '2014', value: 1342},
            {name: '2015', value: 2123},
            {name: '2016', value: 1654},
            {name: '2017', value: 1795},
        ],
        options: {
            autoWidth: true,                // 设置宽高自适应
            showValue: true,               // 是否在图表中显示数值
            topPadding: 50,                 // canvas 上边距
            bottomPadding: 50,              // canvas 下边距
            leftPadding: 50,                // canvas 左边距
            rightPadding: 0,                // canvas 右边距
            yEqual: 5,                      // y轴分成5等分
            bgColor: '#ffffff',             // 默认背景颜色
            fillColor: '#1E9FFF',           // 默认填充颜色
            axisColor: '#666666',           // 坐标轴颜色
            contentColor: '#eeeeee',        // 内容横线颜色
            title: 'Total sales of stores in recent years-canvasData2',                      // 图表标题
            titleColor: '#000000',          // 图表标题颜色
            titlePosition: 'top'            // 图表标题位置: top / bottom
        }
      }

    }
  },
  methods: {
    add () {
      this.$store.commit('increment',5)
    },
    minus () {
      this.$store.commit('decrease',5)
    },
    echarts1 (){
      /*ECharts图表*/
      // var myChart = echarts.init(document.getElementById('echarts1'),'light');
      var myChart = echarts.init(document.getElementById('echarts1'),'dark');
      // var myChart = echarts.init(document.getElementById('echarts1'));
      myChart.setOption({
        // backgroundColor: '#2c343c',  //深色背景
        textStyle: {
          // color: 'red'   //设置文本样式
        },
        series : [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          // roseType: 'angle',   //切为南丁格尔图，南丁格尔图会通过半径表示数据的大小
          itemStyle: {
            normal: {
              // 阴影的大小
              shadowBlur: 200,
              // 阴影水平方向上的偏移
              shadowOffsetX: 0,
              // 阴影垂直方向上的偏移
              shadowOffsetY: 0,
              // 阴影颜色
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            emphasis: {
              // 鼠标 hover 时候的高亮样式
              itemStyle: {
                // 高亮时点的颜色。
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              label: {
                show: true,
                // 高亮时标签的文字。
                formatter: 'This is a emphasis label.'
              }
            }
          },
          data:[
            {value:400, name:'搜索引擎'},
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:274, name:'联盟广告'},
            {value:235, name:'视频广告'}
          ]
        }
        ]
      })
    },
    echarts2 (){
      /*ECharts图表*/
      // var myChart = echarts.init(document.getElementById('echarts1'),'light');
      // var myChart = echarts.init(document.getElementById('echarts1'),'dark');
      var myChart = echarts.init(document.getElementById('echarts2'));
      myChart.setOption({
        title: {
            text: '某楼盘销售情况',
            subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['意向','预购','成交']
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['stack', 'tiled']},
                saveAsImage: {show: true}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '成交',
            type: 'line',
            smooth: true,
            data: [10, 12, 21, 54, 260, 830, 710]
        },
        {
            name: '预购',
            type: 'line',
            smooth: true,
            data: [30, 182, 434, 791, 390, 30, 10]
        },
        {
            name: '意向',
            type: 'line',
            smooth: true,
            data: [1320, 1132, 601, 234, 120, 90, 20]
        }]
      })
    }
  },
  mounted () {
    this.echarts1();
    this.echarts2();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.schart,.echarts{
  padding: 10px
}

.schart .schart_item,.echarts .echarts_item{
  padding: 10px 0
}

.echarts_item{
  display: flex
}
</style>
