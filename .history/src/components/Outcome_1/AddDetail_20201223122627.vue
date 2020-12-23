<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header disable-icon-rotate>
        <template v-slot:actions>
          <v-icon color="blue">
            mdi-chevron-down
          </v-icon>
          <v-icon color="red">
            mdi-delete-outline
          </v-icon>
        </template>
        <template>
          <v-row no-gutters>
            <v-col cols="4">
              Image
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
    </v-expansion-panel>
    <v-expansion-panel v-for="(item, i) in this.getListComponent" :key="i">
      <v-expansion-panel-header disable-icon-rotate>
        <template v-slot:actions>
          <v-icon color="blue">
            mdi-chevron-down
          </v-icon>
          <v-icon color="red" @click="deleteComponent(item)">
            mdi-delete-outline
          </v-icon>
        </template>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              <span>{{ item.name }}</span>
            </v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open" key="0">
                  Enter a name component
                </span>
                <span v-else key="1"> </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col>
            <v-text-field
              v-model="item.name"
              placeholder="Title"
              hint="Provider"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field placeholder="Value"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-btn>OK</v-btn>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  computed: {
    getListComponent() {
      return this.$store.getters.listComponent;
    },
  },
  data: () => ({
    newListComponent: [],
  }),
  methods: {
    deleteComponent(component) {
      this.$store.dispatch("deleteComponentFromList", component);
    },
  },
};
</script>
