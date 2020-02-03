import MieButton from "./src/Button.vue";

/* istanbul ignore next */
MieButton.install = function(Vue) {
  Vue.component(MieButton.name, MieButton);
};

export default MieButton;
