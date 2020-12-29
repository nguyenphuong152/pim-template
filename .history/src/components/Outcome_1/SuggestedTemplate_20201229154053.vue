<template>
  <v-card class="text-start" :height="setHeight" flat>
    <v-row class="d-flex align-baseline">
      <v-col cols="7" class="pl-8 blue-grey--text">Suggested template</v-col>
      <v-col class="hidden-md-and-up px-0">
        <v-dialog v-model="dialog4" max-width="270px">
          <template v-slot:activator="{ on, attrs }">
            <v-icon color="blue" v-bind="attrs" v-on="on"
              >mdi-chevron-double-right</v-icon
            >
          </template>
          <v-card height="100%">
            <v-card-title style="fontSize:18px">
              Suggested Templates
              <v-spacer></v-spacer>
              <v-icon color="red" @click="dialog4 = false"
                >mdi-window-close</v-icon
              >
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height:500px;">
              <v-col>
                <v-card color="#f0f8ff" @click="dialog = true" width="200">
                  <v-card-text class="blue--text font-weight-bold">
                    {{ name1 }}
                  </v-card-text>
                </v-card>
                <v-dialog v-model="dialog" max-width="450">
                  <v-card>
                    <v-card-title class="text-start">
                      Your work can be lost!
                    </v-card-title>
                    <v-card-text class="text-start"
                      >Do you want to keep this draft?</v-card-text
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="#EEEEEE"
                        @click="dialog = false"
                        style="text-transform:none"
                        class="blue-grey--text"
                        elevation="0"
                      >
                        Discard
                      </v-btn>
                      <v-btn
                        color="blue"
                        elevation="0"
                        @click="
                          dialog = false;
                          seeDetail(name1);
                        "
                        class="white--text"
                        style="text-transform:none"
                      >
                        Keep
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
              <v-col>
                <v-card color="#f0f8ff" @click="dialog1 = true" width="200">
                  <v-card-text class="blue--text font-weight-bold">
                    {{ name2 }}
                  </v-card-text>
                </v-card>
                <v-dialog v-model="dialog1" max-width="450">
                  <v-card>
                    <v-card-title class="text-start">
                      Your work can be lost!
                    </v-card-title>
                    <v-card-text class="text-start"
                      >Do you want to keep this draft?</v-card-text
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="#EEEEEE"
                        @click="
                          dialog1 = false;
                          seeDetailReset(name2);
                        "
                        style="text-transform:none"
                        class="blue-grey--text"
                        elevation="0"
                      >
                        Discard
                      </v-btn>
                      <v-btn
                        color="blue"
                        elevation="0"
                        @click="
                          dialog1 = false;
                          seeDetail(name2);
                        "
                        class="white--text"
                        style="text-transform:none"
                      >
                        Keep
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
              <v-col>
                <v-card color="#f0f8ff" @click="dialog2 = true" width="200">
                  <v-card-text class="blue--text font-weight-bold">
                    {{ name3 }}
                  </v-card-text>
                </v-card>
                <v-dialog v-model="dialog2" max-width="450">
                  <v-card>
                    <v-card-title class="text-start">
                      Your work can be lost!
                    </v-card-title>
                    <v-card-text class="text-start"
                      >Do you want to keep this draft?</v-card-text
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="#EEEEEE"
                        @click="dialog2 = false"
                        style="text-transform:none"
                        class="blue-grey--text"
                        elevation="0"
                      >
                        Discard
                      </v-btn>
                      <v-btn
                        color="blue"
                        elevation="0"
                        @click="
                          dialog2 = false;
                          seeDetail(name3);
                        "
                        class="white--text"
                        style="text-transform:none"
                      >
                        Keep
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
              <v-col>
                <v-card color="#f0f8ff" @click="dialog3 = true" width="200">
                  <v-card-text class="blue--text font-weight-bold">
                    {{ name4 }}
                  </v-card-text>
                </v-card>
                <v-dialog v-model="dialog3" max-width="450">
                  <v-card>
                    <v-card-title class="text-start">
                      Your work can be lost!
                    </v-card-title>
                    <v-card-text class="text-start"
                      >Do you want to keep this draft?</v-card-text
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="#EEEEEE"
                        @click="
                          dialog3 = false;
                          seeDetailReset(name4);
                        "
                        style="text-transform:none"
                        class="blue-grey--text"
                        elevation="0"
                      >
                        Discard
                      </v-btn>
                      <v-btn
                        color="blue"
                        elevation="0"
                        @click="
                          dialog3 = false;
                          seeDetail(name4);
                        "
                        class="white--text"
                        style="text-transform:none"
                      >
                        Keep
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col></v-card-text
            >
          </v-card>
        </v-dialog>
      </v-col>
      <v-row class="mx-4 hidden-sm-and-down">
        <v-col cols="3">
          <v-card color="#f0f8ff" @click="check(name1)" width="200">
            <v-card-text class="blue--text font-weight-bold">
              {{ name1 }}
            </v-card-text>
          </v-card>
          <v-dialog v-model="dialog" max-width="450">
            <v-card>
              <v-card-title class="text-start">
                Your work can be lost!
              </v-card-title>
              <v-card-text class="text-start"
                >Do you want to keep this draft?</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#EEEEEE"
                  @click="
                    dialog = false;
                    seeDetailReset(name1);
                  "
                  style="text-transform:none"
                  class="blue-grey--text"
                  elevation="0"
                >
                  Discard
                </v-btn>
                <v-btn
                  color="blue"
                  elevation="0"
                  @click="
                    dialog = false;
                    seeDetail(name1);
                  "
                  class="white--text"
                  style="text-transform:none"
                >
                  Keep
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
        <v-col cols="3">
          <v-card color="#f0f8ff" @click="dialog1 = true" width="200">
            <v-card-text class="blue--text font-weight-bold">
              {{ name2 }}
            </v-card-text>
          </v-card>
          <v-dialog v-model="dialog1" max-width="450">
            <v-card>
              <v-card-title class="text-start">
                Your work can be lost!
              </v-card-title>
              <v-card-text class="text-start"
                >Do you want to keep this draft?</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#EEEEEE"
                  @click="
                    dialog1 = false;
                    seeDetailReset(name2);
                  "
                  style="text-transform:none"
                  class="blue-grey--text"
                  elevation="0"
                >
                  Discard
                </v-btn>
                <v-btn
                  color="blue"
                  elevation="0"
                  @click="
                    dialog1 = false;
                    seeDetail(name2);
                  "
                  class="white--text"
                  style="text-transform:none"
                >
                  Keep
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
        <v-col cols="3">
          <v-card color="#f0f8ff" @click="dialog2 = true" width="200">
            <v-card-text class="blue--text font-weight-bold">
              {{ name3 }}
            </v-card-text>
          </v-card>
          <v-dialog v-model="dialog2" max-width="450">
            <v-card>
              <v-card-title class="text-start">
                Your work can be lost!
              </v-card-title>
              <v-card-text class="text-start"
                >Do you want to keep this draft?</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#EEEEEE"
                  @click="
                    dialog2 = false;
                    seeDetailReset(name3);
                  "
                  style="text-transform:none"
                  class="blue-grey--text"
                  elevation="0"
                >
                  Discard
                </v-btn>
                <v-btn
                  color="blue"
                  elevation="0"
                  @click="
                    dialog2 = false;
                    seeDetail(name3);
                  "
                  class="white--text"
                  style="text-transform:none"
                >
                  Keep
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
        <v-col cols="3">
          <v-card color="#f0f8ff" @click="dialog3 = true" width="200">
            <v-card-text class="blue--text font-weight-bold">
              {{ name4 }}
            </v-card-text>
          </v-card>
          <v-dialog v-model="dialog3" max-width="450">
            <v-card>
              <v-card-title class="text-start">
                Your work can be lost!
              </v-card-title>
              <v-card-text class="text-start"
                >Do you want to keep this draft?</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#EEEEEE"
                  @click="
                    dialog3 = false;
                    seeDetailReset(name4);
                  "
                  style="text-transform:none"
                  class="blue-grey--text"
                  elevation="0"
                >
                  Discard
                </v-btn>
                <v-btn
                  color="blue"
                  elevation="0"
                  @click="
                    dialog3 = false;
                    seeDetail(name4);
                  "
                  class="white--text"
                  style="text-transform:none"
                >
                  Keep
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["checkNull"],
  data() {
    return {
      dialog4: false,
      dialog: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      name1: "Sneaker",
      name2: "Sporting",
      name3: "Noodle",
      name4: "Drink",
      show: false,
    };
  },
  methods: {
    seeDetail(name) {
      this.$emit("nameTemplate", name);
    },
    seeDetailReset(name) {
      this.$store.dispatch("deleteListTemplate").then(() => {
        this.$emit("nameTemplate", name);
      });
    },
    check(name1) {
      if (this.getListComponent == []) {
        this.dialog = true;
        this.seeDetail(name1);
      } else {
        this.dialog = false;
      }
    },
  },
  computed: {
    getListComponent() {
      return this.$store.getters.getListComponent;
    },
    setHeight() {
      if (
        this.$vuetify.breakpoint.name === "xs" ||
        this.$vuetify.breakpoint.name === "sm"
      ) {
        return 50;
      } else return 120;
    },
  },
};
</script>

<style></style>
