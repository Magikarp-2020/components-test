<template>
    <div class="wl-modal">
        <div class="wl-modal-wrapper">
            <div class="wl-modal-box wl-modal-box-size-default">
                <div class="wl-modal-title">
                    提示
                </div>
                <div class="wl-modal-content">
                    提示123123
                </div>
                <div class="wl-modal-footer">
                    <div class="wl-modal-footer-item" v-for="item in btn">item</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'wlModal',
        props: {
            value: {
                type: Boolean,
                default: false
            },
            btn: {
                type: Array,
                default() {
                    return ['确定', '取消'];
                }
            }
        }
    };

</script>

<style lang="scss" rel="stylesheet/scss">
    @import '~_assets/styles/baseFunction';

    .wl-modal {
        &-wrapper {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }
        &-box {
            border-radius: pxRem(8);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
            box-sizing: border-box;
            /*padding:20px;*/
            &-size {
                &-default {
                    width: 4rem;
                }
            }
        }
        &-title {
            padding: pxRem(8);
            color: #0a0a0a;
            text-align: center;
            border-bottom: 1px solid #ccc;
            font-size: pxRem(30);
        }
        &-content {
            font-size: pxRem(25);
            padding: pxRem(8);
        }
        &-footer {
            border-top: 1px solid #ccc;
            font-size: pxRem(30);
            text-align: center;
            display: flex;
            &-item {
                padding: pxRem(8) 0;
                flex: 1;
                text-align: center;
                border-right: 1px solid #ccc;
                &:first-of-type {
                    color: $colorFontBlue;
                }
                &:last-of-type {
                    border-right: none;
                }
            }
        }
    }
</style>
