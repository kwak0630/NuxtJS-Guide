<template>
  <div class="quantity-box">
    <div :class="['quantity', { error }]">
      <button 
        type="button" 
        class="btn-minus" 
        @click="decrement" 
        
      >
        <span class="hidden">감소</span>
      </button>
      <input 
        type="number" 
        :name="name"
        class="num"
        v-model="quantityNum"
        :min="minlength"
        :max="maxValue"
      >
      <button 
        type="button" 
        class="btn-plus" 
        @click="increment" 
      >
        <span class="hidden">증가</span>
      </button>
    </div>
    <p
      v-if="error"
      class="error-msg"
    >
      {{ errorMsg }}
    </p>
    <!-- 
        :disabled="isDecreaseDisabled"
    :class="{ 'disabled': decrement }"
    
        :disabled="isIncreaseDisabled"
        :class="{ 'not-allowed': isIncreaseDisabled }"
        
        @input="updateQuantity" 
        @keydown="disabled ? $event.preventDefault() : null" 
        :style="{ pointerEvents: isInputDisabled ? 'none' : 'auto' }"
        :disabled="disabled" -->
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: '1',
      required: false
    },
    errorMsg: {
      type: String,
      default: '',
      required: false
    },
    disabled: {
      type: String,
      default: '',
      required: false
    },
    minlength: {
      type: Number,
      default: 1,
      required: false
    },
    maxlength: {
      type: Number,
      required: false
    }
  },  
  data() {
    return {
      quantityNum: '',
    }
  },
  computed: {
    error() {
      return this.errorMsg && this.errorMsg.length > 0
    },
    maxValue() {
      return this.maxlength ? Math.pow(10, this.maxlength) - 1 : undefined
    }
  },
  watch: {
    // modelValue(val) {
    //   this.$emit('update:modelValue', val);

    // },
    // isDecreaseDisabled() {
    //   if( this.disabled == "decrement"){
    //     console.log("@")
    //     // eslint-disable-next-line vue/no-mutating-props
    //     this.disabled = true
    //   }
    // },
    value: {
      immediate: true,
      handler(val) {
        this.quantityNum = val
      }
    },
    quantityNum(newVal) {
      if (this.maxlength && newVal.toString().length > this.maxlength) {
        this.quantityNum = newVal.toString().slice(0, this.maxlength)
      }
      this.$emit('input', this.quantityNum)
    }
  },
  methods: {
    increment() {
      if (this.quantityNum < this.maxValue) {
        this.quantityNum++
      }
      else {
        // eslint-disable-next-line no-undef
        // error();
      }
    },
    decrement() {if (this.quantityNum > this.minlength) {
        this.quantityNum--
      } else {
        // eslint-disable-next-line no-undef
        // error/();
      }
    }
  }
}
</script>