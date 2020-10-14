<template>
  <aside class="menu">
    <p class="menu-label is-hidden-touch">Modules</p>
    <ul class="menu-list">
      <li v-for="sidebarModule in sidebarModuleList" :key="sidebarModule.to">
        <nuxt-link class="nav-item is-tab" :to="sidebarModule.to">
          <span class="icon"><i :class="sidebarModule.icon"></i></span>
          {{ sidebarModule.title }}
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      sidebarModuleList: [
        { to: '/', icon: 'fas fa-university', title: 'Index' },
        { to: '/page2', icon: 'fas fa-university', title: 'Page 2' },
      ]
    }
  }
}
</script>
