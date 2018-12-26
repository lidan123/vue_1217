<template>
  <div class="aside">
    <el-row class="tac">
      <el-col >
        <el-menu  v-for="item in ulList" :key="item.text"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <!-- <span>{{item.text}}</span> -->
              <router-link tag="div" :to="{path: item.url}"><i class="el-icon-location"></i> {{ item.text }}</router-link>

            </template>
            <!-- <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> -->
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
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
          text:'接口测试',
          url:"/apiTest"
        },
        {
          text:'表单练习',
          url:"/formTest"
        },
        {
          text:'图表',
          url:"/schart_echarts"
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
  height: 100%;
  position: fixed;
  top: 0;
  background:#545c64;
  color: #fff;
  width: 18%;
  /* min-width: 200px; */
  left: 0;
  top: 54px;
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
