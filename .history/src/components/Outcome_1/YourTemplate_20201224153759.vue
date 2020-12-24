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
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="blue"
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
                    <v-icon color="green" size="18" v-bind="attrs" v-on="on"
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
    <v-col v-for="(item, i) in getListTemplate" :key="i" cols="11">
      <v-card color="#f0f8ff">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-row>
              <v-col class="text-start pl-8">
                <span class="template-title font-weight-bold blue--text">{{
                  item.name
                }}</span>
                <br />
                <span class="font-weight-thin">0 product in use</span>
              </v-col>
              <v-col cols="1">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="blue"
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
                    <v-icon color="green" size="18" v-bind="attrs" v-on="on"
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
  computed: {
    getListTemplate() {
      return this.$store.getters.listTemplate;
    },
  },
  created() {
    this.getListTemplate();
  },
};
</script>
