<template>
  <v-container class="pa-0">
    <v-card class="" flat>
      <v-container class="text-start">
        <v-row class="align-baseline">
          <v-col cols="10">
            <span class="text-header">New product</span>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <br />
    <BasicInfo class="hidden-xs-only" />
    <BasicInfoProgressive class="hidden-sm-and-up" />
    <br />
    <DetailInfo class="hidden-xs-only" />
    <DetailInfoProgressive class="hidden-sm-and-up" />
    <br />
    <Preview class="hidden-xs-only" />
    <PreviewProgressive class="hidden-sm-and-up" />
  </v-container>
</template>

<script>
import BasicInfo from "../../components/Outcome_2/BasicInfo";
import DetailInfo from "../../components/Outcome_2/Detail";
import Preview from "../../components/Outcome_2/Preview";
import BasicInfoProgressive from "../../components/Outcome_2/BasicInfoProgressive";
import DetailInfoProgressive from "../../components/Outcome_2/DetailInfoProgressive";
import PreviewProgressive from "../../components/Outcome_2/PreviewProgressive";

export default {
  components: {
    BasicInfo,
    DetailInfo,
    Preview,
    BasicInfoProgressive,
    DetailInfoProgressive,
    PreviewProgressive,
  },
};
</script>
