<template>
  <div>
    <v-row>
      <v-col height="100%">
        <Title />
        <br />
        <Body @showOutput="showOutput" />
        <br />
        <Output v-if="show" :id="img" class="mx-sm-16" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Title from "../../components/Outcome_3/Title";
import Body from "../../components/Outcome_3/Body";
import Output from "../../components/Outcome_3/Output";

export default {
  components: {
    Title,
    Body,
    Output,
  },
  data() {
    return {
      show: false,
      img: "",
    };
  },
  computed: {
    margin() {
      let mar = "mx-0";
      if (this.$vuetify.breakpoint.name === "xs") {
        mar = "mx-16";
      }
      return mar;
    },
  },
  methods: {
    showOutput(imgId) {
      this.show = !this.show;
      this.img = imgId;
    },
  },
};
</script>

<style></style>
