<template>
    <v-dialog>
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                v-bind="attrs"
                v-on="on"
                block
                outlined
            >
                <span>
                    {{buttonText}}
                </span>
            </v-btn>
        </template>
        <v-list>
            <v-list-item>
                <v-list-item-title class="text-wrap">
                    <CustomDialogModal />
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-dialog>
</template>

<script>
import CustomDialogModal from '@/components/subcomponents/CustomDialogModal';

export default {
    name: 'CustomDialog',
    props: ['buttonText'],
    components: {
        CustomDialogModal,
    },
}
</script>

<style>
    .v-dialog:not(.v-dialog--fullscreen){
        height: 61.80339887498949%;
    }
    .v-sheet.v-list{
        height: 100%;
    }
</style>