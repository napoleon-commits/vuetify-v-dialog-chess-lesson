<template>
    <v-row>
        <v-col id="the-magic-position-left-column">
            <div id="the-magic-position-left-column-text">{{demo[page-1].text}}</div>
            <div id="the-magic-position-left-column-pagination">
                <v-pagination
                    v-model="page"
                    :length="demo.length"
                    :total-visible="totalVisible"
                ></v-pagination>
            </div>
        </v-col>
        <v-col id="the-magic-position-right-column">
            <div id="the-magic-position-right-board">
                Integer porta eros orci, porttitor dignissim tellus semper non. Integer lobortis massa eu convallis imperdiet. Etiam et orci vitae orci viverra porttitor sit amet ac nisl. Aliquam rhoncus vitae arcu id sollicitudin. Sed pharetra iaculis velit eget viverra. Donec euismod, nisi et laoreet pharetra, dui erat sollicitudin massa, viverra dictum nunc turpis eu libero. Duis ut nibh massa. Nullam fermentum felis at nunc mollis gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum nec enim gravida volutpat. Integer vitae convallis mi. Morbi mollis ullamcorper ullamcorper. Donec vel tristique arcu, eu laoreet nunc. Donec efficitur rhoncus luctus. Proin at feugiat velit, vitae hendrerit odio.
            </div>
        </v-col>
    </v-row>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'CustomDialog',
    props: ['demo'],
    data() {
        return {
            page: 1,
            totalVisible: (window.innerWidth < 400) ? 0 : undefined,
        };
    },
    methods: {
        adjustPaginationMargin(){
            if(
                window.innerWidth > 557
                && (
                    $('#the-magic-position-right-column').width() ===
                    $('#the-magic-position-left-column').width()
                )
            ){
                const rightColumn = $('#the-magic-position-right-board');
                const leftColumnText = $('#the-magic-position-left-column-text');
                const leftColumnPagination = $('#the-magic-position-left-column-pagination');
                leftColumnText.height(
                    rightColumn.height()-leftColumnPagination.height()+3
                );
            } else {
                document.getElementById(
                        'the-magic-position-left-column-text'
                ).style.height = 'auto'
            }
            this.totalVisible = (window.innerWidth < 338) ? 0 : undefined;
        }
    },
    mounted() {
        this.$nextTick(function(){
            this.adjustPaginationMargin();
            window.addEventListener('resize', this.adjustPaginationMargin);
        });
    },
    beforeDestroy() { 
        window.removeEventListener('resize', this.adjustPaginationMargin); 
    },
}
</script>

<style>

</style>