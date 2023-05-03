<template>
  <b-container fluid="xl">
    <page-title />
    <page-section>
      <groups-buttons-panel />
      <groups-table :api-url="apiUrl" />
      <groups-add-modal />
    </page-section>
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';
import GroupsTable from '@/views/Ganeti/Groups/GroupsTable.vue';
import GroupsButtonsPanel from '@/views/Ganeti/Groups/GroupsButtonsPanel.vue';
import GroupsAddModal from '@/views/Ganeti/Groups/GroupsAddModal.vue';

export default {
  name: 'GroupsApp',
  components: {
    PageTitle,
    PageSection,
    GroupsTable,
    GroupsButtonsPanel,
    GroupsAddModal
  },
  data() {
    return {
      apiUrl: '/groups'
    };
  }
};
</script>

<style scoped>

</style>
