<template>
  <v-container class="text-start ma-1 pa-0">
    <v-card flat>
      <v-row class="d-flex align-baseline pt-4">
        <v-col>
          <v-container class="py-0">
            <span class="title">Preview</span>
          </v-container>
        </v-col>
        <v-col class="px-0">
          <span>Template: {{ templateName }}</span>
        </v-col>
      </v-row>
      <v-container class=" py-0">
        <v-row class="d-flex align-start pa-0 align-center">
          <v-col cols="8">
            <v-container class="py-0">
              <v-row>
                <v-col
                  v-for="n in 3"
                  :key="n"
                  class="d-flex child-flex"
                  cols="4"
                >
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 8 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 8 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col>
            <v-icon>mdi-camera</v-icon>
          </v-col>
        </v-row>
        <v-col>
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
          <v-row class="align-baseline">
            <v-col class="py-0">
              <span>Retail price</span>
            </v-col>
            <v-col class="py-0" cols="3">
              <span class="font-weight-bold">{{
                Intl.NumberFormat().format(price1)
              }}</span>
            </v-col>
            <v-col cols="3" class="py-0">
              <v-dialog v-model="dialog1" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon small v-bind="attrs" v-on="on">mdi-pencil</v-icon>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Edit value</span>
                  </v-card-title>
                  <v-card-text>
                    <v-text-field
                      label="Input new value here*"
                      required
                      hint="Ex: 150,410"
                      v-model="price1"
                    ></v-text-field>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog1 = false">
                      Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="dialog1 = false">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <v-row class="align-baseline">
            <v-col class="py-0">
              <span>Max discount</span>
            </v-col>
            <v-col class="py-0" cols="3">
              <span class="font-weight-bold">{{ discount2 }}%</span>
            </v-col>
            <v-col cols="3" class="py-0">
              <v-dialog v-model="dialog2" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon small v-bind="attrs" v-on="on">mdi-pencil</v-icon>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Edit value</span>
                  </v-card-title>
                  <v-card-text>
                    <v-text-field
                      label="Input new value here*"
                      required
                      hint="Ex: 15"
                      v-model="discount2"
                    ></v-text-field>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog2 = false">
                      Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="dialog2 = false">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-col>
      </v-container>
      <v-divider></v-divider>
      <v-container class="py-0">
        <v-row class="d-flex align-start pa-0">
          <v-col>
            <v-container class="py-0">
              <v-img
                lazy-src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                max-height="150"
                max-width="250"
                src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
              ></v-img>
            </v-container>
          </v-col>
          <v-col class="px-0">
            <v-icon>mdi-camera</v-icon>
          </v-col>
        </v-row>
        <v-col>
          <v-row>
            <v-col class="py-0">
              <span>Color</span>
            </v-col>
            <v-col class="py-0">
              <span class="font-weight-bold">Green</span>
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
          <v-row class="align-baseline">
            <v-col class="py-0">
              <span>Retail price</span>
            </v-col>
            <v-col class="py-0" cols="3">
              <span class="font-weight-bold">{{
                Intl.NumberFormat().format(price3)
              }}</span>
            </v-col>
            <v-col cols="3" class="py-0">
              <v-dialog v-model="dialog3" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon small v-bind="attrs" v-on="on">mdi-pencil</v-icon>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Edit value</span>
                  </v-card-title>
                  <v-card-text>
                    <v-text-field
                      label="Input new value here*"
                      required
                      hint="Ex: 150,410"
                      v-model="price3"
                    ></v-text-field>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog3 = false">
                      Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="dialog3 = false">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <v-row class="align-baseline">
            <v-col class="py-0">
              <span>Max discount</span>
            </v-col>
            <v-col class="py-0" cols="3">
              <span class="font-weight-bold">{{ discount3 }}%</span>
            </v-col>
            <v-col cols="3" class="py-0">
              <v-dialog v-model="dialog4" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon small v-bind="attrs" v-on="on">mdi-pencil</v-icon>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Edit value</span>
                  </v-card-title>
                  <v-card-text>
                    <v-text-field
                      label="Input new value here*"
                      required
                      hint="Ex: 15"
                      v-model="discount3"
                    ></v-text-field>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog4 = false">
                      Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="dialog4 = false">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-col>
      </v-container>
      <v-divider></v-divider>
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
                <v-btn
                  color="blue-grey "
                  class="ma-2 white--text"
                  style="text-transform:none"
                  >Change image</v-btn
                >
              </v-container>
            </v-row>
            <v-row>
              <v-col class="py-0">
                <span>Color</span>
              </v-col>
              <v-col class="py-0">
                <span class="font-weight-bold">Blue</span>
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
            <v-row class="align-baseline">
              <v-col class="py-0">
                <span>Retail price</span>
              </v-col>
              <v-col class="py-0" cols="3">
                <span class="font-weight-bold">{{
                  Intl.NumberFormat().format(price3)
                }}</span>
              </v-col>
              <v-col cols="3" class="py-0">
                <v-dialog v-model="dialog5" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon small v-bind="attrs" v-on="on">mdi-pencil</v-icon>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Edit value</span>
                    </v-card-title>
                    <v-card-text>
                      <v-text-field
                        label="Input new value here*"
                        required
                        hint="Ex: 150,410"
                        v-model="price3"
                      ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog5 = false"
                      >
                        Close
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog5 = false"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
            <v-row class="align-baseline">
              <v-col class="py-0">
                <span>Max discount</span>
              </v-col>
              <v-col class="py-0" cols="3">
                <span class="font-weight-bold">{{ discount3 }}%</span>
              </v-col>
              <v-col cols="3" class="py-0">
                <v-dialog v-model="dialog6" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon small v-bind="attrs" v-on="on">mdi-pencil</v-icon>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Edit value</span>
                    </v-card-title>
                    <v-card-text>
                      <v-text-field
                        label="Input new value here*"
                        required
                        hint="Ex: 15"
                        v-model="discount3"
                      ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog6 = false"
                      >
                        Close
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog6 = false"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-container class="text-center">
          <v-row>
            <v-col cols="8"></v-col>
            <v-col>
              <v-btn
                color="#EEEEEE"
                class="ma-2 blue-grey--text px-8"
                @click="goBack()"
                style="text-transform:none"
              >
                Close
              </v-btn>
              <v-dialog v-model="dialog7" persistent max-width="400px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="green darken-1"
                    style="text-transform:none"
                    class="ma-2 white--text px-8"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Save
                  </v-btn>
                </template>
                <v-card>
                  <v-container>
                    <v-card-title>Create successfully</v-card-title>
                    <v-icon size="60" color="green"
                      >mdi-cloud-check-outline</v-icon
                    >
                    <v-card-text class="text-center"
                      >Product successfully created!</v-card-text
                    >
                  </v-container>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="#EEEEEE"
                      @click="goBackEdit()"
                      class="blue-grey--text px-4"
                      style="text-transform:none"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      class="white--text px-4"
                      style="text-transform:none"
                      @click="goAddProduct()"
                    >
                      Confirm
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog1: false,
    dialog2: false,
    dialog3: false,
    dialog4: false,
    dialog5: false,
    dialog6: false,
    dialog7: false,

    checkbox: false,
    price1: "150000",
    price2: "150000",
    price3: "150000",
    discount1: 0,
    discount2: 0,
    discount3: 0,
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
    templateName: "",
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
  methods: {
    goBack() {
      this.$router.push("Product");
    },
    goBackEdit() {
      this.dialog7 = false;
      this.$router.push("AddProduct");
    },
    goAddProduct() {
      this.dialog7 = false;
      this.$router.push("Product");
    },
  },
  created() {
    this.templateName = this.$route.params.name;
  },
};
</script>

<style></style>
