<template>
  <main>
    <navbar @changeNavCollapse="isCollapse = !isCollapse" />
    <div class="content">
      <sidebar :isCollapse="isCollapse" />
      <div class="right">
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-container fluid class="bv-example-row">
            <slot />
        </b-container>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "./partials/Sidebar";
import Navbar from "./partials/Navbar";
export default {
  components: {
    Sidebar,
    Navbar
  },
  data() {
    return {
      isCollapse: false,
      items: [
        {
          text: "Dashboard",
          href: "/"
        },
      ]
    };
  }
};
</script>
<style>
.content {
  display: flex;
}
.right {
  width: 100%;
  padding: 1em;
  background-color: #f5f5f5;
}
</style>