<template>
  <b-container fluid="xl">
    <page-title />
    <page-section>
      <jobs-table :api-url="apiUrl" />
    </page-section>
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';
import JobsTable from '@/views/Ganeti/Jobs/JobsTable.vue';

export default {
  name: 'JobsApp',
  components: {
    PageTitle,
    PageSection,
    JobsTable
  },
  data() {
    return {
      apiUrl: '/jobs'
    };
  }
  // created() {
  //   this.getJobs();
  // },
  // methods: {
  //   getJobs() {
  //     axios.get('jobs').then(responce => {
  //       // eslint-disable-next-line
  //        console.log(responce.data);
  //       this.jobs = responce.data;
  //     }).catch(e => {
  //       // eslint-disable-next-line
  //       console.log(e);
  //     });
  //   }
  // }
};
</script>

<style scoped>

</style>
