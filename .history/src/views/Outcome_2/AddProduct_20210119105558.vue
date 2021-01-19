<template>
  <v-container class="pa-0 ma-0">
    <v-card flat>
      <v-container class="text-start">
        <v-row class="align-baseline">
          <v-col cols="8">
            <span class="text-header">
              <v-icon color="grey">mdi-arrow-left</v-icon> New product</span
            >
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="3">
                <v-btn class="text-none" text depressed> Cancel </v-btn>
              </v-col>
              <v-col cols="4">
                <v-dialog transition="dialog-bottom-transition" max-width="600">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="text-none" outlined color="#ff4848" depressed>
                      Preview
                    </v-btn>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="primary" dark
                        >Opening from the bottom</v-toolbar
                      >
                      <v-card-text>
                        <div class="text-h2 pa-12">Hello world!</div>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-col>
              <v-col>
                <v-btn class="text-none" color="#ff4848" depressed dark>
                  Save
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <BasicInfo class="hidden-xs-only" />
    <BasicInfoProgressive class="hidden-sm-and-up" />
    <DetailInfo class="hidden-xs-only" />
    <DetailInfoProgressive class="hidden-sm-and-up" />
    <!-- <Preview class="hidden-xs-only" />
    <PreviewProgressive class="hidden-sm-and-up" /> -->
  </v-container>
</template>

<script>
import BasicInfo from "../../components/Outcome_2/BasicInfo";
import DetailInfo from "../../components/Outcome_2/Detail";
//import Preview from "../../components/Outcome_2/Preview";
import BasicInfoProgressive from "../../components/Outcome_2/BasicInfoProgressive";
import DetailInfoProgressive from "../../components/Outcome_2/DetailInfoProgressive";
//import PreviewProgressive from "../../components/Outcome_2/PreviewProgressive";

export default {
  components: {
    BasicInfo,
    DetailInfo,
    // Preview,
    BasicInfoProgressive,
    DetailInfoProgressive,
    //PreviewProgressive,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
