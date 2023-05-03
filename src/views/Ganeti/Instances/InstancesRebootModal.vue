<template>
  <div>
    <b-modal
      id="modal-reboot-instances"
      ref="modal"
      title="Reboot Instances"
      ok-title="Save"
      cancel-title="Cancel"
      @ok="handleOk"
    >
      <b-form
        ref="form"
        @submit.stop.prevent="rebootInstances"
      >
        <b-row>
          <b-col>
            <b-form-group
              label="Type:"
              label-for="newname-input"
            >
              <b-form-select
                id="type-input"
                v-model="form.type"
                :options="types"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'InstancesRebootModal',
  data() {
    return {
      form: {
        type: null,
        instance_name: 'test2'
      },
      types: [
        { text: 'Select One', value: null },
        'soft',
        'hard',
        'full']
    };
  },
  methods: {
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.modifyInstances();
    },
    modifyInstances() {
      const dataInstances = this.form;
      // eslint-disable-next-line
          console.log(JSON.stringify(dataInstances));

      axios.post('http://10.110.3.230:8008/v1/instance/test2/reboot', dataInstances)
        .then(response => {
          // eslint-disable-next-line
              console.log(response.data);
          this.$bvModal.hide('modal-reboot-instances');
        })
        .catch(error => {
          // eslint-disable-next-line
              console.log(error);
        });
    }
  }
};
</script>

    <style>

    </style>
