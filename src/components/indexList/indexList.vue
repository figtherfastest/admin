<template>
  <div class="indexList">
    <div class="formWap">
      <operate @deleteGroup="deleteGroup" :header="formHeader"></operate>
      <forms :header="formHeader" :operateState="operateState"></forms>
      <pagination></pagination>
    </div>
    <coverListDetail @fixOneState="fixOneState"></coverListDetail>
  </div>
</template>
<script>
  import * as indexUrl from '../../api/url'
  import {postRequest, getParamsRequest} from '../../api/axios'
  import {mapMutations, mapGetters} from 'vuex'
  import forms from '../commomComponents/forms/forms'
  import pagination from '../commomComponents/pagination/pagination'
  import coverListDetail from '../commomComponents/coverListDetail/coverListDetail'
  import operate from '../commomComponents/operate/operate'
  
  export default {
    name: 'indexList',
    data () {
      return {
        formHeader: ['id', '景区', '票价'],
        operateState: true
      }
    },
    computed: {
      ...mapGetters([
        'groupDelete'
      ])
    },
    created () {
      var data = {
        currentPage: 0,
        pageSize: 100
      }
      var url = indexUrl.scenicPriceItemList
      var method = 'getParam'
      this.loadData(method, url, data)
    },
    methods: {
      loadData (method, url, data) {
        var responce = ''
        if (method === 'get') {
          responce = getRequest(url, data)
        } else if (method === 'getParam') {
          responce = getParamsRequest(url, data)
        } else if (method === 'post') {
          responce = postRequest(url, data)
        }
        responce.then(res => {
          if (res.data.code === 0) {
            var list = res.data.data.list
            this.set_indexListDetail(list)
          }
        })
      },
      // change One
      fixOneState (item) {
        var url = indexUrl.updateScenicPriceItem
        postRequest(url, item).then(res => {
          if (res.data.code === 0) {
            this.set_coverState(false)
            this.$alert('更新成功', '成功', {
              confirmButtonText: '确定'
            })
          }
        })
      },
      //group delete
      deleteGroup () {
        console.log(this.groupDelete)
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
