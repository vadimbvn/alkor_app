<template>
  <dashboard-card :title="('Nodes')">
    <b-row
      class="mt-3"
    >
      <b-col sm="6">
        <dl>
          <dt>{{ nodeId }}</dt>
          <dd
            v-for="node in nodes"
            :key="node.index"
          >
            {{ node.name }}
          </dd>
        </dl>
      </b-col>
      <b-col sm="6">
        <dl />
      </b-col>
    </b-row>
  </dashboard-card>
</template>

<script>
import axios from 'axios';
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardNodes',
  components: {
    DashboardCard
  },
  data() {
    return {
      nodeId: 'name',
      nodes: [],
      errors: []
    };
  },
  created() {
    axios.get('http://10.110.3.230:8008/v1/nodes')
      .then(responce => {
        this.nodes = responce.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>

</style>
