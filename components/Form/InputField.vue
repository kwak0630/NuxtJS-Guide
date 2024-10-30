<template>
  <div :class="['input-field', { error }]">
    <input
      :id="id"
      :type="inputType"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      v-model="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <div class="btn-box">
      <button @click="clearInput" class="btn-clear">
        <i :class="[clearIcon ? 'ico-clear' : '']"></i>
      </button>
      <button v-show="showPwIcon" @click="togglePwInput" class="btn-eye">
        <i :class="[pwIcon ? 'ico-eye-off' : 'ico-eye-on']"></i>
      </button>
    </div>
    <p
      v-if="error"
      class="error-msg"
    >
      {{ errorMsg }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
      required: false
    },
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    id: {
      type: String,
      default: '',
      required: false
    },
    value: {
      type: String,
      default: '',
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    readonly: {
      type: Boolean,
      default: false,
      required: false
    },
    errorMsg: {
      type: String,
      default: '',
      required: false
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      modelValue: '',
      inputType: this.type,
      pwIcon: false,
      clearIcon: false,
    }
  },
  computed: {
    error() {
      return this.errorMsg && this.errorMsg.length > 0
    },
    showPwIcon() {
      return this.type === "password";
    },
  },
  watch: {
    modelValue(val) {
      this.$emit('update:modelValue', val);

      if(this.modelValue.length >= 1) {
        this.clearIcon = true;
      } else {
        this.clearIcon = false;
      }

      // readonly 일 경우에 삭제 버튼 제외
      if(this.readonly == true) {
        this.clearIcon = false;
      } 
    },
    value: {
      immediate: true,
      handler(val) {
        this.modelValue = val
      }
    }
  },
  methods: {
    togglePwInput() {
      this.inputType = this.inputType === "password" ? "text" : "password";
      this.$emit("input", {
        type: this.inputType
      });
      this.pwIcon = this.inputType === "text";
    },
    clearInput() {
      this.modelValue = ""
    },
  }
}
</script>