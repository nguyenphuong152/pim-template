<template>
  <v-container class="px-0">
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
                <span v-if="item.name != null">{{ item.name }}</span>
                <span v-else>Text</span>
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
                hint="Ex: Provider"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field placeholder="Value"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn
              @click="
                collapsePanel();
                addTextComponent();
              "
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
        v-for="(item, idVideo) in this.videoComponent"
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
      <v-expansion-panel
        v-for="(item, idColor) in this.colorComponent"
        :key="idColor"
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
                <span>Color</span>
              </v-col>
            </v-row>
          </template>
        </v-expansion-panel-header>
      </v-expansion-panel>
      <v-expansion-panel
        v-for="(item, idDate) in this.dateComponent"
        :key="idDate"
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
                <span>Date</span>
              </v-col>
            </v-row>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row
            class="align-baseline"
            v-for="(item, index) in date"
            :key="index"
          >
            <v-col>
              <v-text-field
                v-model="dates[index]"
                placeholder="Title"
                hint="Start"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-icon color="blue">mdi-calendar</v-icon>
            </v-col>
            <v-col>
              <v-row>
                <v-btn
                  color="green"
                  style="text-transform:none;font-size:25px"
                  text
                  class="white--text"
                  @click="addDate(index)"
                  >+</v-btn
                >
                <v-btn
                  text
                  color="red"
                  style="text-transform:none;font-size:25px"
                  rounded
                  class="white--text"
                  @click="deleteDate(index)"
                  >-</v-btn
                >
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn
              @click="
                collapsePanel();
                addDateComponent();
              "
              outlined
              color="blue"
              style="text-transform:none"
              >Save</v-btn
            >
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel
        v-for="(item, idSelect) in this.selectComponent"
        :key="idSelect"
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
                <span>Select</span>
              </v-col>
            </v-row>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row class="align-baseline">
            <v-col>
              <span>Title</span>
            </v-col>
            <v-col>
              <v-text-field
                v-model="title"
                placeholder="Title"
                hint="Which combo you want to buy?"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="align-baseline">
            <v-col cols="6">
              <span>Number of selections</span>
            </v-col>
            <v-col>
              <v-text-field
                v-model="countSelection"
                outlined
                placeholder="Value"
                hint="Ex: 3"
              ></v-text-field>
            </v-col>
            <v-col></v-col>
          </v-row>
          <v-row
            v-for="(n, idCount) in Number(countSelection)"
            :key="idCount"
            class="align-baseline"
          >
            <v-col>
              <span>Title of selection</span>
            </v-col>
            <v-col>
              <v-text-field
                v-model="options[idCount]"
                hint="Ex:selection 1"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn
              @click="
                collapsePanel();
                addSelectComponent();
              "
              outlined
              color="blue"
              style="text-transform:none"
              >Save</v-btn
            >
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <br />
    <v-row class="pr-3">
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="300">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="blue"
            class="white--text text-none font-weight-medium text-end "
            @click="createTemplate()"
            v-bind="attrs"
            v-on="on"
          >
            Save template</v-btn
          >
        </template>
        <v-card>
          <v-card-title>
            Notification
          </v-card-title>
          <v-card-text class="text-start"
            >Your template has been save successfully!</v-card-text
          >
          <v-card-actions>
            <v-btn
              color="#EEEEEE"
              @click="dialog = false"
              class="blue-grey--text pa-8"
              style="text-transform:none"
            >
              Cancel
            </v-btn>

            <v-btn
              color="blue darken-1"
              class="white--text"
              @click="dialog = false"
              style="text-transform:none"
            >
              Try it
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
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
    colorComponent: function() {
      return this.getListComponent.filter((i) => i.component.name === "Color");
    },
    dateComponent: function() {
      return this.getListComponent.filter((i) => i.component.name === "Date");
    },
    selectComponent: function() {
      return this.getListComponent.filter((i) => i.component.name === "Select");
    },
    basicInformation() {
      return this.$store.getters.basicInfo;
    },
    text() {
      return this.$store.getters.textComponent;
    },
    image() {
      return this.$store.getters.imageComponent;
    },
    video() {
      return this.$store.getters.videoComponent;
    },
    color() {
      return this.$store.getters.colorComponent;
    },
    datee() {
      return this.$store.getters.dateComponent;
    },
    select() {
      return this.$store.getters.selectComponent;
    },
  },
  props: ["nameTemplate"],
  data: () => ({
    dialog: false,
    pid: null,
    newListComponent: [],
    countSelection: "",
    date: ["1"],
    title: "",
    options: [],
    dates: [],
    basicInfo: [
      "ProductName",
      "BasePrice",
      "RetailPrice",
      "UnitOfMeasurement",
      "Description",
      "Image",
    ],
  }),
  methods: {
    deleteComponent(component) {
      this.$store.dispatch("deleteComponentFromList", component);
    },
    collapsePanel(e) {
      this.pid = e;
    },
    addDate(input) {
      this.date.push(input);
    },
    deleteDate(input) {
      this.date.pop(input);
      if (this.date.length === 0) {
        this.date.push(1);
      }
    },
    addBasicInfo() {
      this.$store.dispatch("addBasicInfoForTemplate", {
        basicInfo: this.basicInfo,
      });
    },
    addTextComponent() {
      this.$store.dispatch("addTextComponentForTemplate", {
        textComponent: this.textComponent,
      });
    },
    addImageComponent() {
      this.$store.dispatch("addImageComponentForTemplate", {
        countImage: this.imageComponent.length,
      });
    },
    addVideoComponent() {
      this.$store.dispatch("addVideoComponentForTemplate", {
        countVideo: this.videoComponent.length,
      });
    },
    addColorComponent() {
      this.$store.dispatch("addColorComponentForTemplate", {
        countColor: this.colorComponent.length,
      });
    },
    addDateComponent() {
      this.$store.dispatch("addDateComponentForTemplate", {
        dateComponent: this.dates,
      });
    },
    addSelectComponent() {
      this.$store.dispatch("addSelectComponentForTemplate", {
        title: this.title,
        selections: this.options,
      });
    },
    toggleAddingNewTemplate() {
      this.$store.dispatch("rerenderComponent");
    },
    createTemplate() {
      this.addBasicInfo();
      this.addImageComponent();
      this.addVideoComponent();
      this.addColorComponent();
      this.toggleAddingNewTemplate();
      this.$store.dispatch("createTemplate", {
        name: this.nameTemplate,
        basicInfo: this.basicInformation,
        textComponent: this.text,
        imageComponent: this.image,
        videoComponent: this.video,
        colorComponent: this.color,
        dateComponent: this.datee,
        selectComponent: this.select,
      });
    },
  },
};
</script>
