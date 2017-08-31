import Input from './input/index';
import Modal from './modal/index';
import {Upload, UploadGroup} from './upload/index';

const components = [
    Input,
    Modal,
    Upload,
    UploadGroup
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
    install,
    Modal,
    Upload,
    UploadGroup
};
