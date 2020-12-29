<template>
  <div>
    <v-row>
      <v-col height="100%"
        ><Search @showAddTemplate="showAddTemplate" />
        <br />
        <SuggestedTemplate @nameTemplate="getNameTemplate" />
        <br />
        <CreateRegion v-if="this.show" />
      </v-col>
      <v-col cols="3" height="100%">
        <YourTemplate :key="getKey" @showAddTemplate="showAddTemplate" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Search from "../../components/Outcome_1/SearchTemplate";
import YourTemplate from "../../components/Outcome_1/YourTemplate";
import CreateRegion from "../../components/Outcome_1/CreateRegion";
import SuggestedTemplate from "../../components/Outcome_1/SuggestedTemplate";

export default {
  components: {
    Search,
    YourTemplate,
    CreateRegion,
    SuggestedTemplate,
  },
  data() {
    return {
      show: false,
      name: "",
    };
  },
  methods: {
    showAddTemplate() {
      this.show = !this.show;
    },
    getNameTemplate(name) {
      this.name = name;
      console.log(name);
    },
  },
  computed: {
    getKey() {
      console.log(this.$store.getters.key);
      return this.$store.getters.key;
    },
  },
};
</script>
