<template>
  <v-app>
    <v-app-bar
      color="indigo"
      dark fixed app
    >
      <v-toolbar-title>Fabrica de memes</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
