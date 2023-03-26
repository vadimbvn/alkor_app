<template>
  <b-container fluid="xl">
    <page-title />
    <page-section />
    <instances-control-panel />
    <instances-table />
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';
import InstancesTable from '@/views/Ganeti/Instances/InstancesTable.vue';
import InstancesControlPanel from '@/views/Ganeti/Instances/InstancesControlPanel.vue';

export default {
  name: 'InstancesApp',
  components: {
    PageTitle,
    PageSection,
    InstancesTable,
    InstancesControlPanel

  }
};
</script>

<style scoped>

</style>
