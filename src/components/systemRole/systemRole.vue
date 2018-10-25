<template>
	<div class="systemTwo">
    <tree></tree>
  </div>
</template>

<script>
  import tree from '../commomComponents/tree/tree'
  export default {
    name: 'systemRole',
    components:{
      tree
    }
  }
</script>

<style scoped lang="scss">
  .systemTwo{
    width: 100%;
    height: 100%;
  }
</style>
