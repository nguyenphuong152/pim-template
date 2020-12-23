<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:actions>
          <v-icon color="blue">
            mdi-chevron-down
          </v-icon>
        </template>
        <template>
          <v-row no-gutters>
            <v-col cols="4">
              Product name
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row class="align-baseline">
          <v-col>Input</v-col>
          <v-col> <v-text-field></v-text-field></v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:actions>
          <v-icon color="blue">
            mdi-chevron-down
          </v-icon>
        </template>
        <template>
          <v-row no-gutters>
            <v-col cols="4">
              Base price
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row class="align-baseline">
          <v-col>
            <span>Value</span>
          </v-col>
          <v-col>
            <v-text-field hint="100.000"></v-text-field>
          </v-col>
        </v-row>
        <v-row class="align-baseline">
          <v-col>
            <span>Currency</span>
          </v-col>
          <v-col>
            <v-select
              v-model="select"
              :hint="`${select.state}, ${select.abbr}`"
              :items="items"
              item-text="state"
              item-value="abbr"
              label="Select"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:actions>
          <v-icon color="blue">
            mdi-chevron-down
          </v-icon>
        </template>
        <template>
          <v-row no-gutters>
            <v-col cols="4">
              Retail price
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row class="align-baseline">
          <v-col>
            <span>Value</span>
          </v-col>
          <v-col>
            <v-text-field hint="100.000"></v-text-field>
          </v-col>
        </v-row>
        <v-row class="align-baseline">
          <v-col>
            <span>Currency</span>
          </v-col>
          <v-col>
            <v-select
              v-model="select"
              :hint="`${select.state}, ${select.abbr}`"
              :items="items"
              item-text="state"
              item-value="abbr"
              label="Select"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-checkbox label="On sale?" color="red" hide-details></v-checkbox>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:actions>
          <v-icon color="blue">
            mdi-chevron-down
          </v-icon>
        </template>
        <template>
          <v-row no-gutters>
            <v-col cols="4">
              Unit of measurement
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row class="align-baseline">
          <v-col>
            <span>Input</span>
          </v-col>
          <v-col>
            <v-text-field hint="Ex: piece, pair,.."></v-text-field>
          </v-col>
        </v-row>
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
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:actions>
          <v-icon color="blue">
            mdi-chevron-down
          </v-icon>
        </template>
        <template>
          <v-row no-gutters>
            <v-col cols="4">
              Description
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row class="align-baseline">
          <v-col>
            <span>Input</span>
          </v-col>
          <v-col>
            <v-text-field hint="Ex: This is so beautiful"></v-text-field>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header disable-icon-rotate>
        <template v-slot:actions>
          <v-icon color="blue">
            mdi-chevron-down
          </v-icon>
        </template>
        <template>
          <v-row no-gutters>
            <v-col cols="4">
              Image
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  data: () => ({
    date: null,
    trip: {
      name: "",
      location: null,
      start: null,
      end: null,
    },
    select: { state: "VND", abbr: "đ" },
    items: [
      { state: "USD", abbr: "$" },
      { state: "EUR", abbr: "€" },
      { state: "VND", abbr: "đ" },
    ],
  }),
};
</script>
