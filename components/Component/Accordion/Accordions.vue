<template>
  <div class="accordion-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return { 
      accordions: [],
    }
  },
  mounted() {
    this.accordions = this.$children;
  },
  methods: {
    toggleAccordion(toggledAccordion) {
      this.accordions.forEach(accordion => {
        if (accordion === toggledAccordion) {
          accordion.isActive = !accordion.isActive;
        } else {
          accordion.isActive = false;
        }
      });
    }
  }
}
</script>