<template>
<div class='axios'>
  <h1>我是axios</h1>
</div>
</template>

<script>
import axios from 'axios'
export default {

  components: {},
  data () {
    return {}
  },
  created () {
    function http1 () {
      axios.get('https://www.studyinghome.com/mock/5e56070e2cb0d073b813a5ca/example/')
    }
    function http2 () {
      axios.get('https://www.studyinghome.com/mock/5e56070e2cb0d073b813a5ca/example/mock')
    }
    axios.all([http1(), http2()]).then(axios.spread((res1, res2) => {
      console.log('res1===>', res1)
      console.log('res2===>', res2)
    }))
  }
}
</script>
<style scoped>
</style>
