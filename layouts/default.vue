<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="columns is-fullheight">
        <!-- Sidebar -->
        <div class="column is-2">
          <Sidebar />
        </div>
        <!-- Sidebar #END# -->
        <!-- Content -->
        <div class="column is-10">
          <nuxt />
        </div>
        <!-- Content #END# -->
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'
import Navbar from '~/components/Navbar'

export default {
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style lang="sass">
// Fix for the sidebar to make it scrollable + fixed on screen.
// Resource: https://codepen.io/wikiki/pen/OjdNKM
$navbar-height: 3.25rem

.columns
  &.is-fullheight
    min-height: calc(100vh - ( #{$navbar-height} - .75rem ) )
    max-height: calc(100vh - ( #{$navbar-height} - .75rem ) )
    height: calc(100vh - ( #{$navbar-height} - .75rem ) )
    display: flex
    flex-direction: row
    justify-content: stretch
    .column
      overflow-y: auto
</style>
