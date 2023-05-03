<template>
  <dashboard-card :title="('Jobs')">
    <b-row class="mt-3">
      <b-col sm="6">
        <dl>
          <dt>{{ jobId }}</dt>
          <dd
            v-for="job in jobs"
            :key="job.index"
          >
            {{ job.id }}
          </dd>
        </dl>
      </b-col>
      <b-col sm="6">
        <dl>
          <dt>{{ jobStattus }}</dt>
          <dd
            v-for="job in jobs"
            :key="job.index"
          >
            {{ job.status }}
          </dd>
        </dl>
      </b-col>
    </b-row>
  </dashboard-card>
</template>

<script>
import axios from '@/api/axios';
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardJobs',
  components: {
    DashboardCard
  },
  data() {
    return {
      jobId: 'name',
      jobStattus: 'status',
      jobs: []
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
