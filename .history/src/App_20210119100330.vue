<template>
  <v-app v-bind:style="{ background: activeColor }">
    <v-card height="80" flat class="hidden-md-and-up align-baseline">
      <v-row style="height:0px">
        <v-col class="px-0" cols="3">
          <span class="logo text-start">
            E<span class="blue--text">i</span>m</span
          >
        </v-col>
        <v-col>
          <div class="text-end">
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :to="item.path"
                  color="blue"
                >
                  <v-list-item-title class="text-start">{{
                    item.title
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col cols="2" class="pa-0 hidden-xs-only ma-0">
        <v-navigation-drawer permanent width="220" class="hidden-xs-only">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="logo">
                E<span class="blue--text">i</span>m
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav class="text-start pl-4">
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.path"
              color="#FF4848"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="template-title font-weight-bold ">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col class="pa-0 ma-0">
        <router-view />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  watch: {
    $route(to) {
      document.title = `${to.meta.title}`;
    },
  },
  data() {
    return {
      clicked: false,
      activeColor: "#FAFAFA",
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard-outline", path: "" },
        {
          title: "Template",
          icon: "mdi-database-plus-outline",
          path: "/template",
        },
        { title: "Product", icon: "mdi-diamond-stone", path: "/product" },
        {
          title: "Import",
          icon: "mdi-database-import-outline",
          path: "/import",
        },

        { title: "Setting", icon: "mdi-cog-outline", path: "" },
        { title: "Help", icon: "mdi-map-marker-question-outline", path: "" },
      ],
      right: null,
    };
  },
};
</script>
