<template>
  <div class="header">
    <div class="header-left">
      <span class='header-logo'></span>
      <span class="header-title">vue后台系统</span>
    </div>
    <ul class="header-right">
      <li v-for=" item in ulList " :key="item.text"><router-link :to="{path:item.url}"><i :class=item.iconUrl></i> {{ item.text }}</router-link> </li>
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
          iconUrl:'el-icon-question',
          url:"/login"
        },
        {
          text:'退出',
          iconUrl:'el-icon-question',
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
  FILTER: progid:DXImageTransform.Microsoft.Gradient(gradientType=1, startColorStr=#46505a, endColorStr=#545c64); /*IE 6 7 8*/
  background: -ms-linear-gradient(right, #46505a, #545c64);        /* IE 10 */
  background:-moz-linear-gradient(right, #46505a, #545c64);/*火狐*/
  /* background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#AC07BD), to(#f140f8)); */
  background: -webkit-linear-gradient(right, #46505a, #545c64);   /*Safari5.1 Chrome 10+*/
  background: -o-linear-gradient(right, #46505a, #545c64);  /*Opera 11.10+*/
  background: linear-gradient(to right,#46505a,#545c64);
  background: linear-gradient(to right, #46505a, #545c64); /* Standard syntax; must be last */
  background: linear-gradient(to right,#46505a,#545c64);
  /* 渐变色兼容 */
  color: #fff;
  width: 100%;
  left: 0;
}
.header-left{
  float: left;
  height: 52px;
  line-height: 52px;
  font-size: 20px
}
.header-left>span{
  display: inline-block;
}
.header-logo{
  /* width: 120px; */
  height: 100%;
  background: #9c6a6a
}
.header-title{
  line-height: 52px;
  vertical-align: top
}
.header-right{
  margin-right: 20px;
  height: 50px;
  line-height: 50px;
  float: right;
  font-size: 14px
}
.header-right li{
  cursor: pointer;
  margin: 0;
  padding: 0 8px;
}
.header-right li a:hover{
  /* background:#4e575f; */
  color: #eee
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
