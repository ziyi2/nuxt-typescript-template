<template>
  <section>
    <h1 class="header">Nuxt TypeScript Starter</h1>
    <md-button class="md-primary">Primary</md-button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class extends Vue {
}
</script>
