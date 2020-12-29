<template>
  <v-card class="text-start" height="65" flat>
    <v-row class="d-flex align-baseline">
      <v-col cols="9" class="pl-8">Suggested template</v-col>

      <v-col>
        <v-btn
          depressed
          color="blue"
          class="white--text text-none font-weight-medium"
          @click="showAddTemplate()"
        >
          + Add template</v-btn
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
