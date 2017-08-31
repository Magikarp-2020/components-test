<template>
    <button class="wl-button" :class="['wl-button-' + theme, 'wl-button-' + size]">
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
            width:100%;
        }
    }
</style>
