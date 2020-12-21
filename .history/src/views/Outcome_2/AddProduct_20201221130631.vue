<template>
  <v-container class="pa-0">
    <v-card class="" flat>
      <v-container class="text-start">
        <v-row class="align-baseline">
          <v-col cols="10">
            <span class="text-header">Add product</span>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <br />
    <BasicInfo />
    <br />
    <DetailInfo />
    <br />
    <DetailInfo />
  </v-container>
</template>

<script>
import BasicInfo from "../../components/Outcome_2/BasicInfo";
import DetailInfo from "../../components/Outcome_2/Detail";

export default {
  components: {
    BasicInfo,
    DetailInfo,
  },
};
</script>
