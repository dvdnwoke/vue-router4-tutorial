<template>
  <p>Username: {{route.params.username}}</p>
</template>

<script>
import { inject, defineComponent, computed } from 'vue'
export default defineComponent({
  setup () {
    const route = inject('route')
    return {
      route
    }
  }
})
</script>