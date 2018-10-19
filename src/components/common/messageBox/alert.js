export default function alertConfirm () {
  this.$alert('更新成功', '标题名称', {
    confirmButtonText: '确定',
    callback: action => {
      console.log(action)
    }
  });
}
