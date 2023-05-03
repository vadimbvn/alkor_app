<template>
  <div>
    <b-modal
      id="modal-shutdown-instances"
      ref="modal"
      title="Shutdown Instances"
      ok-title="Save"
      cancel-title="Cancel"
      @ok="handleOk"
    >
      <b-form
        ref="form"
        @submit.stop.prevent="shutdownInstances"
      >
        <b-row>
          <b-col>
            <b-form-group
              label="Force:"
              label-for="force-input"
            >
              <b-form-input
                id="force-input"
                v-model="form.force"
                type="text"
              />
            </b-form-group>
            <b-form-group
              label="Timeout:"
              label-for="timeout-input"
            >
              <b-form-input
                id="timeout-input"
                v-model="form.timeout"
                type="number"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from '@/api/axios';

export default {
  name: 'InstancesShutdownModal',
  data() {
    return {
      form: {
        instance_name: '',
        force: '',
        timeout: ''
      }
    };
  },
  methods: {
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.shutdownInstances();
    },
    shutdownInstances() {
      const dataInstances = this.form;
      // eslint-disable-next-line
          console.log(JSON.stringify(dataInstances));

      axios.put('instance/name/shutdown', dataInstances)
        .then(response => {
          // eslint-disable-next-line
              console.log(response.data);
          this.$bvModal.hide('modal-shutdown-instances');
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
