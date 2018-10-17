<template>
  <div class="indexList">
    <div class="formWap">
      <forms :header="formHeader"></forms>
    </div>
    <div class="dividePage">
      <pagination></pagination>
    </div>
    <listDetail></listDetail>
  </div>
</template>

<script>
  import * as urls from '../../api/url'
  import {getRequest, postRequest} from '../../api/axios'
  import {mapMutations} from 'vuex'
  import forms from '../commomComponents/forms/forms'
  import pagination from '../commomComponents/pagination/pagination'
  import listDetail from '../commomComponents/coverListDetail/coverListDetail'
  
  export default {
    name: 'indexList',
    data () {
      return {
        formHeader: [
          {
            name: 'Id',
            grind: 1
          },
          {
            name: 'Date',
            grind: 3
          },
          {
            name: 'Auth',
            grind: 2
          },
          {
            name: 'Sex',
            grind: 2
          },
          {
            name: 'Status',
            grind: 2
          },
          {
            name: 'Tittle',
            grind: 12
          },
          {
            name: 'Actions',
            grind: 2
          }
        ],
        formContent: [
          {
            id: 1,
            date: '2018-10-10',
            auth: 'James Li',
            sex: '男',
            status: 'success',
            tittle: 'Rpxnm Nqquhengwl Uuopfs Fiio Srcemf',
          },
          {
            id: 2,
            date: '2018-10-10',
            auth: 'James ZHANG',
            sex: '男',
            status: 'success',
            tittle: 'Rpxnm Nqquhengwl Uuopfs Fiio Srcemf',
          },
          {
            id: 3,
            date: '2018-10-10',
            auth: 'James WANG',
            sex: '男',
            status: 'success',
            tittle: 'Rpxnm Nqquhengwl Uuopfs Fiio Srcemf',
          },
          {
            id: 4,
            date: '2018-10-10',
            auth: 'James ZHAO',
            sex: '男',
            status: 'success',
            tittle: 'Rpxnm Nqquhengwl Uuopfs Fiio Srcemf',
          },
          {
            id: 5,
            date: '2018-10-10',
            auth: 'James ZHOU',
            sex: '男',
            status: 'success',
            tittle: 'Rpxnm Nqquhengwl Uuopfs Fiio Srcemf',
          }
        ]
      }
    },
    created () {
      this.loadData()
    },
    methods: {
      loadData(){
        this.set_indexListDetail(this.formContent)
      },
      ...mapMutations({
        set_indexListDetail:'SET_INDEXLISTDETAIL'
      })
    },
    components: {
      forms,
      pagination,
      listDetail
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
    .dividePage {
      width: 100%;
      height: 10%;
    }
    /*.cover{*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*}*/
  }
</style>
