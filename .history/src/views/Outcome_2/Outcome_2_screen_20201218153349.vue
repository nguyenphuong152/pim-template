<template>
  <div>
    <v-row>
      <v-col height="100%"
        ><Search />
        <br />
        <RecentTemplate />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Search from "../../components/Outcome_2/SearchProduct";
import RecentTemplate from "../../components/Outcome_2/RecentTemplate";
export default {
  components: {
    Search,
    RecentTemplate,
  },
};
</script>

<style></style>
