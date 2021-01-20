<template>
  <v-container>
    <KingAndPawn />
  </v-container>
</template>

<script>
  import KingAndPawn from '@/components/subcomponents/KingAndPawn';

  export default {
    name: 'HelloWorld',
    components: {
      KingAndPawn,
    },
  }
</script>
