<template>
  <v-navigation-drawer permanent width="100%" right absolutes floating>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title text-start">
          Your template
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider color="#ffeaea"></v-divider>

    <v-col v-for="(item, i) in items" :key="i" cols="11">
      <v-card color="#fafafa">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-row>
              <v-col class="text-start pl-8">
                <span class="template-title font-weight-bold black--text">{{
                  item.name
                }}</span>
                <br />
                <span class="font-weight-thin">{{ item.products }}</span>
              </v-col>
              <v-col class="text-end" cols="1">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="black"
                      size="18"
                      @click="showAddTemplate()"
                      v-bind="attrs"
                      v-on="on"
                      >mdi-pencil</v-icon
                    >
                  </template>
                  <span>Edit template</span>
                </v-tooltip>

                <br />
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="black"
                      size="18"
                      v-bind="attrs"
                      v-on="on"
                      @click="addProduct(item.name)"
                      >mdi-plus-circle-outline</v-icon
                    >
                  </template>
                  <span>Use this template to add new product</span>
                </v-tooltip>
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
    listTemplate: [],
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
        name: "Jewellery",
        products: "12 products in use",
      },
      {
        name: "Noodle",
        products: "12 products in use",
      },
      {
        name: "Drink",
        products: "12 products in use",
      },
      {
        name: "Laptop",
        products: "12 products in use",
      },
    ],
  }),
  methods: {
    showAddTemplate() {
      this.$emit("showAddTemplate", true);
    },
    addProduct(text) {
      this.$router.push({
        name: "AddProduct",
        params: { name: text },
      });
    },
  },
  computed: {},
  created() {
    this.listTemplate = this.$store.getters.listTemplate;
    for (var i = 0; i < this.listTemplate.length; i++) {
      var element = {};
      element.name = this.listTemplate[i].name;
      element.products = "Add new product !";
      this.items.unshift(element);
    }
  },
};
</script>
