<template>
    <v-dialog max-width="600px" v-model="dialog">
        <v-btn flat class="success" slot="activator"> 
            Add new project
        </v-btn>
        <v-card>
            <v-card-title>
                <h2>Add new project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field :rules="input_rules" label="Title" v-model="title" prepend-icon="folder"></v-text-field>
                    <v-textarea :rules="input_rules" label="Information" v-model="content" prepend-icon="edit"></v-textarea>
                    <v-menu>
                        <v-text-field :rules="input_rules" slot="activator" label="Due date" prepend-icon="folder" :value="formattedDate"></v-text-field>
                        <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>
                    <v-spacer></v-spacer>
                    <v-btn flat class="mx-0 mt-3 success" @click.prevent="submit" :loading="loading">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import db from '@/fb'
export default {
    data () {
        return {
            title: '',
            content: '',
            loading: false,
            dialog: false,
            due: null,
            input_rules: [
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
        }
    },
    computed: {
        formattedDate() {
            return this.due ? format(this.due, 'Do MMM YYYY') : ''
        }
    },
    methods: {
        submit() {
            if(this.$refs.form.validate()){
                this.loading = true
                const project = {
                    title: this.title,
                    content: this.content,
                    due: format(this.due, 'Do MMM YYYY'),
                    person: 'Adenuga Tunmise',
                    status: 'ongoing'
                }
                db.collection('projects').add(project).then(() => {
                    this.loading = false;
                    this.dialog = false;
                    this.$emit('projectAdded')
                });
            }
        }
    }
}
</script>
