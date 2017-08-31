<template>
    <button class="wl-button" :class="['wl-button-' + theme, 'wl-button-' + size, {
        'wl-button-loading': loading
    }]">
        <i class="iconfont icon-loading" v-if="loading"></i>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'wlButton',
        props: {
            theme: {
                type: String,
                default: 'danger'
            },
            size: {
                type: String,
                default: 'block'
            },
            loading: {
                type: Boolean,
                default: true
            }
        }
    };

</script>

<style lang="scss" rel="stylesheet/scss">
    @import '~_assets/styles/baseFunction';

    .wl-button {
        /*width: pxRem(20);*/
        /*height:;*/
        padding: pxRem(10);
        border: 1px solid;
        background: $colorDefault;
        border-radius: pxRem(4);
        outline: none;
        position: relative;
        &:active {
            &:after {
                content: '';
                display: block;
                position: absolute;
                top: -1px;
                bottom: -1px;
                right: -1px;
                left: -1px;
                background: rgba(0, 0, 0, 0.2);
            }
        }
        &-default {
            border-color: #ccc;
            background-color: $colorDefault;
        }
        &-primary {
            border-color: $colorFontBlue;
            background-color: $colorFontBlue;
            color: #fff;
        }
        &-warning {
            border-color: $colorOrange;
            background-color: $colorOrange;
            color: #ffffff;
        }
        &-danger {
            border-color: $colorDanger;
            background-color: $colorDanger;
            color: #ffffff;
        }

        &-small {
            padding: pxRem(5);
        }
        &-large {
            padding: pxRem(20)
        }
        &-block {
            display: block;
            width: 100%;
        }
        &-loading {
            opacity: 0.8;
        }
        .icon-loading {
            position: relative;
            top: 1px;
            margin-right: pxRem(5);
            display: inline-block;
            animation: rotating 1s linear infinite;
            /*transform: rotateZ(58deg);*/
        }
    }
</style>
