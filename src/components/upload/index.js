import Upload from './src/upload.vue';
import UploadGroup from './src/upload-group.vue';

Upload.install = (Vue) => {
    Vue.component(Upload.name, Upload);
};

UploadGroup.install = (Vue) => {
    Vue.component(Upload.name, Upload);
};

export {
    Upload,
    UploadGroup
};
