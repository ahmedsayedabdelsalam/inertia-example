<template>
   <layout>
        <div>
            This is the contact Page {{foo}}
        </div>
   </layout>
</template>

<script>
import Layout from '@/Layout/Layout'

export default {
    components: {
        Layout,
    },
    props: ['foo']
}
</script>