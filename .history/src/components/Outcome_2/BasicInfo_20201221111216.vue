<template>
  <v-container class="text-start ma-1 pa-0">
    <v-card flat>
      <v-row class="d-flex align-baseline px-14 pt-4">
        <span class="title pr-1">Basic Information</span>
        <v-spacer></v-spacer>
        <span>Template: Clothing</span>
      </v-row>
      <v-container class="px-12 py-0">
        <v-row class="d-flex align-baseline pa-0">
          <v-col>
            <v-text-field
              color="blue darken-2"
              label="Product name"
              hint="Miniskirt-02"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              color="blue darken-2"
              label="Category"
              hint="Ex: Miniskirt"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex align-baseline">
          <v-col cols="8">
            <v-text-field
              color="blue darken-2"
              label="Import price"
              hint="180,000"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-select
              :items="items"
              label="Currency"
              dense
              class="text-start"
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>

<style></style>
