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
                <v-dialog transition="dialog-bottom-transition" max-width="800">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="text-none"
                      outlined
                      color="#ff4848"
                      depressed
                      v-bind="attrs"
                      v-on="on"
                    >
                      Preview
                    </v-btn>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-card-title class="pa-4 text-start" color="#ff4848"
                        >Preview</v-card-title
                      >
                      <v-card-text>
                        <v-container class="px-0">
                          <v-row>
                            <v-col
                              v-for="n in 4"
                              :key="n"
                              class="d-flex child-flex"
                              cols="3"
                            >
                              <v-img
                                :src="
                                  `https://picsum.photos/500/300?image=${n * 8 +
                                    10}`
                                "
                                :lazy-src="
                                  `https://picsum.photos/10/6?image=${n * 8 +
                                    10}`
                                "
                                aspect-ratio="1"
                                class="grey lighten-2"
                                width="800"
                              >
                                <template v-slot:placeholder>
                                  <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                                  >
                                    <v-progress-circular
                                      indeterminate
                                      color="grey lighten-5"
                                    ></v-progress-circular>
                                  </v-row>
                                </template>
                              </v-img>
                            </v-col>
                          </v-row>
                          <v-row>
                            <span class="pl-3 title"
                              >Painting of famous attractions</span
                            >
                          </v-row>
                          <v-row>
                            <span
                              class="pl-3"
                              v-bind:style="{
                                color: activeColor,
                                fontSize: fontSize + 'px',
                              }"
                              >12.99$</span
                            >
                          </v-row>
                          <v-row>
                            <v-col class="text-start">
                              <v-row>
                                <v-col>
                                  Product name
                                </v-col>
                                <v-col class="font-weight-bold">
                                  My Product
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col>
                                  Brand
                                </v-col>
                                <v-col class="font-weight-bold">
                                  EIM
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col>
                                  Colors
                                </v-col>
                                <v-col>
                                  <v-row class="justify-space-between">
                                    <v-btn depressed color="red"></v-btn>
                                    <v-btn depressed color="green"></v-btn>
                                    <v-btn depressed color="blue"></v-btn>
                                  </v-row>
                                </v-col>
                              </v-row>
                            </v-col>
                            <v-col> </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn
                          text
                          @click="dialog.value = false"
                          class="text-none"
                          color="#ff4848"
                          >Close</v-btn
                        >
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
      activeColor: "blue",
      fontSize: 24,
    };
  },
};
</script>
