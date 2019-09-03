<template>
    <main>
        <navbar/>
        <sidebar/>
        <article>
          <slot />
        </article>
    </main>
</template>

<script>
import Sidebar from './partials/Sidebar'
import Navbar from './partials/Navbar'
export default {
    components :{
        Sidebar,
        Navbar
    }
    
}
</script>