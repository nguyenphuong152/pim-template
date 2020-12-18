<template>
  <div>
    <v-row>
      <v-col height="100%"
        ><Search @showAddTemplate="showAddTemplate" />
        <br />
        <CreateRegion v-if="this.show" />
      </v-col>
      <v-col cols="3" height="100%">
        <YourTemplate />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Search from "../../components/Outcome_1/SearchTemplate";
import YourTemplate from "../../components/Outcome_1/YourTemplate";
import CreateRegion from "../../components/Outcome_1/CreateRegion";

export default {
  components: {
    Search,
    YourTemplate,
    CreateRegion,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showAddTemplate() {
      this.show = !this.show;
    },
  },
};
</script>
