<template>
  <v-container class="text-start pa-0">
    <v-card flat>
      <v-container>
        <v-row class="align-baseline">
          <v-col>
            <span>Choose your file (.csv or .xlsx)</span>
          </v-col>
          <v-col>
            <v-btn
              color="blue-grey"
              class="ma-2 white--text"
              style="textTransform:none"
            >
              Upload
              <v-icon right dark>
                mdi-cloud-upload
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-container class="text-center">
            <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value="value"
              color="teal"
            >
              {{ value }} %
            </v-progress-circular>
            <br />
            <span><v-icon>mdi-file-document-outline</v-icon>prod.csv</span>
            <br />
            <v-btn style="textTransform:none" color="orange" text>Cancel</v-btn>
          </v-container>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      interval: {},
      value: 0,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  },
};
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
