<template>
    <main>
        <navbar @changeNavCollapse="isCollapse = !isCollapse"/>
        <div class="content">
            <sidebar :isCollapse="isCollapse" />
            <div class="right">
                <slot/>
            </div>
        </div>
    </main>
</template>

<script>
import Sidebar from './partials/Sidebar'
import Navbar from './partials/Navbar'
export default {
    components :{
        Sidebar,
        Navbar
    },
    data() {
        return {
            isCollapse: false
        }
    }
}
</script>
<style>
.content{
    display: flex;
}
.right{
    width: 100%;
    padding: 3em;
    background-color: #f5f5f5;

}
</style>