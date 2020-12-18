<template>
  <v-card class="text-start" height="65" flat>
    <v-row class="d-flex align-baseline">
      <v-col cols="5" class="text-header pl-8">Product</v-col>
      <v-col sm="6" md="4" class="pa-0">
        <v-text-field
          flat
          solo
          label="Type for search here"
          prepend-icon="mdi-magnify"
        ></v-text-field
      ></v-col>
      <v-col>
        <v-btn
          depressed
          color="blue"
          class="white--text text-none font-weight-medium"
          @click="showAddTemplate()"
        >
          + Add product</v-btn
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  methods: {
    showAddTemplate() {
      this.$emit("showAddTemplate", true);
    },
  },
};
</script>

<style></style>
