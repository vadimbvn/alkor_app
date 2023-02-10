<template>
  <dashboard-card :title="('Instances')">
    <b-row
      class="mt-3"
    >
      <b-col sm="6">
        <dl>
          <dt>{{ instancesId }}</dt>
          <dd>{{ id }}</dd>
        </dl>
      </b-col>
      <b-col sm="6">
        <dl>
          <dt>{{ instancesUri }}</dt>
          <dd>{{ uri }}</dd>
        </dl>
      </b-col>
    </b-row>
  </dashboard-card>
</template>

<script>
// import axios from 'axios';
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardInstances',
  components: {
    DashboardCard
  },
  data() {
    return {
      instancesId: 'id',
      instancesUri: 'uri',
      id: 'antix-21-template',
      uri: '/2/instances/antix-21-template',
      instances: [],
      errors: []
    };
  }
  // created() {
  //   axios.get('http://user:xxxyz@clustergnt43.zvz.lan:5080/2/instances')
  //     .then(responce => {
  //       this.instances = responce.data;
  //     })
  //     .catch(e => {
  //       this.errors.push(e);
  //     });
  // }
};
</script>

<style scoped>

</style>
