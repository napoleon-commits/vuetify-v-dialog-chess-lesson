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
        <div
            :style="`
                padding: 16px;
                height: 100%;
                background-color: ${$vuetify.theme.dark?'rgba(0,0,0,0.87)':'white'}
            `"
        >
            <CustomDialogModal />
        </div>
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
</style>