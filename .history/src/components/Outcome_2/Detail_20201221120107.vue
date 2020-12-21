<template>
  <v-container class="text-start ma-1 pa-0">
    <v-card flat>
      <v-row class="d-flex align-baseline px-14 pt-4">
        <span class="title ">Detail Information</span>
        <v-spacer></v-spacer>
        <span>Template: Clothing</span>
      </v-row>
      <v-container class="px-16 py-0">
        <v-row class="d-flex align-baseline pa-0">
          <v-col>
            <v-container class="py-0 px-16">
              <span>Add Images</span>
            </v-container>
          </v-col>
          <v-col>
            <v-container class="py-0 px-16">
              <v-btn color="blue-grey" class="ma-2 white--text">
                Upload
                <v-icon right dark>
                  mdi-cloud-upload
                </v-icon>
              </v-btn>
            </v-container>
          </v-col>
        </v-row>
        <v-row class="d-flex align-baseline">
          <v-col cols="6">
            <v-container class="py-0 px-16">
              Preview
            </v-container>
          </v-col>
          <v-col>
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
        <v-row class="d-flex align-baseline">
          <v-col cols="6">
            <v-container class="py-0 px-16">
              <v-text-field
                color="blue darken-2"
                label="Retail price"
                hint="180,000"
                required
              ></v-text-field>
            </v-container>
          </v-col>
          <v-col cols="3">
            <v-container class="py-0 px-16">
              <v-select :items="items" label="Currency"></v-select>
            </v-container>
          </v-col>
          <v-col
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
          <v-col>
            <v-row>
              <v-col>
                <v-container class="py-0 pl-16">
                  <v-text-field
                    label="Length"
                    placeholder="70cm"
                    outlined
                  ></v-text-field>
                </v-container>
              </v-col>
              <v-col>
                <v-container class="py-0 pr-9 pl-9">
                  <v-text-field
                    label="Width"
                    placeholder="50cm"
                    outlined
                  ></v-text-field>
                </v-container>
              </v-col>
              <v-col>
                <v-container class="py-0 pr-16">
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
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
