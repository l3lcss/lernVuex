<template>
  <div class="">
    <button type="button" @click="increment(1)">Inc The Count</button>
    <br>
    <br>
    <button type="button" @click="decrement(1)">DeInc The Count</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ])
  }
}
</script>
