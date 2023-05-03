<template>
  <dashboard-card :title="('Instances')">
    <b-row
      class="mt-3"
    >
      <b-col sm="6">
        <dl>
          <dt>{{ instancesName }}</dt>
          <dd
            v-for="instname in instances"
            :key="instname.index"
          >
            {{ instname.name }}
          </dd>
        </dl>
      </b-col>
      <b-col sm="6">
        <dl>
          <dt>{{ instancesStatus }}</dt>
          <dd
            v-for="inststatus in instances"
            :key="inststatus.index"
          >
            {{ inststatus.status }}
          </dd>
        </dl>
      </b-col>
    </b-row>
  </dashboard-card>
</template>

<script>
import axios from 'axios';
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardInstances',
  components: {
    DashboardCard
  },
  data() {
    return {
      instancesName: 'name',
      instancesStatus: 'status',
      instances: [],
      errors: []
    };
  },
  created() {
    axios.get('http://10.110.3.230:8008/v1/instance')
      .then(responce => {
        this.instances = responce.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>

</style>
