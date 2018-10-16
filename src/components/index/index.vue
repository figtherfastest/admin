<template>
  <div class="index">
    <layout></layout>
  </div>
</template>

<script>
  import layout from '../../views/layout/layout'
  
  export default {
    name: 'index',
    components: {
      layout
    }
  }
</script>

<style scoped lang="scss">
.index{
  width: 100%;
  height: 100%;
}
</style>
