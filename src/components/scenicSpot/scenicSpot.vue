<template>
  <div class="indexList">
    <div class="formWap">
      <operateSenceFlower @deleteGroup="deleteGroup"
                          @search="search"
                          @addOnes="addOnesBtn"></operateSenceFlower>
      <forms :header="formHeader" :operateState="operateState"></forms>
      <pagination :totalNum="totalNum" @handleSizeChange="handleSizeChange"
                  @handleCurrentChange="handleCurrentChange"></pagination>
    </div>
    <coverListDetail @fixOneState="fixOneState"></coverListDetail>
    <addOne @addListToPage="addListToPage"></addOne>
  </div>
</template>
<script>
  import * as urls from '../common/url/url'
  import {mapMutations, mapGetters} from 'vuex'
  import forms from '../commomComponents/forms/forms'
  import pagination from '../commomComponents/pagination/pagination'
  import coverListDetail from '../commomComponents/coverList/coverListDetail'
  import operateSenceFlower from '../commomComponents/operate/operateSenceFlower'
  import addOne from '../commomComponents/addOnePage/addOnePage'
  
  export default {
    name: 'indexList',
    data () {
      return {
        formHeader: ['id', '客流量', '时间', '是否预测'],
        operateState: true,
        totalNum: 0,
        loadDateParam: {
          scenicId: 670,
          itemTag: 'd',
          currentPage: 1,
          pageSize: 10
        },
        searchDateParam: {},
        pageState:'load'
      }
    },
    computed: {
      ...mapGetters([
        'groupDelete',  //显示操作区的时候 点击删除
        'addOneParams'
      ])
    },
    created () {
      this.loadData()
    },
    methods: {
      //页面刷新 加载页面
      loadData () { //加载数据
        this.pageState = 'load'
        this.$get(urls.mainScenicFlowAndForecast, this.loadDateParam).then(res => {
          if (res.code === 0) {
            this.totalNum = res.data.total
            var list = res.data.list
            this.set_indexListDetail(list)
          }
        })
      },
      // 点击详情，修改之后 确定
      fixOneState (item) {
        this.$post(urls.updateMainScenicFlowAndForecast, item).then(res => {
          if (res.code === 0) {
            this.set_coverState(false)
            this.$alert('更新成功', '成功', {
              confirmButtonText: '确定'
            })
          }
        })
      },
      //搜索
      search (item) {
        this.searchDateParam = item
        var url = urls.mainScenicFlowAndForecast
        this.$get(url, item).then(res => {
          if (res.code === 0) {
            var list = res.data.list
            this.set_indexListDetail(list)
            this.pageState = 'search'
            this.totalNum = res.data.total
          }
        })
      },
      //点击添加
      addOnesBtn () {
        this.set_addOneListState(true)
      },
      //添加
      addListToPage (item) {
        this.$post(urls.insertMainScenicFlowAndForecast, item).then(res => {
          if (res.code === 0) {
            this.set_addOneListState(false)
            this.$alert('更新成功', '成功', {
              confirmButtonText: '确定'
            })
            var data = {
              scenicId: item.scenicid,
              itemTag: 'd',
              currentPage: 1,
              pageSize: 10
            }
            var url = urls.mainScenicFlowAndForecast
            this.loadData(url, data)
            console.log(item)
            this.set_operateChoosedSence(item.scenicid)
            this.set_operateChoosedDate(item.timetag)
          }
        })
      },
      //有操作区 批量删除
      deleteGroup () {
        this.$post(urls.deleteMainScenicFlowAndForecast, this.groupDelete).then(res => {
          if (res.code === 0) {
            this.$alert('删除成功', '成功', {
              confirmButtonText: '确定'
            })
            this.loadData()
          } else {
            this.$alert('删除失败', '失败', {
              confirmButtonText: '确定'
            })
          }
        })
      },
      //改变每页数量
      handleSizeChange (item) {
        if(this.pageState = 'load'){
          this.loadDateParam.currentPage = item.currentPage
          this.loadDateParam.pageSize = item.pageSize
          this.loadData()
        }
      },
      //跳转到某一页
      handleCurrentChange (item) {
        if(this.pageState === 'load'){
          console.log('load')
          this.loadDateParam.currentPage = item.currentPage
          this.loadDateParam.pageSize = item.pageSize
          this.loadData()
        } else if(this.pageState === 'search'){
          console.log('search')
          this.searchDateParam.currentPage = item.currentPage
          this.searchDateParam.pageSize = item.pageSize
          this.search(this.searchDateParam)
        }
      },
      ...mapMutations({
        set_indexListDetail: 'SET_INDEXLISTDETAIL',
        set_coverState: 'SET_COVERSTATE',
        set_addOneListState: 'SET_ADDONELISTSTATE',
        set_operateChoosedSence: 'SET_OPERATECHOOSEDSENCE',
        set_operateChoosedDate: 'SET_OPERATECHOOSEDDATE'
      })
    },
    components: {
      forms,
      pagination,
      coverListDetail,
      operateSenceFlower,
      addOne
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
