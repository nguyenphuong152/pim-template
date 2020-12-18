<template>
  <v-card class="text-start" height="65" flat>
    <v-row class="d-flex align-baseline">
      <v-col md="5" class="text-header pl-8">Product</v-col>
      <v-col sm="8" md="6" class="pa-0">
        <v-row class="align-baseline">
          <v-text-field
            flat
            solo
            label="Type for search here"
            prepend-icon="mdi-magnify"
          ></v-text-field>
          <v-btn
            depressed
            color="blue"
            class="white--text text-none font-weight-medium"
          >
            Search product</v-btn
          >
        </v-row>
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
