<template>
  <v-container class="text-start ma-0 pa-0">
    <v-card flat>
      <v-row class="d-flex align-baseline pt-4">
        <v-col cols="3">
          <v-container class="pl-10 py-0">
            <span class="text-header font-weight-bold ">Basic Information</span>
          </v-container>
        </v-col>
        <v-col>
          <v-btn depressed color="#ddebff" class="text-none"
            >Template: {{ templateName }}</v-btn
          >
        </v-col>
      </v-row>
      <v-container class="py-0 ">
        <v-row class="d-flex align-baseline pa-0">
          <v-col cols="6" xs="12">
            <v-container class="py-0 px-16">
              <v-text-field
                color="blue darken-2"
                label="Product name"
                hint="Miniskirt-02"
                required
              ></v-text-field>
            </v-container>
          </v-col>
          <v-col class="px-0">
            <v-container class="py-0">
              <v-text-field
                color="blue darken-2"
                label="Category"
                hint="Ex: Miniskirt"
                required
              ></v-text-field>
            </v-container>
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row class="d-flex align-baseline">
          <v-col cols="6">
            <v-container class="py-0 px-16">
              <v-text-field
                color="blue darken-2"
                label="Base price"
                hint="180.000"
                v-mask="mask"
                v-model="currencyModel1"
                required
              ></v-text-field>
            </v-container>
          </v-col>
          <v-col class="px-0">
            <v-container class="py-0">
              <v-select :items="items" label="Currency"></v-select>
            </v-container>
          </v-col>
          <v-col cols="4"> </v-col>
        </v-row>
        <v-row class="d-flex align-baseline">
          <v-col cols="6">
            <v-container class="py-0 px-16">
              <v-text-field
                color="blue darken-2"
                label="Retail price"
                hint="180.000"
                v-mask="mask"
                v-model="currencyModel"
                required
              ></v-text-field>
            </v-container>
          </v-col>
          <v-col class="px-0">
            <v-container class="py-0 ">
              <v-select :items="items" label="Currency"></v-select>
            </v-container>
          </v-col>
          <v-col cols="4"
            ><v-checkbox label="On sale?" color="red" hide-details></v-checkbox>
          </v-col>
        </v-row>
        <v-row class="d-flex align-baseline">
          <v-col cols="6">
            <v-container class="py-0 px-16">
              <v-text-field
                color="blue darken-2"
                label="Unit of measurement"
                hint="Ex: piece, pair,..."
                required
              ></v-text-field>
            </v-container>
          </v-col>
          <v-col cols="4">
            <v-row>
              <v-col>
                <v-container class="pa-0">
                  <v-text-field
                    label="Length"
                    placeholder="70cm"
                    outlined
                  ></v-text-field>
                </v-container>
              </v-col>
              <v-col class="px-0">
                <v-container class="pa-0">
                  <v-text-field
                    label="Width"
                    placeholder="50cm"
                    outlined
                  ></v-text-field>
                </v-container>
              </v-col>
              <v-col>
                <v-container class="pa-0">
                  <v-text-field
                    label="Height"
                    placeholder="10cm"
                    outlined
                  ></v-text-field>
                </v-container>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-container class="py-0 px-16">
              <span>Description</span>
            </v-container>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="py-0 px-16">
            <v-container>
              <v-textarea
                outlined
                clearable
                clear-icon="mdi-close-circle"
                value="Product description goes here..."
              ></v-textarea>
            </v-container>
          </v-col>
        </v-row>
        <v-row class="d-flex align-baseline pa-0">
          <v-col>
            <v-container class="py-0 px-16">
              <span>Add Images</span>
            </v-container>
          </v-col>
          <v-col cols="9" class="px-0">
            <v-container class="py-0 px-0">
              <v-btn
                color="blue"
                class="ma-2 white--text"
                style="text-transform:none"
                depressed
              >
                Upload
                <v-icon right dark>
                  mdi-cloud-upload
                </v-icon>
              </v-btn>
            </v-container>
          </v-col>
        </v-row>
        <v-row class="d-flex align-baseline">
          <v-col cols="8" class="px-16">
            <v-row>
              <v-col v-for="n in 4" :key="n" class="d-flex child-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 3 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 3 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  width="70"
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
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import createNumberMask from "text-mask-addons/dist/createNumberMask";
const currencyMask = createNumberMask({
  prefix: "",
  allowDecimal: true,
  includeThousandsSeparator: true,
  allowNegative: false,
});
export default {
  data: () => ({
    mask: currencyMask,
    currencyModel: "",
    currencyModel1: "",
    items: ["VND", "USD", "EUR"],
    templateName: "",
    template: [],
  }),
  created() {
    this.templateName = this.$route.params.name;
    this.template = this.$store.getters.listTemplate.filter(
      (i) => i.name === this.templateName
    );
  },
};
</script>

<style></style>
