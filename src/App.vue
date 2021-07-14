<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/slot">Slot数据流</router-link> |
      <router-link to="/props">Props数据流</router-link> |
      <router-link to="/mixins">Mixins</router-link> |
      <router-link to="/emit">emit传参</router-link> |
      <router-link to="/vfor">v-for渲染</router-link> |
      <router-link to="/from">query和params传参</router-link> |
      <router-link to="/gouzi">钩子触发</router-link> |
      <router-link to="/image">本地图片</router-link> |
      <router-link to="/prfrom">push和replace</router-link> |
      <router-link to="/x1">vuex</router-link> |
      <router-link to="/directive">自定义指令</router-link> |
      <router-link to="/dataset">元素dataset</router-link> |
      <router-link to="/render">渲染函数render</router-link> |
      <router-link to="/filter">过滤器filter</router-link> |
      <router-link to="/component">全局定义组件</router-link> |
      <router-link to="/computed">计算属性</router-link> |
      <router-link to="/fuzzysearch">模糊搜索</router-link> |
      <router-link to="/IP">IP</router-link> |
      <router-link to="/scan">浏览器扫码</router-link> |
      <router-link to="/scanapp">App扫码</router-link> |
      <router-link to="/watch">watch触发</router-link> |
      <router-link to="/v-model">v-model原理和组件中使用v-model</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
