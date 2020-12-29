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
          <v-dialog transition="dialog-bottom-transition" max-width="300">
            <template v-slot:activator="{ on, attrs }">
              <v-card
                color="#f0f8ff"
                @click="seeDetail(n.name)"
                v-bind="attrs"
                v-on="on"
              >
                <v-card-text class="blue--text font-weight-bold">{{
                  n.name
                }}</v-card-text>
              </v-card>
            </template>
            <template v-slot:default="dialog">
              <v-card width="300">
                <v-card-title class=" headline justify-start">
                  Do you want to keep this draft?
                </v-card-title>
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
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
