<template>
  <div>
    <b-modal
      id="modal-evacuate-nodes"
      ref="modal"
      title="evacuate nodes"
      ok-title="Save"
      cancel-title="Cancel"
      @ok="handleOk"
    >
      <b-form
        ref="form"
        @submit.stop.prevent="evacuateNodes"
      >
        <b-row>
          <b-col sm="6">
            <b-form-group
              label="iallocator:"
              label-for="iallocator-input"
            >
              <b-form-input
                id="iallocator-input"
                v-model="form.iallocator"
              />
            </b-form-group>
            <b-form-group
              label="ignore_soft_errors:"
              label-for="ignore_soft_errors-input"
            >
              <b-form-input
                id="ignore_soft_errors-input"
                v-model="form.ignore_soft_errors"
              />
            </b-form-group>
            <b-form-group
              label="mode:"
              label-for="mode-input"
            >
              <b-form-input
                id="mode-input"
                v-model="form.mode"
              />
            </b-form-group>
            <b-form-group
              label="node_uuid:"
              label-for="node_uuid-input"
            >
              <b-form-input
                id="node_uuid-input"
                v-model="form.node_uuid"
              />
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group
              label="remote_node:"
              label-for="remote_node-input"
            >
              <b-form-input
                id="remote_node-input"
                v-model="form.remote_node"
              />
            </b-form-group>
            <b-form-group
              label="remote_node_uuid:"
              label-for="remote_node_uuid-input"
            >
              <b-form-input
                id="remote_node_uuid-input"
                v-model="form.remote_node_uuid"
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
  name: 'NodesEvacuateModal',
  data() {
    return {
      form: {
        node_name: 'cl43gnt1',
        node: 'cl43gnt1',
        iallocator: '',
        ignore_soft_errors: '',
        mode: '',
        node_uuid: '',
        remote_node: '',
        remote_node_uuid: ''
      }
    };
  },
  methods: {
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.evacuateNodes();
    },
    evacuateNodes() {
      const dataInstances = this.form;
      // eslint-disable-next-line
          console.log(JSON.stringify(dataInstances));

      axios.post('http://10.110.3.230:8008/v1/nodes/cl43gnt1/evacuate', dataInstances)
        .then(response => {
          // eslint-disable-next-line
              console.log(response.data);
          this.$bvModal.hide('modal-modify-instances');
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
