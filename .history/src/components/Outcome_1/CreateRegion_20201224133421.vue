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
              label="Name your template here"
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
        <AddDetail />
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
    return {};
  },
  methods: {},
};
</script>
