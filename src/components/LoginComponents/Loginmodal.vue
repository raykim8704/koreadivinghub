<template>
<v-layout row justify-center>
    <v-btn @click.stop="dialog = !dialog" depressed block outline color="white" class="blue--text v-btn--block">로그인</v-btn>

    <v-dialog v-model="dialog" max-width="600px">
    <v-card>
        <v-card-title>
            <h2>Log in modal</h2>
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