import Input from './input/index';

const components = [
    Input
];

const install = (Vue, opts = {}) => {
    components.map(component => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
