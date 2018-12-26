<template>
  <div class="content-box">
    <h1 class='content-wrap-brand'>111 > API接口测试</h1>
    <div class='content-wrap-body'>
      <el-button type="primary" @click="getInfo">get info</el-button>
      <el-button type="success" @click="getInfo1">axios-proxy</el-button>
      <el-button type="info" @click="getUserById">get 李伟良接口</el-button>
      <el-button type="warning" @click="sendPost">post 李伟良接口</el-button>
      <el-table :data="tableData1" style="width: 100%;margin-top:20px">
        <el-table-column type="expand">
          <!-- 表格展开部分 -->
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="接口名称:">
                <span>{{ props.row.api }}</span>
              </el-form-item>
              <el-form-item label="请求方式:">
                <span>{{ props.row.method }}</span>
              </el-form-item>
              <el-form-item label="请求返回code:">
                <span>{{ props.row.code }}</span>
              </el-form-item>
              <el-form-item label="请求返回message:">
                <span>{{ props.row.result }}</span>
              </el-form-item>
              <el-form-item label="请求返回data:">
                <span>{{ props.row.data }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="接口名称" prop="api"></el-table-column>
        <el-table-column label="请求方式" prop="method"></el-table-column>
        <el-table-column label="请求结果" prop="result"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  name: 'vue1',
  data () {
    return {
      msg: 'vue1加载到了！！！！',
      info: null,
      info1: null,
      info2: null,
      info3: null,
      isLogin: false,
      user:{
          startTime:'2018-10-07 00:00:00',
					endTime: '2018-11-07 23:59:59'
      },
      tableData1:[]
    }
  },
  methods: {
    insetTableData (api,method,code,result,data){
      //插入table

      var tableObj = {};
      tableObj.api = api,
      tableObj.method = method,
      tableObj.code = code,
      tableObj.result = result,
      tableObj.data = data,
      this.tableData1.push(tableObj)
    },
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
      // this.$axios.get(this.HOME+'/v2/book/1220562').then(response => {
      this.$axios.get('https://api.douban.com/v2/book/1220562').then(response => {
        this.info = response;
        this.insetTableData ('https://api.douban.com/v2/book/1220562','GET',response.code,response.message,response.data)
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
      .then(response =>{
        this.info1 = response.data.message;
        this.insetTableData ('/dpt/vue/getList','POST',response.data.code,response.data.message,response.data.datalen)

      })
    },
    sendPost(){
      this.$axios.post('http://47.97.179.110:10101/vue/getList',this.user,{
        transformRequest:[
          function(data){
            let params='';
            for(let index in data){
              params+=index+'='+data[index]+'&';
            }
            return params;
          }
        ]
      })
      .then(response => {
        console.log(response.data);
        this.info2 = response.data.message;
        this.insetTableData ('http://47.97.179.110:10101/vue/getList','POST',response.data.code,response.data.message,response.data.data)
      }).catch(err => {
        console.log('请求失败：'+err.status+','+err.statusText);
      });
    },
    getUserById(){
      this.$axios.get(`http://47.97.179.110:10101/vue/getListGet/2018-09-07 12:00:00/2018-10-07 12:00:00`)
      .then(response => {
        console.log(response.data);
        this.info3 = response.data.message;
        this.insetTableData ('http://47.97.179.110:10101/vue/getListGet/2018-09-07 12:00:00/2018-10-07 12:00:00','GET',response.data.code,response.data.message,response.data.data)
      });
    }
  },
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

</style>
