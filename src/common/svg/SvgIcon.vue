<template lang='pug'>
  svg(:class="svgClass" aria-hidden="true" :fill="svgColor")
    use(:xlink:href="iconName")
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    svgColor: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      }
      return 'svg-icon'
    }
  }
}
</script>
<style scoped>
.svg-icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
