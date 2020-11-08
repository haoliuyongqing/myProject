<template>
    <div>
        <h3>欢迎来到信息修改页面</h3>
        <div>{{msg}}</div>
    </div>
</template>

<script>
export default {
    name: 'personalInfo',
  data () {
    return {
      msg: '哈哈哈 我懂了'
    }
  },
  mounted () {
    var person2 = {
    name:'李四',
    age:18,
    fav: ()=>{
         // 当前this指向了定义时所在的对象（window）
         console.log(this);  // window
    }

  }
  person2.fav()
  console.log(this.$store.state.IDCardInfo.NAME)


  }
}
</script>
<style scoped>

</style>