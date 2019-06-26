<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5"> 
      
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

