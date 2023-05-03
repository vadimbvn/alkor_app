<template>
  <b-container fluid="xl">
    <page-title />
    <page-section>
      <nodes-buttons-panel />
      <nodes-table :api-url="apiUrl" />
    </page-section>
    <nodes-add-modal />
    <nodes-modify-modal />
    <nodes-evacuate-modal />
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';
import NodesTable from '@/views/Ganeti/Nodes/NodesTable.vue';
import NodesButtonsPanel from '@/views/Ganeti/Nodes/NodesButtonsPanel.vue';
import NodesAddModal from '@/views/Ganeti/Nodes/NodesAddModal.vue';
import NodesModifyModal from '@/views/Ganeti/Nodes/NodesModifyModal.vue';
import NodesEvacuateModal from '@/views/Ganeti/Nodes/NodesEvacuateModal.vue';

export default {
  name: 'NodesApp',
  components: {
    PageTitle,
    PageSection,
    NodesTable,
    NodesButtonsPanel,
    NodesAddModal,
    NodesModifyModal,
    NodesEvacuateModal
  },
  data() {
    return {
      apiUrl: '/nodes'
    };
  }
};
</script>

<style scoped>

</style>
