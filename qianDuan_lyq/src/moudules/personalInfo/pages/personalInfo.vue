<template>
    <div class="class1">
        <h3>欢迎来到信息修改页面</h3>
        <div class="nameInput"> 姓名：<el-input v-model="input" placeholder="请输入姓名" clearable></el-input></div>
        <div class="sex-input"> 姓别：
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
        </div>
        <div class="phonIinput"> 手机号码：<el-input  v-model="input" placeholder="请输入号码" clearable></el-input></div>
        <div class="idNumIinput">
          <el-input placeholder="请输入证件号码" v-model="idNum" class="input-with-select">
            <el-select class="selectType" v-model="idType" slot="prepend" placeholder="请选择">
              <el-option label="身份证号" value="1"></el-option>
              <el-option label="护照" value="2"></el-option>
              <el-option label="港澳通行证" value="3"></el-option>
            </el-select>
          </el-input>
        </div>
    </div>
</template>

<script>
export default {
    name: 'personalInfo',
  data () {
    return {
      input: '哈哈哈 我懂了',
      radio:'1',
      idType: '',
      idNum: '',

    }
  },
  mounted () {
  
  }
}
</script>

<style>
  .input-with-select {
    background-color: #fff;
    width: 600px;
  
  }
    .idNumIinput{
      margin-top: 100px !important;
    }
    .selectType{
      width: 200px;
    }
</style>