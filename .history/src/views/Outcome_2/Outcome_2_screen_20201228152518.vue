<template>
  <div>
    <v-row>
      <v-col height="100%"
        ><Search />
        <br />
        <RecentTemplate />
        <br />
        <ListProduct class="mx-xs-4" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Search from "../../components/Outcome_2/SearchProduct";
import RecentTemplate from "../../components/Outcome_2/RecentTemplate";
import ListProduct from "../../components/Outcome_2/ListProduct";
export default {
  components: {
    Search,
    RecentTemplate,
    ListProduct,
  },
};
</script>

<style></style>
