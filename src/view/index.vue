<template>
    <div>
        <wl-button @click="modal = true">modal</wl-button>
        <wl-button @click="test = !test">fadeIn</wl-button>
        <wlInput placeholder="input"></wlInput>
        <wlModal v-model="modal" :btn="['确定', '取消']"></wlModal>

        <transition
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
        >
            <p v-if="test">hello</p>
        </transition>

        <wl-upload-group>
            <wl-upload @change="testImg = arguments[0]">123123</wl-upload>
        </wl-upload-group>

        <img :src="testImg" alt="">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modal: false,
                test: false,
                testImg: ''
            };
        }
    };

</script>

<style lang="scss" rel="stylesheet/scss">

</style>
