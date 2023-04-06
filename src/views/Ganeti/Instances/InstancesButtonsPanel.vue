<template>
  <div>
    <b-button-group>
      <b-button
        v-b-modal.modal-add-instances
        squared
        variant="primary"
      >
        <icon-add />
        Add
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
import IconAdd from '@carbon/icons-vue/es/add--alt/20';

export default {
  name: 'InstancesButtonsPanel',
  components: {
    IconAdd
  }
};
</script>

<style>

</style>
