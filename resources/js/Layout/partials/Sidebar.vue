<template>
  <div class="left">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo theme-sidebar"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-menu-item index="1">
            <a href="/" class="ivu-menu-item ivu-menu-item-active ivu-menu-item-selected">
              <i class="el-icon-odometer"></i>
              <span slot="title" class="i-layout-menu-side-title">Dashboard</span>
            </a>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">Navigator One</span>
            </template>
            <el-menu-item-group>
              <span slot="title">Group One</span>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">item four</span>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    toggleMenu() {
      $this.isCollapse = !$this.isCollapse;
    }
  }
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

.el-menu-vertical-demo.theme-sidebar {
  height: 100vh;
}
</style>