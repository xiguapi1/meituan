import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.filter("parseTime", function(str) {
  let timeBefore = new Date(str).getTime() / 1000;
  let timeNow = new Date().getTime() / 1000;
  let time = timeNow - timeBefore;
  //   console.log(time);
  if (time < 30) {
    return "刚刚";
  } else if (time < 60) {
    return parseInt(time) + "秒前";
  } else if (time / 60 < 60) {
    return parseInt(time / 60) + "分钟前";
  } else if (time / (60 * 60) < 24) {
    return parseInt(time / (60 * 60)) + "小时前";
  } else if (time / (60 * 60 * 24) < 31) {
    return parseInt(time / (60 * 60 * 24)) + "天前";
  } else if (time / (60 * 60 * 24 * 31) < 12) {
    return parseInt(time / (60 * 60 * 24 * 31)) + "月前";
  } else if (time / (60 * 60 * 24 * 31 * 12) < 100) {
    return parseInt(time / (60 * 60 * 24 * 31 * 12)) + "年前";
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
