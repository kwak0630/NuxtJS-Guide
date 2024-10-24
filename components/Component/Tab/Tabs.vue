<template>
  <div class="tab-wrap">
    <div :class="['tab-title', type]">
      <ul>
        <li v-for="tab in tabs" :class="{ 'active': tab.isActive }">
          <a :href="tab.href" @click.prevent="selectTab(tab)">
            <span>
              {{ tab.name }}
              <em v-if="tab.count !== undefined && tab.count !== null" class="count">{{ tab.count }}</em>
            </span>
          </a>
        </li>
      </ul>
    </div>

    <div class="tab-content">
      <slot></slot>
    </div>
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
      tabs: [],
    }
  },
  mounted() {
    this.tabs = this.$children.map(child => ({
      name: child.name,
      href: child.href,
      isActive: child.selected,
      count: child.count
    }));
  },
  methods: {
    selectTab: function(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name);
      });
      this.$children.forEach(child => {
        child.isActive = (child.name === selectedTab.name);
      });
    }
  }
}
</script>