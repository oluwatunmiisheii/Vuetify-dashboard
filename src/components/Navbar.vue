<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
            <v-toolbal-title class="text-uppercase grey--text">
                <span class="font-weight-light">todo</span>
                <span>List</span>
            </v-toolbal-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey">
                <span>sign out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app class="primary">
           <v-list>
               <v-list-tile v-for="link in links" :key="link.icon" router :to="link.route">
                   <v-list-tile-action>
                      <v-icon class="white--text">{{link.icon}}</v-icon> 
                   </v-list-tile-action>
                   <v-list-tile-content>
                       <v-list-tile-title class="white--text"> 
                           {{link.text}}
                       </v-list-tile-title>
                   </v-list-tile-content>
               </v-list-tile>
           </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                {icon:'dashboard', text: 'Dashbord', route: '/'},
                {icon:'folder', text: 'My Projects', route: '/projects'},
                {icon:'person', text: 'Team', route: '/teams'}
            ]
        }
    }
}
</script>
