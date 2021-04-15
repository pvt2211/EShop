import Vue from 'vue'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// const URL_GETSTORE_BY_STORECODE = "https://localhost:44399/api/v1/stores/code";
// const URL_GET_STORES = "https://localhost:44399/api/v1/stores";
// const URL_GET_STORES_PAGING = "https://localhost:44399/api/v1/stores/page";
// const URL_GET_COUNTRY = "https://localhost:44399/api/v1/countrys";
// const URL_GETPROVINCES_BY_COUNTRYID = "https://localhost:44399/api/v1/provinces/a";
// const URL_GETDISTRICTS_BY_PROVINCEID = "https://localhost:44399/api/v1/districts/a";
// const URL_GETWARDS_BY_DISTRICTID = "https://localhost:44399/api/v1/wards/a";

library.add(fab, fas, far);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
