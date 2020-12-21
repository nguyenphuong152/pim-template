<template>
  <v-container class="text-start ma-1 pa-0">
    <v-card flat>
      <v-row class="d-flex align-baseline px-16 pt-4">
        <v-col>
          <v-container class="px-16 py-0">
            <span class="title ">Preview</span>
          </v-container>
        </v-col>
        <v-col>
          <span>Template: Clothing</span>
        </v-col>
      </v-row>
      <v-container class="px-16 py-0">
        <v-row class="d-flex align-start pa-0">
          <v-col>
            <v-container class="py-0 px-16">
              <v-img
                lazy-src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                max-height="150"
                max-width="250"
                src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
              ></v-img>
            </v-container>
          </v-col>
          <v-col cols="6" class="px-0">
            <v-row>
              <v-container class="py-0 px-0">
                <v-btn color="blue-grey " class="ma-2 white--text"
                  >Change image</v-btn
                >
              </v-container>
            </v-row>
            <v-row>
              <v-col class="py-0">
                <span>Color</span>
              </v-col>
              <v-col class="py-0">
                <span class="font-weight-bold">Red</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="py-0">
                <span>Product name</span>
              </v-col>
              <v-col class="py-0">
                <span class="font-weight-bold">Miniskirt-02</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="py-0">
                <span>Retail price</span>
              </v-col>
              <v-col class="py-0">
                <span class="font-weight-bold">10000000</span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    checkbox: false,
    items: [
      {
        text: "Red",
      },
      {
        text: "Green",
      },
      {
        text: "Blue",
      },
      {
        text: "Yellow",
      },
    ],
    loading: false,
    search: "",
    selected: [],
  }),
  computed: {
    allSelected() {
      return this.selected.length === this.items.length;
    },
    categories() {
      const search = this.search.toLowerCase();

      if (!search) return this.items;

      return this.items.filter((item) => {
        const text = item.text.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
    selections() {
      const selections = [];

      for (const selection of this.selected) {
        selections.push(selection);
      }

      return selections;
    },
  },
  watch: {
    selected() {
      this.search = "";
    },
  },
};
</script>

<style></style>
