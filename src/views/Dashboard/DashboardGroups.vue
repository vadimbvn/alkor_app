<template>
  <dashboard-card title="Groups">
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-if="error">
      Something bad happened
    </div>
    <div v-if="groups">
      <b-row
        class="mt-3"
      >
        <b-col sm="6">
          <dl>
            <dt>name</dt>
            <dd
              v-for="group in groups"
              :key="group.index"
            >
              {{ group.name }}
            </dd>
          </dl>
        </b-col>
        <b-col sm="6">
          <dl />
        </b-col>
      </b-row>
    </div>
  </dashboard-card>
</template>

<script>
import { actionTypes } from '@/store/modules/groups';
import { mapState } from 'vuex';
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardGroups',
  components: {
    DashboardCard
  },
  props: {
    groupsApi: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.groups.isLoading,
      groups: state => state.groups.data,
      error: state => state.groups.error
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getGroups, { apiUrl: this.groupsApi });
  }
};
</script>

<style scoped>

</style>
