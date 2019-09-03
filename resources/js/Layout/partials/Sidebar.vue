<template>
  <div>
    <div
      class="i-layout-sider ivu-layout-sider i-layout-sider-fix i-layout-sider-dark"
      style="width: 180px; min-width: 180px; max-width: 180px; flex: 0 0 180px;"
    >
      <span class="ivu-layout-sider-zero-width-trigger" style="display: none;">
        <i class="ivu-icon ivu-icon-ios-menu"></i>
      </span>
      <div class="ivu-layout-sider-children">
        <div>
          <div class="i-layout-sider-logo i-layout-sider-logo-dark">
            <a href="/" target="_self" class="i-link i-link-color">
              <img src="https://file.iviewui.com/pro-app-dist/img/logo-dark.64bb44d1.png" />
            </a>
          </div>
          <ul
            class="i-layout-menu-side i-scrollbar-hide ivu-menu ivu-menu-dark ivu-menu-vertical"
            style="width: auto;"
          >
            <div>
              <a href="/pro/introduce" target="_self" class="ivu-menu-item">
                <span class="i-layout-menu-side-title">
                  <span class="i-layout-menu-side-title-icon">
                    <i class="ivu-icon i-pro i-pro-introduce"></i>
                  </span>
                  <span class="i-layout-menu-side-title-text">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Introduction</font>
                    </font>
                  </span>
                </span>
              </a>
            </div>
            <div>
              <a href="/pro/install" target="_self" class="ivu-menu-item">
                <span class="i-layout-menu-side-title">
                  <span class="i-layout-menu-side-title-icon">
                    <i class="ivu-icon i-pro i-pro-install"></i>
                  </span>
                  <span class="i-layout-menu-side-title-text">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">installation</font>
                    </font>
                  </span>
                </span>
              </a>
            </div>
            <div>
              <a
                href="/pro/changelog"
                target="_self"
                class="ivu-menu-item ivu-menu-item-active ivu-menu-item-selected"
              >
                <span class="i-layout-menu-side-title">
                  <span class="i-layout-menu-side-title-icon">
                    <i class="ivu-icon i-pro i-pro-changelog"></i>
                  </span>
                  <span class="i-layout-menu-side-title-text">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Update log</font>
                    </font>
                  </span>
                </span>
              </a>
            </div>
            <li class="ivu-menu-submenu">
              <div class="ivu-menu-submenu-title">
                <span class="i-layout-menu-side-title">
                  <span class="i-layout-menu-side-title-icon">
                    <i class="ivu-icon i-pro i-pro-layout"></i>
                  </span>
                  <span class="i-layout-menu-side-title-text">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">layout</font>
                    </font>
                  </span>
                </span>
                <i class="ivu-icon ivu-icon-ios-arrow-down ivu-menu-submenu-title-icon"></i>
              </div>
              <ul class="ivu-menu" style="display: none;">
                <div>
                  <a
                    href="/pro/layout/grid"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        <font style="vertical-align: inherit;">
                          <font style="vertical-align: inherit;">Grids</font>
                        </font>
                        <em>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Grid</font>
                          </font>
                        </em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/layout/description-list"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        <font style="vertical-align: inherit;">
                          <font style="vertical-align: inherit;">Description list</font>
                        </font>
                        <em>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">DescriptionList</font>
                          </font>
                        </em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/layout/page-header"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
          
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        <font style="vertical-align: inherit;">
                          <font style="vertical-align: inherit;">Header</font>
                        </font>
                        <em>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">PageHeader</font>
                          </font>
                        </em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/layout/style"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        <font style="vertical-align: inherit;">
                          <font style="vertical-align: inherit;">Basis style</font>
                        </font>
                        <em>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Style</font>
                          </font>
                        </em>
                      </span>
                    </span>
                  </a>
                </div>
              </ul>
            </li>
            <li class="ivu-menu-submenu">
              <div class="ivu-menu-submenu-title">
                <span class="i-layout-menu-side-title">
                  <span class="i-layout-menu-side-title-icon">
                    <i class="ivu-icon i-pro i-pro-component"></i>
                  </span>
                  <span class="i-layout-menu-side-title-text">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Component</font>
                    </font>
                  </span>
                </span>
                <i class="ivu-icon ivu-icon-ios-arrow-down ivu-menu-submenu-title-icon"></i>
              </div>
              <ul class="ivu-menu" style="display: none;">
                <div>
                  <a
                    href="/pro/component/tree-select"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        <font style="vertical-align: inherit;">
                          <font style="vertical-align: inherit;">Tree selection</font>
                        </font>
                        <em>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">TreeSelect</font>
                          </font>
                        </em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/tag-select"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        <font style="vertical-align: inherit;">
                          <font style="vertical-align: inherit;">Tag selector</font>
                        </font>
                        <em>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">TagSelect</font>
                          </font>
                        </em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/city"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        <font style="vertical-align: inherit;">
                          <font style="vertical-align: inherit;">City selector</font>
                        </font>
                        <em>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">City</font>
                          </font>
                        </em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/login"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        登录
                        <em>Login</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/notification"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
          
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        通知菜单
                        <em>Notification</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/calendar"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        日历
                        <em>Calendar</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/auth"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        鉴权
                        <em>Auth</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/ellipsis"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        文本自动省略号
                        <em>Ellipsis</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/table-paste"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        粘贴表格数据
                        <em>TablePaste</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/avatar-list"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        头像列表
                        <em>AvatarList</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/count-down"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        倒计时
                        <em>CountDown</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/count-up"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        数字动画
                        <em>CountUp</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/numeral"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        数字格式化
                        <em>Numeral</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/number-info"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        数据文本
                        <em>NumberInfo</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/trend"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        趋势标记
                        <em>Trend</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/footer-toolbar"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        底部工具栏
                        <em>FooterToolbar</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/global-footer"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        全局页脚
                        <em>GlobalFooter</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/word-count"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        字数统计
                        <em>WordCount</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/result"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        处理结果
                        <em>Result</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/component/exception"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        异常
                        <em>Exception</em>
                      </span>
                    </span>
                  </a>
                </div>
              </ul>
            </li>
            <li class="ivu-menu-submenu">
              <div class="ivu-menu-submenu-title">
                <span class="i-layout-menu-side-title">
                  <span class="i-layout-menu-side-title-icon">
                    <i class="ivu-icon i-pro i-pro-directive"></i>
                  </span>
                  <span class="i-layout-menu-side-title-text">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">instruction</font>
                    </font>
                  </span>
                </span>
                <i class="ivu-icon ivu-icon-ios-arrow-down ivu-menu-submenu-title-icon"></i>
              </div>
              <ul class="ivu-menu" style="display: none;">
                <div>
                  <a
                    href="/pro/directive/style"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        样式指令
                        <em>v-style</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/directive/resize"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        宽度变化
                        <em>v-resize</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/directive/line-clamp"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        文本按行省略
                        <em>v-line-clamp</em>
                      </span>
                    </span>
                  </a>
                </div>
              </ul>
            </li>
            <li class="ivu-menu-submenu">
              <div class="ivu-menu-submenu-title">
                <span class="i-layout-menu-side-title">
                  <span class="i-layout-menu-side-title-icon">
                    <i class="ivu-icon i-pro i-pro-method"></i>
                  </span>
                  <span class="i-layout-menu-side-title-text">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">method</font>
                    </font>
                  </span>
                </span>
                <i class="ivu-icon ivu-icon-ios-arrow-down ivu-menu-submenu-title-icon"></i>
              </div>
              <ul class="ivu-menu" style="display: none;">
                <div>
                  <a
                    href="/pro/method/copy"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        复制到剪贴板
                        <em>$Copy</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/method/scroll-top"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
          
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        滚动
                        <em>$ScrollTop</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/method/scroll-into-view"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
          
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        视图滚动
                        <em>$ScrollIntoView</em>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="/pro/method/date"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        日期操作
                        <em>$Date</em>
                      </span>
                    </span>
                  </a>
                </div>
              </ul>
            </li>
            <li class="ivu-menu-submenu">
              <div class="ivu-menu-submenu-title">
                <span class="i-layout-menu-side-title">
                  <span class="i-layout-menu-side-title-icon">
                    <i class="ivu-icon i-pro i-pro-filter"></i>
                  </span>
                  <span class="i-layout-menu-side-title-text">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">filter</font>
                    </font>
        
                  </span>
                </span>
                <i class="ivu-icon ivu-icon-ios-arrow-down ivu-menu-submenu-title-icon"></i>
              </div>
              <ul class="ivu-menu" style="display: none;">
                <div>
                  <a
                    href="/pro/filter/date"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
          
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        日期
                        <em>filter-date</em>
                      </span>
                    </span>
                  </a>
                </div>
              </ul>
            </li>
            <li class="ivu-menu-submenu">
              <div class="ivu-menu-submenu-title">
                <span class="i-layout-menu-side-title">
                  <span class="i-layout-menu-side-title-icon">
                    <i class="ivu-icon i-pro i-pro-animation"></i>
                  </span>
                  <span class="i-layout-menu-side-title-text">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Animation</font>
                    </font>
        
                  </span>
                </span>
                <i class="ivu-icon ivu-icon-ios-arrow-down ivu-menu-submenu-title-icon"></i>
              </div>
              <ul class="ivu-menu" style="display: none;">
                <div>
                  <a
                    href="/pro/animation/base"
                    target="_self"
                    class="ivu-menu-item"
                    style="padding-left: 43px;"
                  >
                    <span class="i-layout-menu-side-title">
          
                      <span class="i-layout-menu-side-title-text i-layout-menu-side-title-text-em">
                        基础动画
                        <em>Animation</em>
                      </span>
                    </span>
                  </a>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="ivu-layout-sider-trigger" style="width: 180px; display: none;">
        <i class="ivu-icon ivu-icon-ios-arrow-back ivu-layout-sider-trigger-icon"></i>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>