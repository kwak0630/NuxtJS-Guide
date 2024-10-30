<template>
  <div :class="['input-field', { error }]">
    <textarea
      :id="id"
      :placeholder="placeholder" 
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :rows="rows"
      v-model="message"
    >
    </textarea>
    <div class="counter-box">
      <span>{{ message.length }} / {{ maxlength }}</span>
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
    rows: {
      type: String,
      default: '5',
      required: false
    },
    maxlength: {
      type: String,
      default: '100',
      required: false
    }
  },
  data() {
    return {
      message: '',
    }
  },
  computed: {
    error() {
      return this.errorMsg && this.errorMsg.length > 0
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.message = val
      }
    }
  },
}
</script>