<template>
  <p>Username: {{route.params.username}}</p>
  <router-link to="/">Home</router-link>
</template>

<script>
import { inject, defineComponent, computed } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
export default defineComponent({
  setup () {
    const route = inject('route')
    onBeforeRouteLeave((to, from, next) => {
      const wantToLeave = window.confirm('Are you sure you want to leave your profile?')
      if (wantToLeave) {
        next()
      } else {
        next(false)
      }
    })
    return {
      route
    }
  }
})
</script>