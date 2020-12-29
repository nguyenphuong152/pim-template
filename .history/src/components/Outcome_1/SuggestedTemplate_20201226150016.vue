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
          <v-dialog v-model="dialog" max-width="450">
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
            <v-card>
              <v-card-title class="text-start">
                Your work can be lost!
              </v-card-title>
              <v-card-text class="text-start"
                >Do you want to keep this draft?</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#EEEEEE"
                  @click="dialog = false"
                  style="text-transform:none"
                  class="blue-grey--text"
                  elevation="0"
                >
                  Discard
                </v-btn>
                <v-btn
                  color="blue"
                  elevation="0"
                  @click="dialog = false"
                  class="white--text"
                  style="text-transform:none"
                >
                  Keep
                </v-btn>
              </v-card-actions>
            </v-card>
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
