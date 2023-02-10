<template>
  <dashboard-card :title="('Groups')">
    <b-row
      class="mt-3"
    >
      <b-col sm="6">
        <dl>
          <dt>{{ groupName }}</dt>
          <dd>{{ name }}</dd>
        </dl>
      </b-col>
      <b-col sm="6">
        <dl>
          <dt>{{ groupUri }}</dt>
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
  name: 'DashboardGroups',
  components: {
    DashboardCard
  },
  data() {
    return {
      groupName: 'name',
      groupUri: 'uri',
      name: 'default',
      uri: '/2/groups/default',
      errors: []
    };
  }
  // created() {
  //   axios({
  //     method: 'GET',
  //     url: 'http://clustergnt43.zvz.lan:5080',
  //     data: {
  //       login: 'user',
  //       password: 'xxxyz'
  //     }
  //     // eslint-disable-next-line no-console
  //   }).then(data => console.log(data.data.SessionId, data.data.ErrorMessage));
  // }
};
</script>

<style scoped>

</style>
