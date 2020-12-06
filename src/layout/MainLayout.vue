<template lang="pug">
  #layout
    routerView
</template>

<script>
export default {
  name: 'MainLayout',
  created () {
    this.getDefaultData()
  },
  mounted () {
  },
  methods: {
    getDefaultData () {
      const route = this.$route.path
      if (route === '/') {
        this.$router.push('/index')
      }
    }
  }
}
</script>
