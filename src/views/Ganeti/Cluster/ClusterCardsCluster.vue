<template>
  <div>
    <page-section>
      <b-card>
        <template #header>
          <p class="font-weight-bold m-0 text-center">
            {{ cardName }}
          </p>
        </template>
        <div>
          <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label="Name:"
            label-for="input-name"
            label-class="font-weight-bold"
          >
            <b-form-input
              v-model="cluster.name"
              type="text"
              id="input-name"
            />
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label="Master:"
            label-for="input-master"
            label-class="font-weight-bold"
          >
            <b-form-input
              v-model="cluster.master"
              id="input-master"
              disabled
            />
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label="Cluster version:"
            label-for="input-software-version"
            label-class="font-weight-bold"
          >
            <b-form-input
              v-model="cluster.software_version"
              id="input-software-version"
              disabled
            />
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label="Protocol version:"
            label-for="input-protocol-version"
            label-class="font-weight-bold"
          >
            <b-form-input
              v-model="cluster.protocol_version"
              id="input-protocol-version"
              disabled
            />
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label="Config version:"
            label-for="input-config-version"
            label-class="font-weight-bold"
          >
            <b-form-input
              v-model="cluster.config_version"
              id="input-config-version"
              disabled
            />
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label="Max running jobs:"
            label-for="input-running-jobs"
            label-class="font-weight-bold"
          >
            <b-form-input
              v-model="cluster.max_running_jobs"
              type="number"
              id="input-running-jobs"
              min="0"
            />
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label="Max tracked jobs:"
            label-for="input-tracked-jobs"
            label-class="font-weight-bold"
          >
            <b-form-input
              v-model="cluster.max_tracked_jobs"
              type="number"
              id="input-tracked-jobs"
              min="0"
            />
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label="MAC prefix:"
            label-for="input-mac"
            label-class="font-weight-bold"
          >
            <b-form-input
              v-model="cluster.mac_prefix"
              type="text"
              id="input-mac"
            />
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label="Master netmask:"
            label-for="input-netmask"
            label-class="font-weight-bold"
          >
            <b-form-input
              v-model="cluster.master_netmask"
              type="number"
              id="input-netmask"
              min="0"
            />
          </b-form-group>
        </div>
        <b-button
          class="mt-3"
          type="submit"
          variant="primary"
        >
          Сохранить
        </b-button>
      </b-card>
    </page-section>
  </div>
</template>

<script>
import axios from 'axios';
import PageSection from '@/components/Global/PageSection.vue';

export default {
  name: 'ClusterCardsCluster',
  components: {
    PageSection
  },
  data() {
    return {
      cardName: 'Cluster',
      cluster: [],
      errors: []
    };
  },
  created() {
    this.getClusters();
  },
  methods: {
    getClusters() {
      axios.get('http://10.110.3.230:8008/v1/info')
        .then(responce => {
          this.cluster = responce.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>

<style scoped>

</style>
