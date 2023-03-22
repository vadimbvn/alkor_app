<template>
  <b-container fluid="xl">
    <page-title />
    <page-section />
    <nodes-table />
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';
import NodesTable from '@/views/Ganeti/Nodes/NodesTable.vue';

export default {
  name: 'NodesApp',
  components: {
    PageTitle,
    PageSection,
    NodesTable
  }
};
</script>

<style scoped>

</style>
