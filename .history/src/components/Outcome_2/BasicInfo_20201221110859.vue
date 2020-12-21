<template>
  <v-container class="text-start ma-1 pa-0">
    <v-card flat>
      <v-row class="d-flex align-baseline px-14 pt-4">
        <span class="title pr-1">Basic Information</span>
        <v-spacer></v-spacer>
        <span>Template: Clothing</span>
      </v-row>
      <v-container class="px-12 py-0">
        <v-row class="d-flex align-baseline">
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
          <v-col>
            <v-text-field
              color="blue darken-2"
              label="Import price"
              hint="Miniskirt-02"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              color="blue darken-2"
              label="Currency"
              hint="Ex: Miniskirt"
            ></v-text-field>
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
