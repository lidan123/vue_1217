<template>
  <div class="loginBg">
    <div class='login-content'>
      <h1 :style="{paddingTop:contentH+'px',fontSize: 20+'px'}">VUE</h1>
      <h2>统一管理平台</h2>

      <el-form ref="form" :rules="rules" status-icon :model="form" class="form">
        <el-form-item prop="name">
          <el-input v-model="form.name" prefix-icon="el-icon-edit" clearable placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" prefix-icon="el-icon-view" clearable placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="verify">
          <el-input v-model.number="form.verify" prefix-icon="el-icon-mobile-phone" clearable placeholder="验证码"></el-input>
        </el-form-item>
        <div class="btn-submit">
          <router-link tag="div" :to="{path: '/register'}" class="register-btn btn-group"><el-button type="primary" plain="">注册</el-button></router-link>
          <div class="btn-group"><el-button type="primary" @click="onsubmit('form')">登录</el-button></div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hasLogin'],
  name: 'login',
  data () {
    return {
      msg: 'I am login',
      contentH:80,
      form: {
        name: '',
        password: '',
        verify: '',
        date2: '',
        canSub: false
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 8, message: '长度为6-8位字符', trigger: 'blur' }
        ],
        verify: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onsubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/login')
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  mounted () {
    //   页面加载完成计算可视窗口高度并赋值
    let h = document.documentElement.clientHeight-500;
    this.contentH= h/2;
    console.log(this.contentH)

    window.onresize = () => {
      return (() => {
        let h = document.documentElement.clientHeight-500;
        this.contentH= h/2;
    console.log(this.contentH)
      })()
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
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  /* color: #42b983; */
  color: #fff;
}

.loginBg{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:#53c3f9;
}
.login-content{
  width: 70%;
  margin: auto;
  height: 100%;
  /* 渐变色兼容 */
  FILTER: progid:DXImageTransform.Microsoft.Gradient(gradientType=1, startColorStr=#51c7ff, endColorStr=#91dbff); /*IE 6 7 8*/
  background: -ms-linear-gradient(top, #51c7ff, #91dbff);        /* IE 10 */
  background:-moz-linear-gradient(top, #51c7ff, #91dbff);/*火狐*/
  /* background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#AC07BD), to(#f140f8)); */
  background: -webkit-linear-gradient(top, #51c7ff, #91dbff);   /*Safari5.1 Chrome 10+*/
  background: -o-linear-gradient(top, #51c7ff, #91dbff);  /*Opera 11.10+*/
  background: linear-gradient(to top,#51c7ff,#91dbff);
  background: linear-gradient(to top, #51c7ff, #91dbff); /* Standard syntax; must be last */
  background: linear-gradient(to top,#51c7ff,#91dbff);
  /* 渐变色兼容 */
}
.login-content h1{
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 80px;
  margin: 0;
  padding: 8% 0 1% 0
}

.login-content h2{
  text-align: center;
  color: #fff;
  font-size: 36px;
  margin: 0;
}

.form{
  width: 36%;
  margin: 5% auto
}
.btn-submit{
  text-align: center;
  display: -webkit-flex;
  display: flex;
  /* for uc */
  display: -webkit-box;
  display: -ms-flexbox; /* TWEENER - IE 10 */
}
button{
  margin: auto
}
.el-form-item{
  margin-bottom: 24px
}
.btn-submit .btn-group{
  -ms-flex: 1; /* IE 10 */
  -webkit-flex: 1;
  flex: 1;
  /* for uc */
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  float: left\9;
  _float: left;
  *float: left;
  width: 48%\9;
  _width: 48%;
  *width: 48%;
  display: inline-block\9;
  _display: inline-block;
  *display: inline-block;
}
.register-btn{
  float: right\9;
  _float: right;
  *float: right;
}
.el-button{
  width: 100%;
}
.btn-group:first-child{
  padding-right: 4px
}
.btn-group:last-child{
  padding-left: 4px
}
</style>


