<template>
  <dashboard-card :title="('Nodes')">
    <b-row
      class="mt-3"
    >
      <b-col sm="6">
        <dl>
          <dt>{{ nodeId }}</dt>
          <dd>{{ id0 }}</dd>
          <dd>{{ id1 }}</dd>
          <dd>{{ id2 }}</dd>
          <dd>{{ id3 }}</dd>
          <dd>{{ id4 }}</dd>
          <dd>{{ id5 }}</dd>
        </dl>
      </b-col>
      <b-col sm="6">
        <dl>
          <dt>{{ nodeUri }}</dt>
          <dd>{{ uri0 }}</dd>
          <dd>{{ uri1 }}</dd>
          <dd>{{ uri2 }}</dd>
          <dd>{{ uri3 }}</dd>
          <dd>{{ uri4 }}</dd>
          <dd>{{ uri5 }}</dd>
        </dl>
      </b-col>
    </b-row>
  </dashboard-card>
</template>

<script>
// import axios from 'axios';
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardNodes',
  components: {
    DashboardCard
  },
  data() {
    return {
      nodeId: 'id',
      nodeUri: 'uri',
      id0: 'cl43gnt0',
      id1: 'cl43gnt1',
      id2: 'cl43gnt2',
      id3: 'cl43gnt3',
      id4: 'cl43gnt4',
      id5: 'cl43gnt5',
      uri0: '/2/nodes/cl43gnt0',
      uri1: '/2/nodes/cl43gnt1',
      uri2: '/2/nodes/cl43gnt2',
      uri3: '/2/nodes/cl43gnt3',
      uri4: '/2/nodes/cl43gnt4',
      uri5: '/2/nodes/cl43gnt5',
      nodes: [],
      errors: []
    };
  }
  // created() {
  //   axios.get('http://clustergnt43.zvz.lan:5080/2/nodes')
  //     .then(responce => {
  //       this.nodes = responce.data;
  //     })
  //     .catch(e => {
  //       this.errors.push(e);
  //     });
  // }
};
</script>

<style scoped>

</style>
