<template>
  <v-card height="100%" flat>
    <v-row>
      <v-col cols="3" class="py-0">
        <ListComponent />
      </v-col>
      <v-col class="text-start pa-0" cols="8">
        <v-row class="d-flex align-baseline">
          <v-col cols="2" class="title font-weight-medium">Name</v-col>
          <v-col cols="8" class="pa-0">
            <v-text-field
              v-model="templateName"
              clearable
              hint="Example: Shoes"
              class="shrink"
              style="width:330px"
            ></v-text-field>
          </v-col>
        </v-row>
        <span class="title">Basic Info</span>
        <AddInfo />
        <br />
        <span class="title">Detail </span>
        <br />
        <span class="blue-grey--text"
          ><span class="red--text">*</span> This is additional information. You
          can choose component on the left to customize your product detail
          information</span
        >
        <v-expansion-panels v-model="pid">
          <v-expansion-panel>
            <v-expansion-panel-header disable-icon-rotate value>
              <template v-slot:actions>
                <v-icon color="blue">
                  mdi-chevron-down
                </v-icon>
              </template>
              <template>
                <v-row no-gutters>
                  <v-col cols="4">
                    <span>Provider</span>
                  </v-col>
                </v-row>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col>
                  <v-text-field
                    placeholder="Title"
                    hint="Ex: Provider"
                  ></v-text-field>
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
          <v-expansion-panel>
            <v-expansion-panel-header disable-icon-rotate value>
              <template v-slot:actions>
                <v-icon color="blue">
                  mdi-chevron-down
                </v-icon>
              </template>
              <template>
                <v-row no-gutters>
                  <v-col cols="4">
                    <span>Size</span>
                  </v-col>
                </v-row>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row class="align-baseline">
                <v-col cols="6">
                  <span>Number of size</span>
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
                  <span>Value</span>
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
        <AddDetail :nameTemplate="this.templateName" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ListComponent from "../../components/Outcome_1/ListComponent";
import AddInfo from "../../components/Outcome_1/AddInfo";
import AddDetail from "../../components/Outcome_1/AddDetail";

export default {
  components: {
    ListComponent,
    AddInfo,
    AddDetail,
  },
  data() {
    return {
      pid: null,
      title: "",
      countSelection: "",
      options: [],
      templateName: "Sneaker",
    };
  },
  methods: {
    collapsePanel(e) {
      this.pid = e;
    },
  },
};
</script>
