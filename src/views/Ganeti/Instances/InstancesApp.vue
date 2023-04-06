<template>
  <b-container fluid="xl">
    <page-title />
    <page-section>
      <instances-buttons-panel />
      <instances-add-modal />
      <instances-modify-modal />
      <instances-table />
    </page-section>
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';
import InstancesTable from '@/views/Ganeti/Instances/InstancesTable.vue';
import InstancesButtonsPanel from '@/views/Ganeti/Instances/InstancesButtonsPanel.vue';
import InstancesAddModal from '@/views/Ganeti/Instances/InstancesAddModal.vue';
import InstancesModifyModal from '@/views/Ganeti/Instances/InstancesModifyModal.vue';

export default {
  name: 'InstancesApp',
  components: {
    PageTitle,
    PageSection,
    InstancesTable,
    InstancesButtonsPanel,
    InstancesAddModal,
    InstancesModifyModal

  }
};
</script>

<style scoped>

</style>
