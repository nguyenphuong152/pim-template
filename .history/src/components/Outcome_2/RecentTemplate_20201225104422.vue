<template>
  <v-card height="250" width="900" class="py-2" flat>
    <v-container class="text-start">
      <v-row class="align-baseline">
        <v-col class="py-0"
          ><span class="font-weight-bold">Recent templates</span>
        </v-col>
        <v-col class="py-0" cols="4">
          <v-text-field
            outlined
            dense
            label="Search template"
            hint="Example: Clothes"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="px-3">
        <span class="grey--text"
          ><span class="red--text">* </span> Choose a template to add new
          product</span
        >
        <v-spacer></v-spacer>
        <span class="blue--text">+ New template</span>
      </v-row>
    </v-container>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" class="mx-2">
        <v-card color="#f0f8ff" width="190" height="80" @click="addProduct()">
          <div class="d-flex child-flex justify-space-between">
            <v-row>
              <v-col class="text-start pl-8">
                <span class="template-title font-weight-bold blue--text">{{
                  item.name
                }}</span>
                <br />
                <span class="font-weight-thin">{{ item.products }}</span>
              </v-col>
              <v-col cols="1">
                <v-icon color="blue" size="18" @click="showAddTemplate()"
                  >mdi-auto-fix</v-icon
                >
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="grey" dark v-bind="attrs" v-on="on" text>
          <v-icon color="blue-grey"> mdi-chevron-right </v-icon>Show all
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select Country</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;"> </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "Clothing",
        products: "12 products in use",
      },
      {
        name: "Food",
        products: "12 products in use",
      },
      {
        name: "Cosmetics",
        products: "12 products in use",
      },
      {
        name: "Sport",
        products: "12 products in use",
      },
    ],
  }),
  methods: {
    addProduct() {
      this.$router.push({ name: "AddProduct" });
    },
  },
};
</script>

<style></style>
