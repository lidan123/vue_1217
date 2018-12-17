<template>
  <div class="regBg">
    <div class='reg-content'>
      <h1>欢迎您注册！</h1>
      <el-form ref="registerForm" :model="registerForm" label-width="100px">
        <el-form-item label="姓名">
          <el-input v-model="registerForm.name"></el-input>
        </el-form-item>

        <el-form-item label="联系电话">
          <el-input v-model="registerForm.phone"></el-input>
        </el-form-item>

        <el-form-item label="地址">
          <el-input v-model="registerForm.address"></el-input>
        </el-form-item>

        <el-form-item label="账户名称">
          <el-input v-model="registerForm.accountName"></el-input>
        </el-form-item>

        <el-form-item label="账户密码">
          <el-input v-model="registerForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <!-- <el-button><router-link :to="{path:'/content'}">立即注册</router-link></el-button> -->
          <el-button>立即注册</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      msg: 'I am register',
      registerForm: {
        name: '',
        phone: '',
        address: '',
        accountName: '',
        password: ''
      }
    }
  },
  methods: {
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
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
.regBg{
  background: #f7f7f7;
  width: 100%;
  height: 100%;
  position: fixed;
}
.reg-content{
  width: 70%;
  background: #fff;
  margin: auto;
  padding: 20px 30px;
  margin: 24px auto;
}

</style>
