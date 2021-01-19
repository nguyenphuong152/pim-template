<template>
  <v-container class="pa-0 ma-0">
    <v-card flat>
      <v-container class="text-start">
        <v-row class="align-baseline">
          <v-col cols="8">
            <span class="text-header">
              <v-icon color="grey" @click="$router.back()"
                >mdi-arrow-left</v-icon
              >
              New product</span
            >
          </v-col>
          <v-col>
            <v-row class="hidden-sm-and-down">
              <v-col cols="3">
                <v-btn class="text-none" text depressed> Cancel </v-btn>
              </v-col>
              <v-col cols="4">
                <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="1000"
                >
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
                        <v-container class="pa-0">
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
                                width="80"
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
                            <v-col class="text-start" cols="6">
                              <v-row>
                                <v-col cols="3">
                                  Product name
                                </v-col>
                                <v-col class="font-weight-bold">
                                  My Product
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col cols="3">
                                  Brand
                                </v-col>
                                <v-col class="font-weight-bold">
                                  EIM
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col cols="3">
                                  Colors
                                </v-col>
                                <v-col>
                                  <v-row class="justify-space-between">
                                    <v-btn depressed color="red"></v-btn>
                                    <v-btn depressed color="green"></v-btn>
                                    <v-btn depressed color="blue"></v-btn>
                                    <v-btn depressed color="yellow"></v-btn>
                                  </v-row>
                                </v-col>
                              </v-row>
                            </v-col>
                            <v-col class="text-start">
                              <v-row>
                                <v-col cols="3 ">
                                  Shipping
                                </v-col>
                                <v-col class="font-weight-bold">
                                  Free shipping on orders > 5 items
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col cols="3">
                                  Description
                                </v-col>
                                <v-col class="font-weight-bold">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Habitant felis mauris sit
                                  auctor imperdiet amet. Lectus mi, laoreet ut
                                  eu. A lacus at porttitor adipiscing non, in
                                  eget sed. Egestas morbi ultricies venenatis,
                                  nulla lectus cras.
                                </v-col>
                              </v-row>
                            </v-col>
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
                <v-dialog v-model="dialog" :width="setWidth">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="text-none"
                      v-bind="attrs"
                      v-on="on"
                      color="#ff4848"
                      depressed
                      dark
                    >
                      Save
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      Saved successfully
                    </v-card-title>
                    <v-card-text class="text-start"
                      >You can use it now or go back to create another
                      one</v-card-text
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                        style="text-transform:none"
                      >
                        Cancel
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
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
    <v-row class="hidden-sm-and-up">
      <v-col cols="3"></v-col>
      <v-col cols="3">
        <v-btn class="text-none" text depressed> Cancel </v-btn>
      </v-col>
      <v-col cols="3">
        <v-dialog transition="dialog-bottom-transition" max-width="1000">
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
                <v-container class="pa-0">
                  <v-row>
                    <v-col
                      v-for="n in 4"
                      :key="n"
                      class="d-flex child-flex"
                      cols="3"
                    >
                      <v-img
                        :src="
                          `https://picsum.photos/500/300?image=${n * 8 + 10}`
                        "
                        :lazy-src="
                          `https://picsum.photos/10/6?image=${n * 8 + 10}`
                        "
                        aspect-ratio="1"
                        class="grey lighten-2"
                        width="80"
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
                    <v-col cols="5">
                      Product name
                    </v-col>
                    <v-col class="font-weight-bold">
                      My Product
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3">
                      Brand
                    </v-col>
                    <v-col class="font-weight-bold">
                      EIM
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3">
                      Colors
                    </v-col>
                    <v-col>
                      <v-row class="justify-space-between">
                        <v-btn depressed color="blue"></v-btn>
                        <v-btn depressed color="red"></v-btn>
                        <v-btn depressed color="yellow"></v-btn>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3">
                      Shipping
                    </v-col>
                    <v-col class="font-weight-bold text-start">
                      Free shipping on orders > 5 items
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="4">
                      Description
                    </v-col>
                    <v-col class="font-weight-bold text-start">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Habitant felis mauris sit auctor imperdiet amet. Lectus
                      mi, laoreet ut eu. A lacus at porttitor adipiscing non, in
                      eget sed. Egestas morbi ultricies venenatis, nulla lectus
                      cras.
                    </v-col>
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
        <v-dialog v-model="dialog" :width="setWidth">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="text-none"
              v-bind="attrs"
              v-on="on"
              color="#ff4848"
              depressed
              dark
            >
              Save
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              Saved successfully
            </v-card-title>
            <v-card-text class="text-start"
              >You can use it now or go back to create another one</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
                style="text-transform:none"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
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
  methods: {
    goBack() {
      this.$router.push("product");
    },
  },
};
</script>
