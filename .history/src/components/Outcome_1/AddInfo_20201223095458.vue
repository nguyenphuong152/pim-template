<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              Product name
            </v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open" key="0">
                  Enter a name for your product
                </span>
                <span v-else key="1">
                  {{ trip.name }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field
          v-model="trip.name"
          placeholder="Caribbean Cruise"
        ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>
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
            <v-text-field
              placeholder="Input value"
              hint="100.000"
            ></v-text-field>
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
            <v-text-field
              placeholder="Input value"
              hint="100.000"
            ></v-text-field>
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
