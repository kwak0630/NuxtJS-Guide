<template>
  <div class="switch-box">
    <label class="switch">
      <input type="checkbox" 
        @click="toggleCheckbox"
        :checked="checked"
        :name="name"
      >
      <div class="slider"></div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },  
  data() {
    return {
      checkbox: false
    }
  },
  methods: {
    toggleCheckbox() {
      this.checkbox = !this.checkbox
      this.$emit('change', this.checkbox)
    }
  }
}
</script>