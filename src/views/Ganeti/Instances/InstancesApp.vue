<template>
  <b-container fluid="xl">
    <page-title />
    <page-section>
      <instances-buttons-panel />
      <instances-table :api-url="apiUrl" />
    </page-section>
    <instances-add-modal />
    <instances-modify-modal />
    <instances-rename-modal />
    <instances-shutdown-modal />
    <instances-grow-modal />
    <instances-reboot-modal />
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';
import InstancesTable from '@/views/Ganeti/Instances/InstancesTable.vue';
import InstancesButtonsPanel from '@/views/Ganeti/Instances/InstancesButtonsPanel.vue';
import InstancesAddModal from '@/views/Ganeti/Instances/InstancesAddModal.vue';
import InstancesModifyModal from '@/views/Ganeti/Instances/InstancesModifyModal.vue';
import InstancesRenameModal from '@/views/Ganeti/Instances/InstancesRenameModal.vue';
import InstancesShutdownModal from '@/views/Ganeti/Instances/InstancesShutdownModal.vue';
import InstancesGrowModal from '@/views/Ganeti/Instances/InstancesGrowModal.vue';
import InstancesRebootModal from '@/views/Ganeti/Instances/InstancesRebootModal.vue';

export default {
  name: 'InstancesApp',
  components: {
    PageTitle,
    PageSection,
    InstancesTable,
    InstancesButtonsPanel,
    InstancesAddModal,
    InstancesModifyModal,
    InstancesRenameModal,
    InstancesShutdownModal,
    InstancesGrowModal,
    InstancesRebootModal

  },
  data() {
    return {
      apiUrl: '/instance'
    };
  }
};
</script>

<style scoped>

</style>
