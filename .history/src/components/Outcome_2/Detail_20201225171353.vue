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
          <v-col cols="4" class="px-0">
            <v-menu
              ref="menu[idDate]"
              v-model="menu[idDate]"
              :close-on-content-click="false"
              :return-value.sync="dateValue[idDate]"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateValue[idDate]"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="dateValue[idDate]" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="changeState(menu[idDate])">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu[1].save(dateValue[idDate])"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
        <v-row class="d-flex align-baseline">
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
        console.log(this.$store.getters.listTemplate);
        return "yellow";
      }
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
      console.log(this.menu[1]);
    }
    console.log("template ", this.template);
  },
};
</script>

<style></style>
