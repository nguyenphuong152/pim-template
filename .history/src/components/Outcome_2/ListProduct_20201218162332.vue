<template>
  <v-card>
    <v-card-title>
      Your products
    </v-card-title>
    <v-data-table :headers="headers" :items="desserts"></v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Code", value: "code" },
        { text: "Hierachy", value: "hierachy" },
        { text: "Status", value: "status" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          code: 159,
          hierachy: 6.0,
          status: 24,
        },
        {
          name: "Ice cream sandwich",
          code: 159,
          hierachy: 6.0,
          status: 24,
        },
        {
          name: "Eclair",
          code: 159,
          hierachy: 6.0,
          status: 24,
        },
        {
          name: "Cupcake",
          code: 159,
          hierachy: 6.0,
          status: 24,
        },
        {
          name: "Gingerbread",
          code: 159,
          hierachy: 6.0,
          status: 24,
        },
        {
          name: "Jelly bean",
          code: 159,
          hierachy: 6.0,
          status: 24,
        },
        {
          name: "Lollipop",
          code: 159,
          hierachy: 6.0,
          status: 24,
        },
        {
          name: "Honeycomb",
          code: 159,
          hierachy: 6.0,
          status: 24,
        },
        {
          name: "Donut",
          code: 159,
          hierachy: 6.0,
          status: 24,
        },
        {
          name: "KitKat",
          code: 159,
          hierachy: 6.0,
          status: 24,
        },
      ],
    };
  },
};
</script>
