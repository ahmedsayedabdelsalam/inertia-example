<template>
  <layout>
    <div>
        <!-- <b-button v-b-toggle.collapse-3 class="m-1">Toggle Collapse</b-button>
        <b-collapse visible id="collapse-3">
          <b-card>I should start open!</b-card>
        </b-collapse> -->
    </div>
  </layout>
</template>

<script>
import Layout from "@/Layout/Layout";
// import { BButton, BCollapse, BCard } from 'bootstrap-vue'

export default {
  components: {
    Layout,
    // 'b-button': BButton,
    // 'b-collapse':BCollapse,
    // 'b-card':BCard,
  },
  props: [],
  data() {
      return {
        
      }
    },
    
    methods: {
    
    }
};
</script>