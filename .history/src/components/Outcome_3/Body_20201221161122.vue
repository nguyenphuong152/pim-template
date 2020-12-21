<template>
  <v-container class="text-start pa-0">
    <v-card flat>
      <v-sheet
        :class="radius"
        :max-width="model === 6 ? 128 : 256"
        class="mx-auto transition-swing secondary"
        elevation="12"
        height="128"
        width="100%"
      ></v-sheet>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
