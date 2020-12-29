<template>
  <v-card class="text-start" height="65" flat>
    <v-row class="d-flex align-baseline">
      <v-col cols="9" class="text-header pl-8 " xs="4">Template</v-col>

      <v-col class="px-0">
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
