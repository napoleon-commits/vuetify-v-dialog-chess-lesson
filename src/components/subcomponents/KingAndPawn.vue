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
                    The magic position
                </span>
            </v-btn>
        </template>
        <v-list>
            <v-list-item>
                <v-list-item-title class="text-wrap">
                    <CustomDialog />
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-dialog>
</template>

<script>
import CustomDialog from '@/components/subcomponents/CustomDialog';

export default {
    name: 'KingAndPawn',
    components: {
        CustomDialog,
    },
}
</script>

<style>

</style>