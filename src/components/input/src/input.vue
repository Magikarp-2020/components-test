<template>
    <div class="wl-input-box">
        <div class="prepend" v-if="$slots.prepend">
            <slot name="prepend"></slot>
        </div>
        <input class="wl-input"
               :placeholder="placeholder"
               :value="value"
               :type="inputType"
               :readonly="isReadOnly"
               :disabled="disabled"

               @input="handleInput"
               @focus="handleFocus"
               @blur="handleBlur"
               @click="handleTap">
        <div class="append" v-if="$slots.append">
            <slot name="append">
            </slot>
        </div>
        <wl-modal v-if="exception.length" v-model="modal.exception" :btn="['确定']" @btn1="modal.exception = false"
                  positionTop="45%">
            请注意：你输入的货物为不保货物
        </wl-modal>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'wlInput',
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            value: {
                type: [String, Number],
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            readonly: {
                type: Boolean,
                default: false
            },
            max: {
                type: Number
            },
            min: {
                type: Number
            },
            float: {
                type: Boolean,
                default: true
            },
            minDate: {
                type: Date,
                default: null
            },
            exception: {
                type: Array,
                default() {
                    return [];
                }
            },
            config: {
                type: Object,
                default() {
                    return {};
                }
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                modal: {
                    exception: false
                }
            };
        },
        computed: {
            inputType() {
                if (this.type === 'number' && !this.float) {
                    return 'tel';
                } else if (this.type === 'carNo') {
                    return 'text';
                } else if (this.type === 'date') {
                    return 'text';
                } else {
                    return this.type;
                }
            },
            isReadOnly() {
                if (this.type === 'carNo') {
                    return true;
                } else if (this.type === 'date') {
                    return true;
                } else {
                    return this.readonly;
                }
            }
        },
        mounted() {
            let _this = this;
            if (_this.type === 'carNo') {
                window.$(_this.$el).carNo({
                    callback(cardNo) {
                        _this.$emit('input', cardNo);
                        _this.$emit('change', cardNo);
                    },
                    ...this.config
                });
            } else if (_this.type === 'date') {
                let params = {
                    callback(val) {
                        _this.$emit('input', val);
                        _this.$emit('change', val);
                    }
                };
                if (_this.minDate) {
                    params.minDate = new Date(_this.minDate);
                    _this.$emit('input', moment(_this.minDate).format('YYYY-MM-DD'));
                    _this.$emit('change', moment(_this.minDate).format('YYYY-MM-DD'));
                }
                window.$(_this.$el).find('input').mdater(params);
            }
        },
        methods: {
            handleInput(e) {
                let value = e.target.value;
                if (this.type === 'number' && value) {
                    if (!this.float) {
                        value = +(value.replace(/[^\d]/g, '').replace('-', ''));
                    }
                    if (this.max + '' && value > this.max) {
                        value = this.max;
                    } else if (this.min + '' && value < this.min) {
                        value = this.min;
                    }
                }
                if (e.target.value.toString() !== value.toString()) {
                    e.target.value = value;
                }
                this.$emit('input', value);
                this.$emit('change', value);
            },
            handleFocus(e) {
                this.$emit('focus', e);
                this.$store.commit('setPayShow', false);
            },
            handleBlur(e) {
                this.$emit('blur', e);
                this.$store.commit('setPayShow', true);
                this.handleException();
            },
            handleException() {
                this.exception.forEach(item => {
                    if (this.value.indexOf(item) > -1) {
                        this.modal.exception = true;
                    }
                });
            },
            handleTap(e) {
                setTimeout(() => {
                    this.$emit('tap', e);
                }, 10);
            }
        }
    };

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .wl-input-box {
        box-sizing: border-box;
        color: #1e2227;
        width: 100%;
        min-width: 4.0rem;
        /*padding: 0.333rem 0.333rem 0.333rem 0;*/
        /*height: 1.172rem;*/
        padding-right: 0.33rem;
        line-height: 0.506rem;
        font-size: 0.373rem;
        font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
        display: flex;
    }

    .wl-input {
        outline: none;
        border: none;
        height: 100%;
        flex-grow: 1;
        line-height: 0.506667rem;
        font-size: 0.37333rem;
        width: 100%;
    }

    .append {
        flex-shrink: 0
    }
</style>
