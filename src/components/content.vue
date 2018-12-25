<template>
  <div id="content">
    <aside-bar></aside-bar>
    <vue-header></vue-header>
    <div class="content">
      <div class="container" :style="{'height':contentH+'px'}">
        <h1>info: {{info}}</h1>
        <h2>info1: {{info1}}</h2>
        <button @click="getInfo">get info</button>
        <button @click="getInfo1">get info1</button>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import VueHeader from './vueheader'
import AsideBar from './asidebar'
// import axios from 'axios'

export default {
  components: {
    VueHeader,AsideBar
  },
  name: 'App',
    data () {
    return {
      info: null,
      info1: null,
      isLogin: false,
      contentH:300,
      calHeight:{
          height: this.contentH+"px"
      }
    }
  },
  methods: {
    showData (data) {
      if(data == "hasLogin"){
        this.isLogin =true
      }else{
        this.isLogin =false
      }
      console.log("data:"+data)
    },
    getInfo (data){
      var url1 ='https://api.coindesk.com/v1/bpi/currentprice.json';
      this.$axios.get(this.HOME+'/v2/book/1220562').then(response => {
        this.info = response
      }).catch(error => {
         console.log(error)
      })

    },
    getInfo1 (data){
      var params = new URLSearchParams();
      params.append('startTime', '2018-10-01 00:00:00');       //你要传给后台的参数值 key/value
      params.append('endTime', '2018-12-01 00:00:00');;
      params.append("userId",'794d1300620d4418b95e807bee1aac26');
      params.append("timeFlag",'2')
      this.$axios({
          method: 'post',
          url:'/dpt/vue/getList',
          data:params
      })
      .then(response =>(this.info1 = response))
    }
  },
  mounted () {
    //   页面加载完成计算可视窗口高度并赋值
    let h = document.documentElement.clientHeight-70;
    this.contentH= h;

    window.onresize = () => {
      return (() => {
        let h = document.documentElement.clientHeight-70;
        this.contentH= h;
      })()
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content{
    width:82%;
    position: fixed;
    top: 46px;
    left: 18%;
}
.content .container{
    background: #efefef;
    margin: 10px 6px 0 4px;
    overflow-y: scroll
}
</style>
