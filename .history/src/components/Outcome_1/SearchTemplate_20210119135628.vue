<template>
  <v-card class="text-start" height="65" flat>
    <v-row class="d-flex align-baseline">
      <v-col cols="9" class="text-header pl-8 " xs="1">Templates</v-col>
      <v-col class="hidden-sm-and-up px-0" cols="2">
        <v-btn
          depressed
          color="#FF4848"
          class="white--text text-none font-weight-medium"
          @click="showAddTemplate()"
        >
          + Add template</v-btn
        >
      </v-col>
      <v-col class="px-0 hidden-xs-only">
        <v-btn
          depressed
          color="#FF4848"
          class="white--text text-none font-weight-medium"
          @click="showAddTemplate()"
        >
          + Add template</v-btn
        >
      </v-col>
      <v-col class="px-0 hidden-sm-and-up">
        <v-btn
          depressed
          text
          color="#FF4848"
          class="white--text text-none font-weight-medium"
          @click="showAddTemplate()"
          style="fontSize:28px"
        >
          +
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  methods: {
    showAddTemplate() {
      this.$store.dispatch("deleteListTemplate");
      this.$emit("showAddTemplate", true);
    },
  },
};
</script>

<style></style>
