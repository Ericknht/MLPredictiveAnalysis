<template>
  <v-app>
    <v-app-bar
      color="indigo"
      dark fixed app
    >
      <v-toolbar-title>Fabrica de Memes</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-layout>
          <router-view />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    //HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
