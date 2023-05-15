<template>
  <b-container fluid="xl">
    <page-title />
    <div>
      <page-section class="mb-1">
        <b-card-group deck>
          <dashboard-groups :groups-api="groupsApi" />
          <dashboard-nodes :nodes-api="nodesApi" />
          <dashboard-instances :instances-api="instancesApi" />
        </b-card-group>
        <b-card-group deck>
          <dashboard-gluster />
          <dashboard-jobs
            class="scroll"
            :jobs-api="jobsApi"
          />
          <dashboard-networks />
        </b-card-group>
      </page-section>
      <page-section class="mb-1">
        <b-card-group deck>
          <dashboard-cpu />
        </b-card-group>
      </page-section>
      <page-section class="mb-1">
        <b-card-group deck>
          <dashboard-memory />
        </b-card-group>
      </page-section>
      <page-section class="mb-1">
        <b-card-group deck>
          <dashboard-storage />
        </b-card-group>
      </page-section>
    </div>
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';
import DashboardGroups from '@/views/Dashboard/DashboardGroups.vue';
import DashboardNodes from '@/views/Dashboard/DashboardNodes.vue';
import DashboardInstances from '@/views/Dashboard/DashboardInstances.vue';
import DashboardGluster from '@/views/Dashboard/DashboardGluster.vue';
import DashboardJobs from '@/views/Dashboard/DashboardJobs.vue';
import DashboardNetworks from '@/views/Dashboard/DashboardNetworks.vue';
import DashboardCpu from '@/views/Dashboard/DashboardCpu.vue';
import DashboardMemory from '@/views/Dashboard/DashboardMemory.vue';
import DashboardStorage from '@/views/Dashboard/DashboardStorage.vue';

export default {
  name: 'DashboardApp',
  components: {
    PageTitle,
    PageSection,
    DashboardGroups,
    DashboardNodes,
    DashboardInstances,
    DashboardGluster,
    DashboardJobs,
    DashboardNetworks,
    DashboardCpu,
    DashboardMemory,
    DashboardStorage
  },
  data() {
    return {
      instancesApi: '/instance',
      nodesApi: '/nodes',
      groupsApi: '/groups',
      jobsApi: '/jobs'
    };
  }
};
</script>

<style lang="scss" scoped>
.scroll {
  max-height: 266px;
  overflow-y: auto;
}
</style>
