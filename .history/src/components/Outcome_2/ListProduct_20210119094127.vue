<template>
  <v-card>
    <v-card-title class="font-font-weight-bold">
      Your products
    </v-card-title>
    <v-data-table :headers="headers" :items="desserts">
      <template v-slot:item.status="{ item }">
        <v-chip :color="getColor(item.status)" dark>
          {{ item.status }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon medium class="mr-2" @click="editItem(item)" color="grey">
          mdi-pencil-outline
        </v-icon>
        <v-icon medium @click="deleteItem(item)" color="green">
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
        { text: "Product Code", value: "code" },
        { text: "Category", value: "hierachy" },
        { text: "Status", value: "status" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          code: "PM15900",
          hierachy: "Shoes/Sandal",
          status: "PUBLISHED",
        },
        {
          name: "Ice cream sandwich",
          code: "IC19000",
          hierachy: "Tops/Hoodies",
          status: "DRAFT",
        },
        {
          name: "Eclair",
          code: "E50009",
          hierachy: "Pants/Jeans",
          status: "DRAFT",
        },
        {
          name: "Cupcake",
          code: "CC15889",
          hierachy: "Mini Skirts",
          status: "DRAFT",
        },
        {
          name: "Gingerbread",
          code: "GB100459",
          hierachy: "Tops/Hoodies",
          status: "PUBLISHED",
        },
        {
          name: "Jelly bean",
          code: "J111159",
          hierachy: "Tops/Hoodies",
          status: "PUBLISHED",
        },
        {
          name: "Lollipop",
          code: "L151419",
          hierachy: "Tops/Hoodies",
          status: "PUBLISHED",
        },
        {
          name: "Honeycomb",
          code: "HC74159",
          hierachy: "Tops/Hoodies",
          status: "PUBLISHED",
        },
        {
          name: "Donut",
          code: "DD17779",
          hierachy: "Tops/Hoodies",
          status: "DRAFT",
        },
        {
          name: "KitKat",
          code: "KK20009",
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
