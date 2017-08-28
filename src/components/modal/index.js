import wlModal from './src/modal.vue';

wlModal.install = function (Vue) {
    Vue.install(wlModal.name, wlModal);
};

export default wlModal;
