<template>
    <div>
        <button @click="modal = true">modal</button>
        <button @click="test = !test">fadeIn</button>
        <wlInput></wlInput>
        <wlModal v-model="modal" :btn="['确定', '取消']"></wlModal>

        <transition
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
        >
            <p v-if="test">hello</p>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modal: false,
                test: false
            };
        }
    };

</script>

<style lang="scss" rel="stylesheet/scss">

</style>
