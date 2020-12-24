<template>
  <v-container class="text-start pa-0">
    <v-card flat>
      <v-container class="py-0">
        <v-row class="align-baseline">
          <v-col>
            <span>Choose your file (.csv or .xlsx)</span>
          </v-col>
          <v-col>
            <v-btn
              color="blue-grey"
              class="ma-2 white--text"
              style="textTransform:none"
              @click="start()"
            >
              Upload
              <v-icon right dark>
                mdi-cloud-upload
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-container class="text-center" v-if="show">
            <v-progress-circular
              :rotate="-90"
              :size="200"
              :width="30"
              :value="value"
              color="blue"
            >
              {{ value }} %
            </v-progress-circular>
            <br />
            <span><v-icon>mdi-file-document-outline</v-icon>prod.csv</span>
            <br />
            <v-btn style="textTransform:none" color="red" text @click="reset()"
              >Cancel</v-btn
            >
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
      show: false,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {},
  methods: {
    reset() {
      this.value = 0;
      this.show = false;
    },
    start() {
      this.show = true;
      this.interval = setTimeout(() => {
        if (this.value === 100) {
          return (this.value = 0);
        }
        this.value += 10;
      }, 1);
    },
  },
};
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
