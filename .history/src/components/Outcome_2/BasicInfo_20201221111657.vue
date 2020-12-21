<template>
  <v-container class="text-start ma-1 pa-0">
    <v-card flat>
      <v-row class="d-flex align-baseline px-14 pt-4">
        <span class="title pr-1">Basic Information</span>
        <v-spacer></v-spacer>
        <span>Template: Clothing</span>
      </v-row>
      <v-container class="px-16 py-0">
        <v-row class="d-flex align-baseline pa-0">
          <v-col>
            <dir width="10">
              <v-text-field
                color="blue darken-2"
                label="Product name"
                hint="Miniskirt-02"
                required
              ></v-text-field>
            </dir>
          </v-col>
          <v-col>
            <v-text-field
              color="blue darken-2"
              label="Category"
              hint="Ex: Miniskirt"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex align-baseline">
          <v-col cols="10">
            <v-text-field
              color="blue darken-2"
              label="Import price"
              hint="180,000"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-select :items="items" label="Currency"></v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ["VND", "USD", "EUR"],
  }),
};
</script>

<style></style>
