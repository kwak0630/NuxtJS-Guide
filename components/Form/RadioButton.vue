<template>
  <div :class="['chk-box', { disabled }]">
    <label
      class="checkbox"
      :for="id"
    >
      <input
        type="radio"
        :id="id"
        :name="name"
        :checked="checked"
        :disabled="disabled"
        :value="value"
        @input="onInput"
      >
      <span>
        {{ value }}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
    }
  },
  methods: {
    onInput(event) {
        this.$emit('input', event.target.checked);
        // console.log(this.value)
    },
  }
}
</script>