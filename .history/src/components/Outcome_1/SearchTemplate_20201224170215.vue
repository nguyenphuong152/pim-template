<template>
  <v-card class="text-start" height="65" flat>
    <v-row class="d-flex align-baseline">
      <v-col cols="6" class="text-header pl-8">Template</v-col>
      <v-col></v-col>
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
export default {
  methods: {
    showAddTemplate() {
      this.$emit("showAddTemplate", true);
    },
  },
};
</script>

<style></style>
