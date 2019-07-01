<template>
  <div class="teams">
    <h1 class="subheading grey--text">Teams</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar"/>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        team: [
          { 
            name: 'Adenuga Tunmise', 
            role: 'frontend developer', 
            avatar: '/assets/img/avatar-1.png'
          },
          { 
            name: 'Paul Daniel', 
            role: 'frontend developer',  
            avatar: '/assets/img/avatar-2.png'
          },
          { 
            name: 'Chibike chibs', 
            role: 'backend developer', 
            avatar: '/assets/img/avatar-3.png'
          },
          { 
            name: 'Aiyemitibo Abiodun', 
            role: 'frontend developer',  
            avatar:'/assets/img/avatar-4.png'
          },
          { 
            name: 'Chinedu Uche', 
            role: 'frontend lead', 
            avatar:'/assets/img/avatar-5.png'
          }
        ]
      }
    }
  }
</script>