<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo theme-nav"
      mode="horizontal"
      @select="handleSelect"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-menu-item index="2" @click="$emit('changeNavCollapse')">
        <i class="ivu-icon i-icon i-icon-menu-fold"></i>
      </el-menu-item>   
      <el-submenu index="3">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="5">
        <a href="https://www.ele.me" class="text-decoration-none" target="_blank">Orders</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
</style>