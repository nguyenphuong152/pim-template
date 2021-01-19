<template>
  <v-card :height="setHeight" width="100%" class="py-2" flat>
    <v-row class="align-baseline mx-4">
      <v-col class="py-0 text-start px-0" cols="9"
        ><span class="font-weight-bold">Recent templates</span>
      </v-col>
      <v-col class="py-0 hidden-xs-only">
        <v-text-field
          outlined
          dense
          label="Search template"
          hint="Example: Clothes"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mx-4">
      <span class="grey--text"
        ><span class="red--text">* </span> Choose a template to add new
        product</span
      >
      <v-spacer></v-spacer>
      <span class="blue--text hidden-xs-only mr-4">+ New template</span>
    </v-row>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" class="mx-4 " xs="6">
        <v-card
          color="#fafafa"
          :width="setWidthCard"
          height="80"
          @click="addProduct(item.name)"
        >
          <div class="d-flex child-flex justify-space-between">
            <v-row>
              <v-col class="text-start pl-8">
                <span class="template-title font-weight-bold black--text">{{
                  item.name
                }}</span>
                <br />
                <span class="font-weight-thin">{{ item.products }}</span>
              </v-col>
              <v-col cols="1">
                <v-icon color="black" size="18" @click="showAddTemplate()"
                  >mdi-auto-fix</v-icon
                >
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
      <v-row class="align-baseline hidden-md-and-up">
        <v-col class="text-start pl-10">
          <v-btn outlined style="text-transform:none" color="blue"
            >Add template</v-btn
          >
        </v-col>
        <v-col cols="5">
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
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-row>
                          <v-col class="text-start pl-8">
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
      </v-row>
    </v-row>
    <v-row>
      <v-col cols="10" class="px-0"></v-col>
      <v-col class="px-0">
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
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-row>
                        <v-col class="text-start pl-8">
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
      } else return 300;
    },
    setWidthCard() {
      if (
        this.$vuetify.breakpoint.name === "xs" ||
        this.$vuetify.breakpoint.name === "sm"
      ) {
        return 150;
      } else if (this.$vuetify.breakpoint.name === "md") {
        return 180;
      } else return 180;
    },
  },
};
</script>

<style></style>
