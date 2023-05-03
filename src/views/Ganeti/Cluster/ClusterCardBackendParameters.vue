<template>
  <div>
    <page-section>
      <b-card>
        <template #header>
          <p class="font-weight-bold m-0 text-center">
            {{ cardName }}
          </p>
        </template>
        <ul class="list-group list-unstyled">
          <li class="mb-3">
            <span class="font-weight-bold">minmem:</span> {{ minmem }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">maxmem:</span> {{ maxmem }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">vcpus:</span> {{ vcpus }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">auto balance:</span> {{ auto_balance }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">always failover:</span> {{ always_failover }}
          </li>
        </ul>
      </b-card>
    </page-section>
  </div>
</template>

<script>
// import axios from 'axios';
import PageSection from '@/components/Global/PageSection.vue';

export default {
  name: 'ClusterCardBackendParameters',
  components: {
    PageSection
  },
  data() {
    return {
      cardName: 'Backend parameters',
      backend: [],
      minmem: '2048',
      maxmem: '2048',
      vcpus: '4',
      auto_balance: 'true',
      always_failover: 'false'
    };
  }
  // created() {
  //   axios.get('http://10.110.3.230:8008/v1/info')
  //     .then(responce => {
  //       this.backend = responce.data.beparams.default;
  //     })
  //     .catch(e => {
  //       this.errors.push(e);
  //     });
  // }
};
</script>

<style scoped>

</style>
