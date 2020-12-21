<template>
  <v-container class="text-start pa-0">
    <v-card flat>
      <v-container>
        <v-row class="align-baseline">
          <v-col>
            <span>Choose your file (.csv or .xlsx)</span>
          </v-col>
          <v-col>
            <v-btn color="blue-grey" class="ma-2 white--text">
              Upload
              <v-icon right dark>
                mdi-cloud-upload
              </v-icon>
            </v-btn>
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
