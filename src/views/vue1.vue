<template>
  <div class="content-box">
    {{msg}}
    {{$store.state.count}}
    <button @click="add">+</button>
    <button @click="minus">-</button>
  </div>
</template>

<script>

export default {
  components: {
  },
  name: 'vue1',
  data () {
    return {
      msg: 'vue1加载到了！！！！'
    }
  },
  methods: {
    add () {
      this.$store.commit('increment',5)
    },
    minus () {
      this.$store.commit('decrease',5)
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
  color: #42b983;
}

</style>
