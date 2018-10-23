<template>
  <div class="indexList">
    <div class="formWap">
      <forms :header="formHeader" :operateState="operateState"></forms>
    </div>
    <coverListDetail @fixOneState="fixOneState"></coverListDetail>
  </div>
</template>
<script>
  import * as indexUrl from '../common/url/url'
  import {mapMutations, mapGetters} from 'vuex'
  import forms from '../commomComponents/forms/forms'
  import pagination from '../commomComponents/pagination/pagination'
  import coverListDetail from '../commomComponents/coverList/coverListDetail'
  import operate from '../commomComponents/operate/operate'
  
  export default {
    name: 'indexList',
    data () {
      return {
        formHeader: ['id', '景区', '票价'],//tittle 显示
        operateState: false //是否显示全选
      }
    },
    computed: {
      ...mapGetters([
        'groupDelete'  //显示操作区的时候 点击删除
      ])
    },
    created () {
      var data = {
        currentPage: 0,
        pageSize: 100
      }
      var url = indexUrl.scenicPriceItemList
      this.loadData(url, data)
    },
    methods: {
      loadData (url, data) { //加载数据
        this.$get(url, data).then(res => {
          if (res.code === 0) {
            var list = res.data.list
            this.set_indexListDetail(list)
          }
        })
      },
      // 点击详情，修改之后 确定
      fixOneState (item) {
        this.$post(indexUrl.updateScenicPriceItem, item).then(res => {
          console.log(res)
          if (res.code === 0) {
            this.set_coverState(false)
            this.$alert('更新成功', '成功', {
              confirmButtonText: '确定'
            })
          }
        })
      },
      ...mapMutations({
        set_indexListDetail: 'SET_INDEXLISTDETAIL',
        set_coverState: 'SET_COVERSTATE',
      })
    },
    components: {
      forms,
      pagination,
      coverListDetail,
      operate
    }
  }
</script>

<style scoped lang="scss">
  .indexList {
    width: 100%;
    height: 100%;
    .formWap {
      width: 90%;
      margin-left: 5%;
      height: 95%;
      margin-top: 3%;
    }
  }
</style>
