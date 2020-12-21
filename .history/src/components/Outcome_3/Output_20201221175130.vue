<template>
  <v-card>
    <v-card-title>
      Your products
    </v-card-title>
    <v-data-table :headers="headers" :items="desserts">
      <template v-slot:item.image>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="100"
          max-width="100"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </template>
      <template v-slot:item.retail>
        <span>{{ Intl.NumberFormat().format(item.retail) }}</span>
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
          text: "Image",
          value: "image",
        },
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Code", value: "code" },
        { text: "Category", value: "hierachy" },
        { text: "Retail price", value: "retail" },
        { text: "Base price", value: "base" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [
        {
          image: "",
          name: "Frozen Yogurt",
          code: "PM15900",
          hierachy: "Shoes/Sandal",
          retail: "150000",
          base: "120000",
        },
        {
          image: "",
          name: "Ice cream sandwich",
          code: "IC19000",
          hierachy: "Tops/Hoodies",
          retail: "150000",
          base: "120000",
        },
        {
          image: "",
          name: "Eclair",
          code: "E50009",
          hierachy: "Pants/Jeans",
          retail: "150000",
          base: "120000",
        },
        {
          image: "",
          name: "Cupcake",
          code: "CC15889",
          hierachy: "Mini Skirts",
          retail: "150000",
          base: "120000",
        },
        {
          image: "",
          name: "Gingerbread",
          code: "GB100459",
          hierachy: "Tops/Hoodies",
          retail: "150000",
          base: "120000",
        },
        {
          image: "",
          name: "Jelly bean",
          code: "J111159",
          hierachy: "Tops/Hoodies",
          retail: "150000",
          base: "120000",
        },
        {
          image: "",
          name: "Lollipop",
          code: "L151419",
          hierachy: "Tops/Hoodies",
          retail: "150000",
          base: "120000",
        },
        {
          image: "",
          name: "Honeycomb",
          code: "HC74159",
          hierachy: "Tops/Hoodies",
          retail: "150000",
          base: "120000",
        },
        {
          image: "",
          name: "Donut",
          code: "DD17779",
          hierachy: "Tops/Hoodies",
          retail: "150000",
          base: "120000",
        },
        {
          image: "",
          name: "KitKat",
          code: "KK20009",
          hierachy: "Tops/Hoodies",
          retail: "150000",
          base: "120000",
        },
      ],
    };
  },
  methods: {},
};
</script>
