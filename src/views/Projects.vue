<template>
  <div class="projects">
    <h1 class="subheading grey--text">My Projects</h1>
    <v-container class="my-5"> 
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <div slot="header">{{project.title}}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">
                {{project.due}}
              </div>
              <div>{{project.content}}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        projects: [
          { 
            title: 'Design a new website', 
            person: 'Adenuga Tunmise', due: '1st Jan 2019', 
            status: 'ongoing', 
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto, maiores numquam minus sunt illum nisi modi omnis, veritatis doloribus velit facere similique magnam praesentium corporis laborum, cum nam consectetur'
          },
          {
            title: 'Design a new website', 
            person: 'Adenuga Tunmise', 
            due: '1st Jan 2019', status: 'ongoing', 
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto, maiores numquam minus sunt illum nisi modi omnis, veritatis doloribus velit facere similique magnam praesentium corporis laborum, cum nam consectetur'
          },
          {
            title: 'Design a new website', 
            person: 'Adenuga Tunmise', 
            due: '1st Jan 2019', 
            status: 'ongoing', 
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto, maiores numquam minus sunt illum nisi modi omnis, veritatis doloribus velit facere similique magnam praesentium corporis laborum, cum nam consectetur'
          },
          {
            title: 'Design a new website', 
            person: 'Adenuga Tunmise', 
            due: '1st Jan 2019', 
            status: 'ongoing', 
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto, maiores numquam minus sunt illum nisi modi omnis, veritatis doloribus velit facere similique magnam praesentium corporis laborum, cum nam consectetur'
          },
          {
            title: 'Code up the homepage', 
            person: 'Paul Daniel', 
            due: '10th Jan 2019', 
            status: 'completed', 
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto, maiores numquam minus sunt illum nisi modi omnis, veritatis doloribus velit facere similique magnam praesentium corporis laborum, cum nam consectetur'
          },
          {
            title: 'Design Video thumbnails', 
            person: 'Chibike chibs', 
            due: '20th Jan 2019', 
            status: 'completed', 
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto, maiores numquam minus sunt illum nisi modi omnis, veritatis doloribus velit facere similique magnam praesentium corporis laborum, cum nam consectetur'
          },
          {
            title: 'Create a community forum', 
            person: 'Aiyemitibo Abiodun', 
            due: '20th Dec 2018', 
            status: 'overdue', 
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto, maiores numquam minus sunt illum nisi modi omnis, veritatis doloribus velit facere similique magnam praesentium corporis laborum, cum nam consectetur'
          },
        ]
      }
    },
    computed: {
      myProjects() {
        return this.projects.filter(project => {
          return project.person === 'Adenuga Tunmise'
        })
      }
    }
  }
</script>

