<template lang="pug">
  #app
    routerView
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  mounted () {
    // this.getProductOrder()
  },
  methods: {
    getProductOrder () {
      const test = require('./api/productOrder.json')
      console.log(test)
      // axios.get('/api/productOrder')
      //   .then(res => {
      //     console.log(res)
      //   })
    },
    async testMock () {
      const res = await axios({
        url: '/test',
        methods: 'get'
      })
      console.log(res.data)
    },
    async getStar () {
      const res = await axios({
        url: '/getData?type=123',
        methods: 'get',
        data: {
          name: '123'
        }
      })
      console.log(res.data)
    }
  }
}
</script>
