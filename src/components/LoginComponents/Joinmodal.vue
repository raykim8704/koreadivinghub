<template>
<v-layout row justify-center>

   <!--<v-btn @click="dialog = width" v-bind:block = "width"  depressed color="blue" class="white--text">가입하기 </v-btn> !-->
  
    <v-dialog v-model="dialog" max-width="600px">
    <v-card>
        <v-card-title>
            <h2>Join Modal</h2>
        </v-card-title>
    </v-card>

    </v-dialog>
</v-layout>
</template>

<script>
    module.exports= {
        props : {
            open : Boolean ,
        },
        data (){
            return {
                 dialog : this.open
            }
        },
        watch : {
            open : function (value){
                this.dialog = value ? value : !value
            }
        }, 

    }

</script>