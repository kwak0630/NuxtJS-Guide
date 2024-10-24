<template>
  <div @click="toggleDropdown" :class="['select-box', { error, disabled, active: isOpen }]">
    <!-- Native select -->
    <select v-if="type === 'native'" :disabled="disabled" :name="name">
      <option v-for="option in options" :key="option.value" :value="option.value" :disabled="option.disabled">
        {{ option.value }}
      </option>
    </select>
    
    <!-- Custom select -->
    <div v-else :class="['select-type', typeClass]">
      <span class="select-option">
        <!-- {{ placeholder }} -->
        {{ selectedValue }}
      </span>
      <ul v-show="showDropdown">
        <!-- <li v-for="option in options" :key="option.value" v-bind:class="{ selected: option.value === selected }"> -->
        <li v-for="option in options" :key="option.value">
          <button type="button" @click="selectOption(option.value)" :disabled="option.disabled">
            {{ option.value }}
          </button>
        </li>
      </ul>
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
      default: '',
    },
    options: {
      type: Array,
      defaut: [],
    }, 
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    typeClass: {
      type: String,
      default: ''
    },
    errorMsg: {
      type: String,
      default: '',
      required: false
    },
  },
  data() {
    return {
      selected: "selected",
      showDropdown: false,
      isOpen: false,
      selectedValue: '선택해주세요.'
    }
  },
  computed: {
    error() {
      return this.errorMsg && this.errorMsg.length > 0
    },
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
      if(this.showDropdown) {
        this.isOpen = true;
      } else{
        this.isOpen = false;
      }
    },

    selectOption(value) {
      this.selected = value;
      this.selectedValue = value;
      this.$emit('change', value)

    },
  },
}
</script>