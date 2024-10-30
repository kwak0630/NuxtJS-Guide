<template>
  <!-- <dl v-for="accordion in accordions" :key="accordion.name" :class="{ 'active': accordion.isActive }"> -->
  <dl :class="{ 'active': isActive }">
      <dt>
        <button type="button" @click="toggleAccordion">
          <span>
            {{ name }}
          </span>
        </button>
      </dt>
      <dd>
        <slot></slot>
      </dd>
    </dl>
</template>

<script>
export default {
  props: {
    name: { 
      type: String,
      required: true,
      default: '',
    },
    selected: { 
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      isActive: this.selected,
    }
  },
  methods: {
    toggleAccordion() {
      // this.isActive = !this.isActive;
      this.$parent.toggleAccordion(this);
      
      // this.$parent.toggleAccordion(this.index);
    }
  },
}
</script>