<template>
  <dashboard-card title="Instances">
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-if="error">
      Something bad happened
    </div>
    <div v-if="instances">
      <b-row
        class="mt-3"
      >
        <b-col sm="6">
          <dl>
            <dt>name</dt>
            <dd
              v-for="instanceName in instances"
              :key="instanceName.index"
            >
              {{ instanceName.name }}
            </dd>
          </dl>
        </b-col>
        <b-col sm="6">
          <dl>
            <dt>status</dt>
            <dd
              v-for="instanceStatus in instances"
              :key="instanceStatus.index"
            >
              {{ instanceStatus.status }}
            </dd>
          </dl>
        </b-col>
      </b-row>
    </div>
  </dashboard-card>
</template>

<script>
import { actionTypes } from '@/store/modules/instances';
import { mapState } from 'vuex';
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardInstances',
  components: {
    DashboardCard
  },
  props: {
    instancesApi: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.instances.isLoading,
      instances: state => state.instances.data,
      error: state => state.instances.error
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getInstances, { apiUrl: this.instancesApi });
  }
};
</script>

<style scoped>

</style>
