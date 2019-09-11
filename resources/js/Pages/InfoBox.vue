<template>
     <div class="col-lg-4 col-6">
        <div class="small-box" :class="color">
        <div class="inner">
            <h3>{{ value }}</h3>

            <p>{{ label }}</p>
        </div>
        <div class="icon">
            <i :class="icon"></i>
        </div>
        <!-- action is hiddem form now -->
        <a v-if="1 > 2" :href="actionUrl" class="small-box-footer">{{ actionLabel }} <i class="fas fa-arrow-circle-left"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['value', 'label', 'actionLabel', 'actionUrl', 'icon', 'color'],
}
</script>

<style>

</style>
