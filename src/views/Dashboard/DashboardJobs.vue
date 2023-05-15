<template>
  <dashboard-card title="Jobs">
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-if="error">
      Something bad happened
    </div>
    <div v-if="jobs">
      <b-row class="mt-3">
        <b-col sm="6">
          <dl>
            <dt>id</dt>
            <dd
              v-for="jobId in jobs"
              :key="jobId.index"
            >
              {{ jobId.id }}
            </dd>
          </dl>
        </b-col>
        <b-col sm="6">
          <dl>
            <dt>status</dt>
            <dd
              v-for="jobStatus in jobs"
              :key="jobStatus.index"
            >
              {{ jobStatus.status }}
            </dd>
          </dl>
        </b-col>
      </b-row>
    </div>
  </dashboard-card>
</template>

<script>
import { actionTypes } from '@/store/modules/jobs';
import { mapState } from 'vuex';
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardJobs',
  components: {
    DashboardCard
  },
  props: {
    jobsApi: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.jobs.isLoading,
      jobs: state => state.jobs.data,
      error: state => state.jobs.error
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getJobs, { apiUrl: this.jobsApi });
  }

};
</script>

<style scoped>

</style>
