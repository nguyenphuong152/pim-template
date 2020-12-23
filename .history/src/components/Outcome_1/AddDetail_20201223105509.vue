<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header disable-icon-rotate>
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
  props: ["component"],
  data: () => ({
    date: null,
  }),
};
</script>
