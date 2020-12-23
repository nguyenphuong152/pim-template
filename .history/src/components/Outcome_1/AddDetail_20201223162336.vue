<template>
  <v-expansion-panels v-model="pid">
    <v-expansion-panel
      v-for="(item, idText) in this.textComponent"
      :key="idText"
    >
      <v-expansion-panel-header disable-icon-rotate value>
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
          <v-btn
            @click="collapsePanel()"
            outlined
            color="blue"
            style="text-transform:none"
            >Save</v-btn
          >
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel
      v-for="(item, idImage) in this.imageComponent"
      :key="idImage"
    >
      <v-expansion-panel-header disable-icon-rotate value>
        <template v-slot:actions>
          <v-icon color="blue">
            mdi-chevron-down
          </v-icon>
          <v-icon color="red" @click="deleteComponent(item)">
            mdi-delete-outline
          </v-icon>
        </template>
        <template>
          <v-row no-gutters>
            <v-col cols="4">
              <span>Image</span>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
    </v-expansion-panel>
    <v-expansion-panel
      v-for="(item, idVideo) in this.imageComponent"
      :key="idVideo"
    >
      <v-expansion-panel-header disable-icon-rotate value>
        <template v-slot:actions>
          <v-icon color="blue">
            mdi-chevron-down
          </v-icon>
          <v-icon color="red" @click="deleteComponent(item)">
            mdi-delete-outline
          </v-icon>
        </template>
        <template>
          <v-row no-gutters>
            <v-col cols="4">
              <span>Video</span>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  computed: {
    getListComponent() {
      return this.$store.getters.listComponent;
    },
    textComponent: function() {
      return this.getListComponent.filter((i) => i.component.name === "Text");
    },
    imageComponent: function() {
      return this.getListComponent.filter((i) => i.component.name === "Image");
    },
    videoComponent: function() {
      return this.getListComponent.filter((i) => i.component.name === "Video");
    },
  },

  data: () => ({
    pid: null,
    newListComponent: [],
  }),
  methods: {
    deleteComponent(component) {
      this.$store.dispatch("deleteComponentFromList", component);
    },
    collapsePanel(e) {
      this.pid = e;
    },
  },
};
</script>
