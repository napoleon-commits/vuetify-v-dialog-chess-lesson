<template>
  <v-container>
    <v-dialog>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          block
          outlined
        >
          <span>
            The magic position
          </span>
        </v-btn>
      </template>
      <div
        :style="`
        padding: 16px;
        height: 100%;
        background-color: ${$vuetify.theme.dark?'rgba(0,0,0,0.87)':'white'}
        `"
      >

      </div>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
  }
</script>

<style>
  .v-dialog:not(.v-dialog--fullscreen){
    height: 90%;
  }
</style>