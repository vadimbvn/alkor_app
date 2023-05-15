<template>
  <b-container fluid="xl">
    <page-title />
    <page-section>
      <b-button @click="onSumbit" />
    </page-section>
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';
import axios from 'axios';

export default {
  name: 'PeerStatus',
  components: {
    PageTitle,
    PageSection
  },
  methods: {
    onSumbit() {
      axios.post('http://10.110.3.230:8008/v1/cl43gnt5/add');
    }
  }
};
</script>

<style scoped>

</style>
