<template>
  <v-container class="text-start ma-1 pa-0">
    <v-card flat>
      <v-row class="d-flex align-baseline px-16 pt-4">
        <v-col>
          <v-container class="px-16 py-0">
            <span class="title ">Detail Information</span>
          </v-container>
        </v-col>
        <v-col>
          <span>Template: Clothing</span>
        </v-col>
      </v-row>
      <v-container class="px-16 py-0">
        <v-row class="d-flex align-baseline pa-0">
          <v-col cols="5">
            <v-container class="py-0 px-16">
              <span>Add Images</span>
            </v-container>
          </v-col>
          <v-col>
            <v-container class="py-0 px-16  ">
              <v-btn color="blue-grey" class="ma-2 white--text">
                Upload
                <v-icon right dark>
                  mdi-cloud-upload
                </v-icon>
              </v-btn>
            </v-container>
          </v-col>
        </v-row>
        <v-row class="d-flex align-baseline">
          <v-col cols="6">
            <v-container class="py-0 px-16">
              Your images
            </v-container>
          </v-col>
          <v-col>
            <v-row>
              <v-col v-for="n in 4" :key="n" class="d-flex child-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 3 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 3 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  width="70"
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
          </v-col>
        </v-row>
        <v-row class="d-flex align-baseline">
          <v-col cols="6">
            <v-container class="py-0 px-16">
              <span>Colors</span>
            </v-container>
          </v-col>
          <v-col cols="4" v-if="checkbox">
            <v-container class="py-0">
              <v-row align="center" justify="start">
                <v-col
                  v-for="(selection, i) in selections"
                  :key="selection.text"
                  class="shrink"
                >
                  <v-chip
                    :disabled="loading"
                    close
                    @click:close="selected.splice(i, 1)"
                  >
                    <v-icon left v-text="selection.icon"></v-icon>
                    {{ selection.text }}
                  </v-chip>
                </v-col>

                <v-col v-if="!allSelected" cols="12">
                  <v-text-field
                    ref="search"
                    v-model="search"
                    full-width
                    hide-details
                    label="Search"
                    single-line
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-list>
              <template v-for="item in categories">
                <v-list-item
                  v-if="!selected.includes(item)"
                  :key="item.text"
                  :disabled="loading"
                  @click="selected.push(item)"
                >
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </template>
            </v-list>
          </v-col>
          <v-col>
            <v-checkbox v-model="checkbox" label="Show colors"></v-checkbox>
          </v-col>
        </v-row>
        <v-row class="d-flex align-baseline">
          <v-col cols="6">
            <v-container class="py-0 px-16">
              <v-text-field
                color="blue darken-2"
                label="Unit of measurement"
                hint="Ex: piece, pair,..."
                required
              ></v-text-field>
            </v-container>
          </v-col>
          <v-col>
            <v-row>
              <v-col>
                <v-container class="py-0 pl-16">
                  <v-text-field
                    label="Length"
                    placeholder="70cm"
                    outlined
                  ></v-text-field>
                </v-container>
              </v-col>
              <v-col>
                <v-container class="py-0 pr-9 pl-9">
                  <v-text-field
                    label="Width"
                    placeholder="50cm"
                    outlined
                  ></v-text-field>
                </v-container>
              </v-col>
              <v-col>
                <v-container class="py-0 pr-16">
                  <v-text-field
                    label="Height"
                    placeholder="10cm"
                    outlined
                  ></v-text-field>
                </v-container>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    checkbox: false,
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
};
</script>

<style></style>
