<template>
  <b-container fluid="xl">
    <page-title />
    <page-section />
    <groups-table />
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';
import GroupsTable from '@/views/Ganeti/Groups/GroupsTable.vue';

export default {
  name: 'GroupsApp',
  components: {
    PageTitle,
    PageSection,
    GroupsTable
  }
};
</script>

<style scoped>

</style>
