<template>
  <v-card height="160">
    <v-container class="text-start">
      <span>Recent templates</span>
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
                  >mdi-done</v-icon
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
      {
        name: "Sport",
        products: "12 products in use",
      },
    ],
  }),
};
</script>

<style></style>
