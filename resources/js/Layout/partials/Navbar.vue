<template>
  <div>
    <div class="i-layout-inside ivu-layout i-layout-inside-fix-with-sider">
      <div
        class="i-layout-header ivu-layout-header i-layout-header-color-primary i-layout-header-fix i-layout-header-with-menu"
        style="width: calc(100% - 180px);"
      >
        <span class="i-layout-header-trigger">
          <i class="ivu-icon i-icon i-icon-menu-unfold" style="display: none;"></i>
          <i class="ivu-icon i-icon i-icon-menu-fold" style></i>
        </span>
        <ul class="navbar-nav nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#"><i class="fa fa-bars"></i></a>
            </li>
        </ul>
        <div class="i-layout-menu-head">
          <ul class="ivu-menu ivu-menu-light ivu-menu-horizontal">
            <a
              href="/pro"
              target="_self"
              class="ivu-menu-item ivu-menu-item-active ivu-menu-item-selected"
            >
              <div class="i-layout-menu-head-title">
                <span class="i-layout-menu-head-title-icon">
                  <i class="ivu-icon ivu-icon-md-cube"></i>
                </span>
                <span class="i-layout-menu-head-title-text">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">iView Pro</font>
                  </font>
                </span>
              </div>
            </a>
            <a href="/admin-pro" target="_self" class="ivu-menu-item">
              <div class="i-layout-menu-head-title">
                <span class="i-layout-menu-head-title-icon">
                  <i class="ivu-icon ivu-icon-md-desktop"></i>
                </span>
                <span class="i-layout-menu-head-title-text">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">iView Admin Pro</font>
                  </font>
                </span>
              </div>
            </a>
            <a href="/store" target="_self" class="ivu-menu-item">
              <div class="i-layout-menu-head-title">
                <span class="i-layout-menu-head-title-icon">
                  <i class="ivu-icon ivu-icon-md-cart"></i>
                </span>
                <span class="i-layout-menu-head-title-text">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Material market</font>
                  </font>
                </span>
              </div>
            </a>
            <a href="/price" target="_self" class="ivu-menu-item">
              <div class="i-layout-menu-head-title">
                <span class="i-layout-menu-head-title-icon">
                  <i class="ivu-icon ivu-icon-md-card"></i>
                </span>
                <span class="i-layout-menu-head-title-text">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">price</font>
                  </font>
                </span>
              </div>
            </a>
          </ul>
        </div>
        <!---->
        <!---->
        <div class="i-layout-header-right">
          <!---->
          <!---->
          <span class="i-layout-header-trigger i-layout-header-trigger-min">
            <div class="i-layout-header-user">
              <span class="ivu-avatar ivu-avatar-circle ivu-avatar-small ivu-avatar-image">
                <img src="https://dev-file.iviewui.com/avatar_default/avatar" />
              </span>
              <span class="i-layout-header-user-name">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">log in</font>
                </font>
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>