<template>
  <main>
        <navbar @changeNavCollapse="isCollapse = !isCollapse"/>
        <sidebar :isCollapse="isCollapse" />
        <div style="float:right">
          <child />
        </div>
    </main>
</template>

<script>
import Sidebar from './partials/Sidebar';
import Navbar from './partials/Navbar'

export default {}
</script>

<style>

</style>