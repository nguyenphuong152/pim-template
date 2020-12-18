<template>
  <div>
    <v-row>
      <v-col height="100%"
        ><Search />
        <br />
        <CreateRegion v-if="this.show" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Search from "../../components/Outcome_2/SearchProduct";
import CreateRegion from "../../components/Outcome_1/CreateRegion";
export default {
  components: {
    Search,
    CreateRegion,
  },
};
</script>

<style></style>
