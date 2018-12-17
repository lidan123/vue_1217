<template>
  <div class="header">
    <div class="header-left">vue后台系统</div>
    <ul class="header-right">
      <li v-for=" item in ulList " :key="item.text"><router-link :to="{path:item.url}">{{ item.text }}</router-link> </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vueheader',
  data () {
    return {
      msg: 'I am header',
      ulList:[
        {
          text:'登录',
          url:"/login"
        },
        {
          text:'退出',
          url:"/login"
        }
      ],
      show:true
    }
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
  /* color: #42b983; */
  color: #fff;
  text-decoration: none
}

.header{
  position: fixed;
  top: 0;
  /* 渐变色兼容 */
  FILTER: progid:DXImageTransform.Microsoft.Gradient(gradientType=1, startColorStr=#2568a2, endColorStr=#18b2ec); /*IE 6 7 8*/
  background: -ms-linear-gradient(right, #2568a2, #18b2ec);        /* IE 10 */
  background:-moz-linear-gradient(right, #2568a2, #18b2ec);/*火狐*/
  /* background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#AC07BD), to(#f140f8)); */
  background: -webkit-linear-gradient(right, #2568a2, #18b2ec);   /*Safari5.1 Chrome 10+*/
  background: -o-linear-gradient(right, #2568a2, #18b2ec);  /*Opera 11.10+*/
  background: linear-gradient(to right,#2568a2,#18b2ec);
  background: linear-gradient(to right, #2568a2, #18b2ec); /* Standard syntax; must be last */
  background: linear-gradient(to right,#2568a2,#18b2ec);
  /* 渐变色兼容 */
  color: #fff;
  width: 88%;
  left: 12%;
}
.header-left{
  float: left;
  height: 52px;
  line-height: 52px;
  font-size: 20px
}
.header-right{
  margin: 1px;
  height: 50px;
  line-height: 50px;
  float: right;
}
.header-right li{
  cursor: pointer;
  margin: 0;
  padding: 0 20px;
}
.header-right li:hover{
  background: #209cd0;
}
/* 过渡动画 */
.show-enter-active,.show-leave-active{
  transition:all 2s;
}
.show-enter,.show-leave-to{
  margin-left: 100px;
}
.show-enter-to,.show-leave{
  margin-left:0px;
}
</style>
