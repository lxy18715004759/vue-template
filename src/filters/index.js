import Vue from "vue";

// Android/iOS设备判断
const getDevice = () => {
  let ua = navigator.userAgent
  if (/(iPhone|iPad|iPod|iOS)/i.test(ua)) {
    return 'IOS'
  } else if (/(Android)/i.test(navigator.userAgent)) {
    return 'ANDROID'
  } else {
    return 'H5'
  }
}

const filters = {
  getDevice
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
