<template>
  <v-card flat width="165">
    <v-col>
      <span class="grey--text">Choose one to add</span>
      <v-col cols="2" v-for="(item, index) in items" :key="index" class="py-2">
        <v-btn
          color="white"
          class="text-none font-weight-medium "
          style="width:120px;"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.name }}
        </v-btn>
      </v-col>
      <br />
      <v-btn
        color="blue"
        outlined
        class="text-none font-weight-medium"
        style="width:120px;"
      >
        More...
      </v-btn>
    </v-col>
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
};
</script>
