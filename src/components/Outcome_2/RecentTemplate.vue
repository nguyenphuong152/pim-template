<template>
  <v-card :height="setHeight" width="100%" class="py-2" flat>
    <v-row class="align-baseline mx-1">
      <v-col class="py-0 text-start px-0" cols="12" md="3" xs="3">
        <v-card-title class="font-weight-bold">
          Recent templates
        </v-card-title>
      </v-col>
      <v-col class="px-0 text-start" md="6">
        <v-dialog v-model="dialog" scrollable max-width="300px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="blue-grey"
              dark
              v-bind="attrs"
              v-on="on"
              text
              style="text-transform:none"
            >
              <v-icon color="blue-grey"> mdi-chevron-right </v-icon>Show all
            </v-btn>
          </template>
          <v-card height="100%">
            <v-card-title>
              Your template
              <v-spacer></v-spacer>
              <v-icon color="red" @click="dialog = false"
                >mdi-window-close</v-icon
              >
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height:500px;">
              <v-col v-for="(item, i) in templates" :key="i"
                ><v-card color="#fafafa" @click="addProduct(item.name)">
                  <div class="d-flex  justify-space-between">
                    <div>
                      <v-row>
                        <v-col class="text-start pl-4">
                          <span
                            class="template-title font-weight-bold black--text"
                            >{{ item.name }}</span
                          >
                          <br />
                          <span class="font-weight-thin">{{
                            item.products
                          }}</span>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                </v-card></v-col
              ></v-card-text
            >
          </v-card>
        </v-dialog>
      </v-col>
      <v-col>
        <v-icon color="#ff4848" size="22" class="hidden-sm-and-down">
          mdi-magnify
        </v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-card
        class="d-flex mr-2 ml-8"
        v-for="(item, i) in items"
        :key="i"
        color="#fafafa"
        :width="setWidthCard"
        height="80"
        @click="addProduct(item.name)"
      >
        <v-row>
          <v-col class="text-start pl-8" cols="8">
            <span class="template-title font-weight-bold black--text">{{
              item.name
            }}</span>
            <br />
            <span class="font-weight-thin">{{ item.products }}</span>
          </v-col>
          <v-col>
            <v-icon color="black" size="18" @click="showAddTemplate()"
              >mdi-auto-fix</v-icon
            >
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
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
    templates: [
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
    addProduct(text) {
      this.$router.push({
        name: "AddProduct",
        params: { name: text },
      });
    },
  },
  created() {
    this.listTemplate = this.$store.getters.listTemplate;
    for (var i = 0; i < this.listTemplate.length; i++) {
      var element = {};
      element.name = this.listTemplate[i].name;
      element.products = "Add new product !";
      this.templates.unshift(element);
    }
  },
  computed: {
    setHeight() {
      if (
        this.$vuetify.breakpoint.name === "xs" ||
        this.$vuetify.breakpoint.name === "sm"
      ) {
        return 350;
      } else return 200;
    },
    setWidthCard() {
      if (
        this.$vuetify.breakpoint.name === "xs" ||
        this.$vuetify.breakpoint.name === "sm"
      ) {
        return 170;
      } else if (this.$vuetify.breakpoint.name === "md") {
        return 220;
      } else return 220;
    },
  },
};
</script>

<style></style>
