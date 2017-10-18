<template>
  <div class="hello">
    <scroll-indicator></scroll-indicator>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div style="height:2000px">
    </div>
  </div>
</template>

<script>
import ScrollIndicator from '@/components/ScrollIndicator.vue'

export default {
  name: 'home',
  data() {
    return {
      msg: 'Test data'
    }
  },
  components: { ScrollIndicator }
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
