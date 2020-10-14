<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item is-hoverable" to="/">
          Nuxt Color Mode With Bulma
        </nuxt-link>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              <ColorModePicker />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ColorModePicker from '~/components/ColorModePicker'

export default {
  components: {
    ColorModePicker
  }
}
</script>
