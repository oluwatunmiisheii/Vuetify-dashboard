<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-card flat v-for="project in projects" :key="project.title">
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
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div>{{project.status}}</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container> 
  </div>
</template>


<script>
  export default {
    data() {
      return {
        projects: [
          {title: 'Design a new website', person: 'Adenuga Tunmise', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto, maiores numquam minus sunt illum nisi modi omnis, veritatis doloribus velit facere similique magnam praesentium corporis laborum, cum nam consectetur'},
          {title: 'Code up the homepage', person: 'Adenuga Oreoluwa', due: '10th Jan 2019', status: 'completed', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto, maiores numquam minus sunt illum nisi modi omnis, veritatis doloribus velit facere similique magnam praesentium corporis laborum, cum nam consectetur'},
          {title: 'Design Video thumbnails', person: 'Adenuga Tanitoluwa', due: '20th Jan 2019', status: 'completed', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto, maiores numquam minus sunt illum nisi modi omnis, veritatis doloribus velit facere similique magnam praesentium corporis laborum, cum nam consectetur'},
          {title: 'Create a community forum', person: 'Adenuga Yinka', due: '20th Dec 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto, maiores numquam minus sunt illum nisi modi omnis, veritatis doloribus velit facere similique magnam praesentium corporis laborum, cum nam consectetur'},
        ]
      }
    }
  }
</script>
<style>
.project.completed {
  border-left: 4px solid #3dc1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
</style>
