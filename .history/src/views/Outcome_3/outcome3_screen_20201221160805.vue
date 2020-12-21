<template>
  <div>
    <v-row>
      <v-col height="100%">
        <Title />
        <br />
        <Body />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Title from "../../components/Outcome_3/Title";
import Body from "../../components/Outcome_3/Body";

export default {
  components: {
    Title,
    Body,
  },
};
</script>

<style></style>
