<template>
  <v-navigation-drawer permanent width="100%" right absolutes floating>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title text-start">
          Your template
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-col v-for="(item, i) in items" :key="i" cols="11">
      <v-card color="#f0f8ff">
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
            <v-row class="text-start">
              <v-col class="text-start pl-8 py-0">
                <v-btn text color="green">+ Add product</v-btn>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-navigation-drawer>
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
    showAddTemplate() {
      this.$emit("showAddTemplate", true);
    },
  },
};
</script>
