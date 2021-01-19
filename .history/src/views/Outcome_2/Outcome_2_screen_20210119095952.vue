<template>
  <div>
    <v-row>
      <v-col height="100%"
        ><Search />
        <RecentTemplate />
        <ListProduct
          :class="{
            'mx-6': $vuetify.breakpoint.smAndDown,
            'ma-0': $vuetify.breakpoint.mdAndUp,
          }"
        />
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
