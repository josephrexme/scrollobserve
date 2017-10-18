<template>
  <div class="scroll">
  </div>
</template>

<script>
export default {
  name: 'scroll-indicator',
  mounted() {
    window.addEventListener('scroll', () => {
      const pos = window.scrollY
      const wh = window.innerHeight
      const dh = document.body.scrollHeight
      const perc = pos / (dh - wh)
      this.$el.style.setProperty('--scale', perc + 0.1)
    })
  }
}
</script>

<style scoped>
.scroll{
  --scale: 0.1;
  position: fixed;
  top: 0;
  right: 100px;
  width: 2px;
  height: 100%;
  background: white;
  transform: scaleY(var(--scale));
  transform-origin: top;
}
</style>
