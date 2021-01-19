<template>
  <v-card class="text-start" height="65" flat>
    <v-row class="d-flex align-baseline">
      <v-col class="text-header pl-8" cols="2">Products</v-col>
      <v-col class="px-0">
        <v-icon color="#ff4848">
          mdi-magnify
        </v-icon></v-col
      >
      <v-col sm="8" md="2" class="pa-0 hidden-xs-only">
        <v-btn
          depressed
          color="#ff4848"
          class="white--text text-none font-weight-medium"
        >
          + Add new product</v-btn
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  methods: {},
};
</script>

<style></style>
