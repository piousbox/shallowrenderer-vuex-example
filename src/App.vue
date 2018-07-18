<template>
  <div id="app">
    <message-toggle />
    <list :items="['list item 1', 'listen item 2']" />
    <div class="test-1">{{ count }}</div>
    <div class="test-2">count!</div>
  </div>
</template>

<script>
import MessageToggle from '@/components/MessageToggle.vue'
import List from '@/components/List.vue'

export default {
  created () {
    console.log('+++ App created():', this)
  },
  data() {
    return {
      count: this.$store.state.count,
    }
  },
  components: {
    MessageToggle,
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
