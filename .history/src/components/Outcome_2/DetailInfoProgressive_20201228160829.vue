<template>
  <v-container class="text-start ma-1 pa-0">
    <v-card flat>
      <v-row class="d-flex align-baselinept-4">
        <v-col>
          <v-container class="py-0">
            <span class="title ">Detail Information</span>
          </v-container>
        </v-col>
        <v-col>
          <span>Template: {{ templateName }}</span>
        </v-col>
      </v-row>
      <v-container class="px-16 py-0">
        <v-row
          class="d-flex align-baseline pa-0"
          v-for="(item, idText) in template[0].textComponent"
          :key="idText"
        >
          <v-col cols="6">
            <v-container class="py-0 px-16">
              <span>{{ item.name }}</span>
            </v-container>
          </v-col>
          <v-col class="px-0">
            <v-container class="py-0 px-3">
              <v-text-field label="Value"> </v-text-field>
            </v-container>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
        <v-row
          class="d-flex align-baseline pa-0"
          v-for="(item, idDate) in template[0].dateComponent"
          :key="idDate"
        >
          <v-col cols="6">
            <v-container class="py-0 px-16">
              <span>{{ item.title }}</span>
            </v-container>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="myInputModel"
              v-mask="'##/##/####'"
              hint="Input date. Ex: 26122020"
            ></v-text-field>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
        <v-row class="align-baseline">
          <v-col cols="6">
            <v-container class="py-0 px-16">
              <span>{{ template[0].selectComponent.title }}</span>
            </v-container>
          </v-col>
          <v-col>
            <v-radio-group v-model="radioGroup">
              <v-radio
                v-for="(item, idSelect) in template[0].selectComponent
                  .selectionTitle"
                :key="idSelect"
                :label="` ${item}`"
                :value="n"
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row
          class="d-flex align-baseline pa-0"
          v-for="n in template[0].videoComponent"
          :key="n"
        >
          <v-col>
            <v-container class="py-0 px-16">
              <span>Add Video</span>
            </v-container>
          </v-col>
          <v-col cols="6" class="px-0">
            <v-container class="py-0 px-0">
              <v-btn
                color="blue-grey"
                class="ma-2 white--text"
                style="text-transform:none"
              >
                Upload
                <v-icon right dark>
                  mdi-cloud-upload
                </v-icon>
              </v-btn>
            </v-container>
          </v-col>
        </v-row>
        <v-row
          class="d-flex align-baseline pa-0"
          v-for="n in template[0].imageComponent"
          :key="n"
        >
          <v-col>
            <v-container class="py-0 px-16">
              <span>Add Image</span>
            </v-container>
          </v-col>
          <v-col cols="6" class="px-0">
            <v-container class="py-0 px-0">
              <v-btn
                color="blue-grey"
                class="ma-2 white--text"
                style="text-transform:none"
              >
                Upload
                <v-icon right dark>
                  mdi-cloud-upload
                </v-icon>
              </v-btn>
            </v-container>
          </v-col>
        </v-row>
        <v-row
          class="d-flex align-baseline"
          v-for="n in template[0].colorComponent"
          :key="n"
        >
          <v-col cols="6">
            <v-container class="py-0 px-16">
              <span>Colors</span>
            </v-container>
          </v-col>
          <v-col>
            <v-checkbox v-model="checkbox" label="Show colors"></v-checkbox>
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
                    v-bind:color="getColor(selection.text)"
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
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    myInputModel: "",
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
    templateName: "",
    template: [],
    menu: [],
    dateValue: [],
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
    getColor(selection) {
      if (selection === "Red") return "red";
      else if (selection === "Green") return "green";
      else if (selection === "Blue") return "blue";
      else {
        return "yellow";
      }
    },
    changeState(id) {
      this.menu[id] = false;
    },
  },
  created() {
    this.templateName = this.$route.params.name;
    this.template = this.$store.getters.listTemplate.filter(
      (i) => i.name === this.templateName
    );

    for (var j = 0; j < this.template[0].dateComponent.length; j++) {
      let d = new Date().toISOString().substr(0, 10);
      this.dateValue.push(d);
      this.menu.push("false");
      //console.log(this.menu[1]);
    }
    console.log("template ", this.template);
  },
};
</script>

<style></style>
