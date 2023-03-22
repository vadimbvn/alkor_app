<template>
  <b-container fluid="xl">
    <page-title />
    <page-section />
    <instances-table />
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';
import InstancesTable from '@/views/Ganeti/Instances/InstancesTable.vue';

export default {
  name: 'InstancesApp',
  components: {
    PageTitle,
    PageSection,
    InstancesTable

  }
};
</script>

<style scoped>

</style>
