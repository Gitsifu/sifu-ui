import datePicker from "./src/datePicker";

datePicker.install = function(Vue) {
  Vue.component("sf" + datePicker.name, datePicker);
};

export default datePicker;
