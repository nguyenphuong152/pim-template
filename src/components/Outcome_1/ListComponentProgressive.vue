<template>
  <v-card flat width="100%" class="mx-4 ">
    <v-row>
      <span class="grey--text pl-1">Choose one to add</span>
      <v-row class="justify-space-around">
        <v-col
          cols="4"
          v-for="(item, index) in items"
          :key="index"
          class="py-2"
        >
          <v-btn
            color="white"
            class="text-none font-weight-medium "
            style="width:120px;"
            @click="addComponent(item)"
          >
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.name }}
          </v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Text",
          icon: "mdi-format-text",
        },
        {
          name: "Image",
          icon: "mdi-image-area",
        },
        {
          name: "Video",
          icon: "mdi-video",
        },
        {
          name: "Color",
          icon: "mdi-palette",
        },
        {
          name: "Date",
          icon: "mdi-calendar-range",
        },
        {
          name: "Select",
          icon: "mdi-arrow-top-left-thick",
        },
      ],
    };
  },
  methods: {
    addComponent(item) {
      this.$store.dispatch("addComponentToList", { component: item });
    },
  },
};
</script>
