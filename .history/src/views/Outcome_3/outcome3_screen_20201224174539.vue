<template>
  <div>
    <v-row>
      <v-col height="100%">
        <Title />
        <br />
        <Body @showOutput="showOutput" />
        <br />
        <Output v-if="show" :id="img" />
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
  methods: {
    showOutput() {
      this.show = !this.show;
    },
  },
  created() {
    this.img = Math.floor(Math.random() * 100);
    console.log(this.img);
  },
};
</script>

<style></style>
