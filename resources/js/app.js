import { InertiaApp } from '@inertiajs/inertia-vue'
import ElementUI from 'element-ui';
import Vue from 'vue'

Vue.use(InertiaApp)
Vue.use(ElementUI)

const app = document.getElementById('app')

new Vue({
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(app)