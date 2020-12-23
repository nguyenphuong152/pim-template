<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:actions>
          <v-icon color="blue">
            mdi-chevron-down
          </v-icon>
          <v-icon color="red">
            mdi-delete-outline
          </v-icon>
        </template>
        <template>
          <v-row no-gutters>
            <v-col cols="4">
              Text
            </v-col>
            <v-col cols="8" class="text--secondary"> </v-col>
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
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4">
            Date
          </v-col>
          <v-col cols="8" class="text--secondary">
            <v-fade-transition leave-absolute>
              <span v-if="open">When do you want to travel?</span>
              <v-row v-else no-gutters style="width: 100%">
                <v-col cols="6">
                  Start date: {{ trip.start || "Not set" }}
                </v-col>
                <v-col cols="6"> End date: {{ trip.end || "Not set" }} </v-col>
              </v-row>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row justify="space-around" no-gutters>
          <v-col cols="3">
            <v-menu
              ref="startMenu"
              :close-on-content-click="false"
              :return-value.sync="trip.start"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="trip.start"
                  label="Start date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.startMenu.isActive = false"
                >
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.startMenu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="3">
            <v-menu
              ref="endMenu"
              :close-on-content-click="false"
              :return-value.sync="trip.end"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="trip.end"
                  label="End date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.endMenu.isActive = false"
                >
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.endMenu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
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
  }),
};
</script>
