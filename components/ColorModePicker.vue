<template>
  <button class="button is-info is-block" @click="toggleDarkMode()">
    <ColorScheme placeholder="..." tag="span">
      <span v-if="$colorMode.value === 'dark'">
        <IconDark />
      </span>
      <span v-else>
        <IconLight />
      </span>
    </ColorScheme>
  </button>
</template>

<script>
import IconLight from '~/assets/icons/light.svg'
import IconDark from '~/assets/icons/dark.svg'

export default {
  components: {
    IconLight,
    IconDark
  },

  methods: {
    toggleDarkMode() {
      if (this.$colorMode.preference !== 'dark') {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    }
  }
}
</script>
