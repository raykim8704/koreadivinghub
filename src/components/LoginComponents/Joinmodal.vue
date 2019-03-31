<template>
<v-layout row justify-center>
    <v-btn @click="dialog = true" depressed block color="blue" class="white--text v-btn--block">가입하기</v-btn>
  
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
        data (){
            return {
                 dialog : false
            }
        }
    }

</script>