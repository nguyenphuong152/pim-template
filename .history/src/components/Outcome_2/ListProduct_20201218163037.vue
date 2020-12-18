<template>
  <v-card width="800">
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
          code: 15900,
          hierachy: "Shoes/Sandal",
          status: 24,
        },
        {
          name: "Ice cream sandwich",
          code: 19000,
          hierachy: "Tops/Hoodies",
          status: 24,
        },
        {
          name: "Eclair",
          code: 50009,
          hierachy: "Pants/Jeans",
          status: 24,
        },
        {
          name: "Cupcake",
          code: 15889,
          hierachy: "Mini Skirts",
          status: 24,
        },
        {
          name: "Gingerbread",
          code: 100459,
          hierachy: "Tops/Hoodies",
          status: 24,
        },
        {
          name: "Jelly bean",
          code: 111159,
          hierachy: "Tops/Hoodies",
          status: 24,
        },
        {
          name: "Lollipop",
          code: 151419,
          hierachy: "Tops/Hoodies",
          status: 24,
        },
        {
          name: "Honeycomb",
          code: 74159,
          hierachy: "Tops/Hoodies",
          status: 24,
        },
        {
          name: "Donut",
          code: 17779,
          hierachy: "Tops/Hoodies",
          status: 24,
        },
        {
          name: "KitKat",
          code: 20009,
          hierachy: "Tops/Hoodies",
          status: 24,
        },
      ],
    };
  },
};
</script>
