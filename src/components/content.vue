<template>
  <div id="content">
    <aside-bar></aside-bar>
    <vue-header></vue-header>
    <div class="content">
      <div class="container" :style="{'height':contentH+'px'}">
        {{info}}
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import VueHeader from './vueheader'
import AsideBar from './asidebar'
import axios from 'axios'

export default {
  components: {
    VueHeader,AsideBar,axios
  },
  name: 'App',
    data () {
    return {
      info: null,
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

    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(response =>(this.info = response))
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
}
</style>
