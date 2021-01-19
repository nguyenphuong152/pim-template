<template>
  <div>
    <v-row>
      <v-col height="100%"
        ><Search @showAddTemplate="showAddTemplate" />
        <br />
        <SuggestedTemplate @nameTemplate="getNameTemplate" :checkNull="name" />
        <br />
        <SneakerTemplate v-if="name === 'Sneaker'" />
        <SportingTemplate v-if="name === 'Sporting'" />
        <NoodleTemplate v-if="name === 'Noodle'" />
        <DrinkTemplate v-if="name === 'Drink'" />

        <CreateRegion v-if="this.show" />
      </v-col>
      <v-divider color="#ffeaea" vertical></v-divider>
      <v-col cols="3" height="100%" class="hidden-xs-only px-0">
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
import SneakerTemplate from "../../components/Outcome_1/SneakerTemplate";
import SportingTemplate from "../../components/Outcome_1/SportingTemplate";
import NoodleTemplate from "../../components/Outcome_1/NoodleTemplate";
import DrinkTemplate from "../../components/Outcome_1/DrinkTemplate";

export default {
  components: {
    Search,
    YourTemplate,
    CreateRegion,
    SuggestedTemplate,
    SneakerTemplate,
    SportingTemplate,
    NoodleTemplate,
    DrinkTemplate,
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
      this.show = !this.show;
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
