<template>
  <dashboard-card :title="('Networks')">
    <b-row class="mt-3">
      <b-col sm="6">
        <dl>
          <dt>null</dt>
          <dd />
        </dl>
      </b-col>
      <b-col sm="6">
        <dl>
          <dt />
          <dd />
        </dl>
      </b-col>
    </b-row>
  </dashboard-card>
</template>

<script>
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardNetworks',
  components: {
    DashboardCard
  },
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>
