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
          <v-card-title>
            Your template has been save successfully!
          </v-card-title>
          <v-card-text
            >You can use it now or go back to create another one</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
              style="text-transform:none"
            >
              Create new template
            </v-btn>
            <v-btn
              color="orange darken-1"
              text
              @click="dialog = false"
              style="text-transform:none"
            >
              Use template
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
