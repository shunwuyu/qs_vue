<template>
  <el-dropdown trigger="click" class='international' @command="handleSetLanguage">
    <div>
      <el-button type="primary">{{$t('login.switchLanguage')}}</el-button>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  name: 'LangSelect',
  computed: {
    language () {
      return this.$store.getters.language
    }
  },
  methods: {
    handleSetLanguage (lang) {
      this.$i18n.local = lang
      this.$store.dispatch('setLanguage', lang)
      this.$message({
        message: 'switch language success',
        type: 'success'
      })
      setTimeout(() => {
        location.reload()
      }, 2000)
    }
  }
}
</script>
