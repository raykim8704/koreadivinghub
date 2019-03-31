

<template>
<nav>
    <v-toolbar flat app class="blue lighen-1">
        <v-toolbar-side-icon class="hidden-sm-and-up white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="text-uppercase white--text">
            <span class="font-weight-light">Korea</span>
            <span > DivingHub</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title class="hidden-xs-only">      
            <v-btn flat color="blue darken-4">
            <span> Sign Out </span>
            <v-icon right>exit_to_app</v-icon>
        </v-btn>

        </v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="">
        <v-container>
            <v-layout row wrap>
                <v-flex xs11  class="text-xs-center">
                    <span class="font-weight-light blue--text">Korea</span>
                    <span class="font-weight-bold blue--text"> DivingHub</span></v-flex>
                <v-flex xs1><v-icon class="blue--text" @click="drawer = !drawer">close</v-icon></v-flex>
            </v-layout>
        </v-container>
        <v-container v-if="login" >
            <v-layout row wrap>
                <v-flex xs12>

                    <Loginmodal/>
                </v-flex>
                <v-flex xs12>
                    <Joinmodal/>
                </v-flex>
            </v-layout>
        </v-container>
        <v-list>
            <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-tile-action>
                    <v-icon>
                        {{link.icon}}
                    </v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        {{link.text}}
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</nav>
    
</template>

<script>

import Loginmodal from './LoginComponents/Loginmodal';
import Joinmodal from './/LoginComponents/Joinmodal';

export default{
     components: {
     Loginmodal,
     Joinmodal
  },
    data() {
        return {
          
  
            login : true,
            drawer : false,
            links : [
                { icon : 'dashboard',text:'Home',route:'/'},
                { icon : 'folder',text:'Magazine',route:'/magazine'},
                { icon : 'person',text:'Team',route:'/team'}
            ]
            }
    }

}
</script>