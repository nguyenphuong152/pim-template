<template>
  <div>
    <v-row>
      <v-col height="100%">
        <Title />
        <br />
        <Body @showOutput="showOutput" />
        <br />
        <Output v-if="show" :id="img" class="margin" />
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
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "mx-7";
      }
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
