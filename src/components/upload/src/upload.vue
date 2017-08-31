<template>
    <div class="wl-upload" @tap="handleTap">
        <slot></slot>
        <input type="file" style="display: none;" @change="handleChange" class="wl-input-select">
    </div>
</template>

<script>
    /**
     * 选择文件
     */
    export default {
        name: 'wlUpload',
        methods: {
            handleTap() {
                this.$el.querySelector('.wl-input-select').click();
            },
            handleChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length) {
                    return;
                }
                this.createImage(files);
            },
            createImage(file) {
                let img = [];
                let error = false;
                let len = file.length;
                let loadLength = 0;

                for (let i = 0; i < len; i++) {
                    let reader = new FileReader();
                    reader.readAsDataURL(file[i]);
                    reader.onload = (e) => {
                        img.push(e.target.result);
                        loadLength++;
                        if (loadLength === len && !error) {
                            this.img = img;
                            this.file = file;
                            this.$emit('change', img);
                        }
                    };
                    if (!/^image\/.*$/.test(file[i].type)) {
                        error = true;
                    }
                }
                if (error) {
                    window.Utils.toast('请选择图片');
                } else {
                }
            }
        }
    };

</script>

<style lang="scss" rel="stylesheet/scss">

</style>
