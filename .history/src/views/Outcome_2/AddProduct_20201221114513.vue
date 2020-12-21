<template>
  <v-container class="pa-0">
    <v-card class="" flat>
      <v-container class="text-start">
        <v-row class="align-baseline">
          <v-col cols="10">
            <span class="text-header">Add product</span>
          </v-col>
          <v-col>
            <v-row>
              <v-col class="px-0">
                <span>Cancel |</span>
              </v-col>
              <v-col class="px-0 text-end">
                <span>Preview</span>
              </v-col>
              <v-col>
                <span>Save</span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <br />
    <BasicInfo />
    <br />
    <BasicInfo />
  </v-container>
</template>

<script>
import BasicInfo from "../../components/Outcome_2/BasicInfo";
export default {
  components: {
    BasicInfo,
  },
};
</script>
