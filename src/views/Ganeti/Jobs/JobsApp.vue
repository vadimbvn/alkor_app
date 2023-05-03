<template>
  <b-container fluid="xl">
    <page-title />
    <page-section />
    <div>
      <li
        v-for="job in jobs"
        :key="job.index"
      >
        id:  {{ job.id }} - status: {{ job.status }} - medthods: {{ job.summary }}
      </li>
    </div>
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';
import axios from '@/api/axios';

export default {
  name: 'JobsApp',
  components: {
    PageTitle,
    PageSection
  },
  data() {
    return {
      jobs: [],
      e: []
    };
  },
  created() {
    this.getJobs();
  },
  methods: {
    getJobs() {
      axios.get('jobs').then(responce => {
        // eslint-disable-next-line
         console.log(responce.data);
        this.jobs = responce.data;
      }).catch(e => {
        // eslint-disable-next-line
        console.log(e);
      });
    }
  }
};
</script>

<style scoped>

</style>
