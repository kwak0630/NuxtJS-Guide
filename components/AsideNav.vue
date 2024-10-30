<!-- Please remove this file from your project -->
<template>
  <div class="aside-nav">
    <div class="nav-title">
      <img :src="require('../assets/images/sally.png')" class="logo">
      <p>NuxtJS Guide</p>
    </div>
    <ul class="nav-list">
      <!-- <li><NuxtLink to="/main">Index</NuxtLink></li>
      <li><NuxtLink to="/color">Color</NuxtLink></li> -->
      <li
        v-for="nav in navigations"  
        :key="nav.name">
        <NuxtLink
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </NuxtLink> 
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
  name: 'AsideNav',
  
  data() {
    return {
      navigations: [
        {
          name: 'Index',
<<<<<<< HEAD
          href: '/guide/guide'
=======
          href: '/guide'
>>>>>>> 955e6c762b1494f8bb156bdd9cc713d8326a5e05
        },
        {
          name: 'Color',
          href: '/guide/color'
        },
        {
          name: 'Form',
          href: '/guide/form'
        },
        {
          name: 'Component',
          href: '/guide/component'
        },
        {
<<<<<<< HEAD
          name: 'Swiper',
          href: '/guide/swiper'
        },
        {
=======
>>>>>>> 955e6c762b1494f8bb156bdd9cc713d8326a5e05
          name: 'Popup',
          href: '/guide/popup'
        },
      ]
    }
  }
}
</script>
  