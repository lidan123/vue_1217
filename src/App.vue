<template>
  <div id="appVue">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
    data () {
    return {
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
    width:88%;
    position: fixed;
    top: 52px;
    left: 12%;
}
.content .container{
    background: #efefef;
    margin: 10px 6px 0 4px;
}
</style>
