<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn flat color="grey" @click="sort_by('title')" v-on="on">
              <v-icon left small>
                folder_open
              </v-icon>
              <span class="caption text-lowercase">
                by project name
              </span>
            </v-btn>
          </template>
          <span>sort project by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn flat color="grey" @click="sort_by('person')" v-on="on">
              <v-icon left small>
                person_outline
              </v-icon>
              <span class="caption text-lowercase">
                by person
              </span>
            </v-btn>
          </template>
          <span>sort project by person</span>
        </v-tooltip>
      </v-layout>
      <v-card flat v-for="project in projects" :key="project.id">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
             <div class="caption grey--text">
               Project Title
             </div>
             <div>
               {{project.title}}
             </div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due date</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container> 
  </div>
</template>


<script>
import db from '@/fb'
  export default {
    data() {
      return {
        projects: []
      }
    },
    methods: {
      sort_by(property) {
        this.projects.sort((a,b) => a[property] < b[property] ? -1 : 1) 
      }
    },
    created() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if(change.type === 'added') {
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    }
  }
</script>
<style>
.project.complete {
  border-left: 4px solid #3dc1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
 background:#3dc1c2;
}
.v-chip.ongoing {
 background:orange;
}
.v-chip.overdue {
 background: tomato;
}
</style>
