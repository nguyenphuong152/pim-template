<template>
  <v-card class="text-start" height="120" flat>
    <v-row class="d-flex align-baseline">
      <v-col cols="9" class="pl-8 blue-grey--text">Suggested template</v-col>
      <v-row class="mx-4">
        <v-col
          v-for="n in items"
          :key="n"
          class="d-flex child-flex py-0"
          cols="3"
        >
          <v-card color="#f0f8ff" @click="seeDetail(n.name)">
            <v-card-text class="blue--text font-weight-bold">{{
              n.name
            }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "Sneaker" },
        { name: "Sporting" },
        { name: "Noodle" },
        { name: "Drink" },
      ],
    };
  },
  methods: {
    seeDetail(name) {
      this.$emit("nameTemplate", name);
    },
  },
};
</script>

<style></style>
