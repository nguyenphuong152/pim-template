<template>
  <v-card class="d-flex align-content-start flex-wrap" height="100">
    <v-card color="#f0f8ff" v-for="(item, i) in items" :key="i">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
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
                >mdi-pencil</v-icon
              >
            </v-col>
          </v-row>
        </div>
      </div>
    </v-card>
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
