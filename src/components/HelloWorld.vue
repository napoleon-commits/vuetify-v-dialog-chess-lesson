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
        padding: 16px 0;
        height: 100%;
        background-color: ${$vuetify.theme.dark?'rgba(0,0,0,0.87)':'white'}
        `"
      >
        <div :class="`ma-auto ${fontClass}`" style="border: 2px solid red; width: 76.86917696247162vw;">
          <v-row class="ma-0" no-gutters v-for="(rank, i) in 9" :key="rank">
            <v-col v-for="(file, j) in 9" :key="file">
              <div v-if="coordinates[orientation][String(i)+String(j)]" class="text-center">
                <span>
                  {{coordinates[orientation][String(i)+String(j)]}}
                </span>
              </div>
              <div v-else class="text-center" :style="`background-color: ${((i+j-1)%2===0)?'white':'red'};`">
                <div v-if="StartingPositionString[i*8+(j-1)]==='r'">&#9820;</div>
                <div v-else-if="StartingPositionString[i*8+(j-1)]==='n'">&#9822;</div>
                <div v-else-if="StartingPositionString[i*8+(j-1)]==='b'">&#9821;</div>
                <div v-else-if="StartingPositionString[i*8+(j-1)]==='q'">&#9819;</div>
                <div v-else-if="StartingPositionString[i*8+(j-1)]==='k'">&#9818;</div>
                <div v-else-if="StartingPositionString[i*8+(j-1)]==='p'">&#9823;</div>
                <div v-else-if="StartingPositionString[i*8+(j-1)]==='R'">&#9814;</div>
                <div v-else-if="StartingPositionString[i*8+(j-1)]==='N'">&#9816;</div>
                <div v-else-if="StartingPositionString[i*8+(j-1)]==='B'">&#9815;</div>
                <div v-else-if="StartingPositionString[i*8+(j-1)]==='Q'">&#9813;</div>
                <div v-else-if="StartingPositionString[i*8+(j-1)]==='K'">&#9812;</div>
                <div v-else-if="StartingPositionString[i*8+(j-1)]==='P'">&#9817;</div>
                <div v-else>
                  <span :style="`color: ${((i+j-1)%2===0)?'white':'red'};`">.</span>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-dialog>
  </v-container>
</template>

<script>
  import StartingPositionString from '@/static/StartingPositionString';
  export default {
    name: 'HelloWorld',
    data() {
        return {
            coordinates: {
                white: {
                    '00': '8',
                    '10': '7',
                    '20': '6',
                    '30': '5',
                    '40': '4',
                    '50': '3',
                    '60': '2',
                    '70': '1',
                    '80': ' ',
                    '81': 'a',
                    '82': 'b',
                    '83': 'c',
                    '84': 'd',
                    '85': 'e',
                    '86': 'f',
                    '87': 'g',
                    '88': 'h',
                },
                black: {
                    '00': '1',
                    '10': '2',
                    '20': '3',
                    '30': '4',
                    '40': '5',
                    '50': '6',
                    '60': '7',
                    '70': '8',
                    '80': ' ',
                    '81': 'h',
                    '82': 'g',
                    '83': 'f',
                    '84': 'e',
                    '85': 'd',
                    '86': 'c',
                    '87': 'b',
                    '88': 'a',
                },
            },
            orientation: 'white',
            StartingPositionString,
            fontClass: 'text-h3',
        };
    },
    methods: {
      adjustFontClass(){
        if(window.innerHeight < 302){
          this.fontClass = 'text-subtitle-2'
        }
        else if(window.innerHeight < 343){
          this.fontClass = 'text-subtitle-1'
        }
        else if(window.innerHeight < 357){
          this.fontClass = 'text-h6'
        }
        else if(window.innerHeight < 439){
          this.fontClass = 'text-h5'
        }
        else if(window.innerHeight < 537){
          this.fontClass = 'text-h4'
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.adjustFontClass();
      });
      window.addEventListener('resize', this.adjustFontClass);
    }
  }
</script>

<style>
  .v-dialog:not(.v-dialog--fullscreen){
    height: 90%;
  }
</style>