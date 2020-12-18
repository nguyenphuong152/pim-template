<template>
  <v-card height="220" width="900" class="py-2" flat>
    <v-container class="text-start">
      <v-row class="align-baseline">
        <v-col class="py-0"
          ><span class="font-weight-bold">Recent templates</span>
          <br />
          <br />
          <v-row>
            <span class="grey--text"
              ><span class="red--text">* </span> Choose a template to add new
              product</span
            >
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <span class="blue--text">+ New template</span>
          </v-row>
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
    </v-container>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" class="mx-2">
        <v-card color="#f0f8ff" width="190" height="80">
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
};
</script>

<style></style>
