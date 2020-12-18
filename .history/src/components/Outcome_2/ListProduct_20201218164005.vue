<template>
  <v-card>
    <v-card-title>
      Your products
    </v-card-title>
    <v-data-table :headers="headers" :items="desserts">
      <template v-slot:item.status="{ item }">
        <v-chip :color="getColor(item.status)" dark>
          {{ item.status }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)" size="20">
          mdi-pencil-outline
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-cloud-upload-outline
        </v-icon>
      </template>
    </v-data-table>
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
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          code: 15900,
          hierachy: "Shoes/Sandal",
          status: "PUBLISHED",
        },
        {
          name: "Ice cream sandwich",
          code: 19000,
          hierachy: "Tops/Hoodies",
          status: "DRAFT",
        },
        {
          name: "Eclair",
          code: 50009,
          hierachy: "Pants/Jeans",
          status: "DRAFT",
        },
        {
          name: "Cupcake",
          code: 15889,
          hierachy: "Mini Skirts",
          status: "DRAFT",
        },
        {
          name: "Gingerbread",
          code: 100459,
          hierachy: "Tops/Hoodies",
          status: "PUBLISHED",
        },
        {
          name: "Jelly bean",
          code: 111159,
          hierachy: "Tops/Hoodies",
          status: "PUBLISHED",
        },
        {
          name: "Lollipop",
          code: 151419,
          hierachy: "Tops/Hoodies",
          status: "PUBLISHED",
        },
        {
          name: "Honeycomb",
          code: 74159,
          hierachy: "Tops/Hoodies",
          status: "PUBLISHED",
        },
        {
          name: "Donut",
          code: 17779,
          hierachy: "Tops/Hoodies",
          status: "DRAFT",
        },
        {
          name: "KitKat",
          code: 20009,
          hierachy: "Tops/Hoodies",
          status: "DRAFT",
        },
      ],
    };
  },
  methods: {
    getColor(status) {
      if (status === "DRAFT") return "grey";
      else return "green";
    },
  },
};
</script>
