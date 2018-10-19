<template>
	<div class="userSystem">
    <pagination></pagination>
  </div>
</template>

<script>
  import pagination from '../commomComponents/pagination/pagination'
  export default {
    name: 'userSystem',
    components:{
      pagination
    }
  }
</script>

<style scoped lang="scss">
  .userSystem{
    width: 100%;
    height: 100%;
  }
</style>
