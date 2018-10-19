<template>
  <div class="indexList">
    <div class="formWap">
      <operate @deleteGroup="deleteGroup"></operate>
      <forms :header="formHeader" :operateState="operateState"></forms>
    </div>
    <messageBox></messageBox>
    <listDetail @fixOneState="fixOneState" ></listDetail>
  </div>
</template>

<script>
  import * as indexUrl from '../../api/url'
  import {getRequest, postRequest} from '../../api/axios'
  import {mapMutations,mapGetters} from 'vuex'
  import forms from '../commomComponents/forms/forms'
  import pagination from '../commomComponents/pagination/pagination'
  import listDetail from '../commomComponents/coverListDetail/coverListDetail'
  import messageBox from '../commomComponents/messageBox/messageBox'
  import operate from '../commomComponents/operate/operate'
  
  export default {
    name: 'indexList',
    data () {
      return {
        formHeader: ['id','景区','票价'],
        operateState:true
      }
    },
    computed:{
      ...mapGetters([
        'groupDelete'
      ])
    },
    created () {
      this.loadData()
    },
    methods: {
      loadData(){
        var url = indexUrl.scenicPriceItemList
        var data ={
          currentPage:0,
          pageSize:100
        }
        getRequest(url,data).then(res=>{
          if(res.data.code === 0){
            var list = res.data.data.list
            this.set_indexListDetail(list)
          }
        })
      },
      fixOneState(item){
        var url = indexUrl.updateScenicPriceItem
        postRequest(url,item).then(res=>{
          if(res.data.code === 0){
             this.set_coverState(false)
            this.$alert('更新成功', '成功', {
              confirmButtonText: '确定'
            });
          }
        })
      },
      deleteGroup(){
        console.log(this.groupDelete)
      },
      ...mapMutations({
        set_indexListDetail:'SET_INDEXLISTDETAIL',
        set_coverState: 'SET_COVERSTATE',
      })
    },
    components: {
      forms,
      pagination,
      listDetail,
      messageBox,
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
      height: 80%;
      margin-top: 3%;
    }
  }
</style>
