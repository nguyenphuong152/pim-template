<template>
  <div>
    <v-row>
      <v-col height="100%">
        <Title />
        <br />
        <Body />
        <br />
        <Output />
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
};
</script>

<style></style>
