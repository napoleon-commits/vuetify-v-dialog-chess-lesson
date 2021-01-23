<template>
  <v-container>
    <CustomDialog 
      buttonText="The Magic Position"
    />
  </v-container>
</template>

<script>
  import CustomDialog from '@/components/subcomponents/CustomDialog';

  export default {
    name: 'HelloWorld',
    components: {
      CustomDialog,
    },
}
</script>
