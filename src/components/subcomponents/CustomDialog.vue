<template>
    <v-row>
        <v-col>
            <div>{{demo[page-1].text}}</div>
            <div style="position: absolute; bottom: -3px; margin-left: -12px;">
                <v-pagination
                    v-model="page"
                    :length="demo.length"
                ></v-pagination>
            </div>
        </v-col>
        <v-col>
            Integer porta eros orci, porttitor dignissim tellus semper non. Integer lobortis massa eu convallis imperdiet. Etiam et orci vitae orci viverra porttitor sit amet ac nisl. Aliquam rhoncus vitae arcu id sollicitudin. Sed pharetra iaculis velit eget viverra. Donec euismod, nisi et laoreet pharetra, dui erat sollicitudin massa, viverra dictum nunc turpis eu libero. Duis ut nibh massa. Nullam fermentum felis at nunc mollis gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum nec enim gravida volutpat. Integer vitae convallis mi. Morbi mollis ullamcorper ullamcorper. Donec vel tristique arcu, eu laoreet nunc. Donec efficitur rhoncus luctus. Proin at feugiat velit, vitae hendrerit odio.
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'CustomDialog',
    props: ['demo'],
    data() {
        return {
            page: 1,
        };
    },
}
</script>

<style>

</style>