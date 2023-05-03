<template>
  <div>
    <b-modal
      id="modal-modify-nodes"
      ref="modal"
      title="Modify nodes"
      ok-title="Save"
      cancel-title="Cancel"
      @ok="handleOk"
    >
      <b-form
        ref="form"
        @submit.stop.prevent="modifyNodes"
      >
        <b-row>
          <b-col sm="6">
            <b-form-group
              label="master candidate:"
              label-for="mastercandidate-input"
            >
              <b-form-input
                id="mastercandidate-input"
                v-model="form.master_candidate"
              />
            </b-form-group>
            <b-form-group
              label="master capable:"
              label-for="mastercapable-input"
            >
              <b-form-input
                id="mastercapable-input"
                v-model="form.master_capable"
              />
            </b-form-group>
            <b-form-group
              label="cpu speed:"
              label-for="cpuspeed-input"
            >
              <b-form-input
                id="cpuspeed-input"
                v-model="form.cpu_speed"
                type="number"
              />
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group
              label="exclusive storage:"
              label-for="exclusivestorage-input"
            >
              <b-form-input
                id="exclusivestorage-input"
                v-model="form.exclusive_storage"
              />
            </b-form-group>
            <b-form-group
              label="oob program:"
              label-for="oobprogram-input"
            >
              <b-form-input
                id="oobprogram-input"
                v-model="form.oob_program"
              />
            </b-form-group>
            <b-form-group
              label="ovs:"
              label-for="ovs-input"
            >
              <b-form-input
                id="ovs-input"
                v-model="form.ovs"
              />
            </b-form-group>
            <b-form-group
              label="ovs link:"
              label-for="ovslink-input"
            >
              <b-form-input
                id="ovslink-input"
                v-model="form.ovs_link"
              />
            </b-form-group>
            <b-form-group
              label="ovs name:"
              label-for="ovsname-input"
            >
              <b-form-input
                id="ovsname-input"
                v-model="form.ovs_name"
              />
            </b-form-group>
            <b-form-group
              label="spindle count:"
              label-for="spindlecount-input"
            >
              <b-form-input
                id="spindlecount-input"
                v-model="form.spindle_count"
              />
            </b-form-group>
            <b-form-group
              label="ssh_port:"
              label-for="sshport-input"
            >
              <b-form-input
                id="sshport-input"
                v-model="form.ssh_port"
              />
            </b-form-group>
            <b-form-group
              label="vm_capable:"
              label-for="vmcapable-input"
            >
              <b-form-input
                id="vmcapable-input"
                v-model="form.vm_capable"
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
  name: 'NodesModifyModal',
  data() {
    return {
      form: {
        node_name: 'cl43gnt0',
        master_candidate: '',
        master_capable: '',
        cpu_speed: '',
        exclusive_storage: '',
        oob_program: '',
        ovs: '',
        ovs_link: '',
        ovs_name: '',
        spindle_count: '',
        ssh_port: '',
        vm_capable: ''
      }
    };
  },
  methods: {
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.modifyNodes();
    },
    modifyNodes() {
      const dataInstances = this.form;
      // eslint-disable-next-line
        console.log(JSON.stringify(dataInstances));

      axios.post('http://10.110.3.230:8008/v1/nodes/cl43gnt0/modify', dataInstances)
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
