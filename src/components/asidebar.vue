<template>
  <div class="aside">
    <div class="aside-logo"></div>

    <ul class="aside-ul">
      <router-link v-for="item in ulList" :key="item.text" tag="li" :to="{path: item.url}"><i class="el-icon-message"></i>{{ item.text }}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'asidebar',
  data () {
    return {
      msg: 'I am asidebar',
      ulList:[
        {
          text:'PAGE1',
          url:"/vue1"
        },
        {
          text:'PAGE2',
          url:"/vue2"
        },
        {
          text:'PAGE3',
          url:"/vue3"
        }
      ]
    }
  },
  methods: {
    navigator () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  /* color: #42b983; */
  color: #fff;
}

.aside{
  position: fixed;
  top: 0;
  background:rgba(52, 108, 158, 0.6);
  color: #fff;
  width: 18%;
  /* min-width: 200px; */
  left: 0;
}

.aside-logo{
  width: 100%;
  /* 渐变色兼容 */
  FILTER: progid:DXImageTransform.Microsoft.Gradient(gradientType=1, startColorStr=#205f96, endColorStr=#2568a2); /*IE 6 7 8*/
  background: -ms-linear-gradient(right, #205f96, #2568a2);        /* IE 10 */
  background:-moz-linear-gradient(right, #205f96, #2568a2);/*火狐*/
  /* background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#AC07BD), to(#f140f8)); */
  background: -webkit-linear-gradient(right, #205f96, #2568a2);   /*Safari5.1 Chrome 10+*/
  background: -o-linear-gradient(right, #205f96, #2568a2);  /*Opera 11.10+*/
  background: linear-gradient(to right,#205f96,#2568a2);
  background: linear-gradient(to right, #205f96, #2568a2); /* Standard syntax; must be last */
  background: linear-gradient(to right,#205f96,#2568a2);
  /* 渐变色兼容 */
  height: 52px;
}
.aside-ul{
  margin: 0
}
.aside-ul li{
  padding: 12px 20px;
  margin: 0;
  cursor: pointer;
  border-bottom: 1px solid #eee
}
.aside-ul li:last-child{
  border-bottom: 0
}
.aside-ul li:hover{
  background: #7d9ebb
}
</style>
