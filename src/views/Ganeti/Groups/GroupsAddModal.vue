<template>
  <div>
    <b-modal
      id="modal-add-groups"
      ref="modal"
      size="lg"
      title="Add new groups"
      ok-title="Save"
      cancel-title="Cancel"
      button-size="sm"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form
        ref="form"
        @submit.stop.prevent="handleSubmit"
      >
        <b-row>
          <b-col sm="6">
            <b-form-group
              label="name:"
              label-for="name-input"
              invalid-feedback="Name is required"
            >
              <b-form-input
                id="name-input"
                v-model="form.group_name"
                placeholder="Enter name"
                required
              />
            </b-form-group>
            <!-- <b-form-group
              label="alloc_policy:"
              label-for="node-input"
              invalid-feedback="Node is required"
            >
              <b-form-input
                v-model="form.alloc_policy"
                placeholder="alloc_policy name"
              />
            </b-form-group> -->
            <!-- <b-form-group
              label="disk_state:"
              label-for="disk_state-input"
              invalid-feedback="Disk is required"
            >
              <b-form-input
                id="disk_state-input"
                v-model="form.disk_state"
                placeholder="Enter disk_state"
              />
            </b-form-group> -->

            <!-- <b-form-group
              label="ipolicy:"
              label-for="ipolicy-input"
            >
              <b-form-input
                id="vcpus-input"
                v-model="form.ipolicy"
                placeholder="Enter ipolicy"
              />
            </b-form-group> -->
          </b-col>
          <!-- <b-col sm="6">
            <b-form-group
              label="cpu_speed:"
              label-for="cpu_speed-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="cpu_speed-input"
                v-model="form.cpu_speed"
                placeholder="Enter cpu_speed"
              />
            </b-form-group>
            <b-form-group
              label="exclusive_storage:"
              label-for="exclusive_storage-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="exclusive_storage-input"
                v-model="form.exclusive_storage"
                placeholder="Enter exclusive_storage"
              />
            </b-form-group>
            <b-form-group
              label="oob_program:"
              label-for="oob_program-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="oob_program-input"
                v-model="form.oob_program"
                placeholder="Enter oob_program"
              />
            </b-form-group>
            <b-form-group
              label="ovs:"
              label-for="ovs-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="ovs-input"
                v-model="form.ovs"
                placeholder="Enter ovs"
              />
            </b-form-group>
            <b-form-group
              label="ovs_link:"
              label-for="ovs_link-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="ovs_link-input"
                v-model="form.ovs_link"
                placeholder="Enter ovs_link"
              />
            </b-form-group>
            <b-form-group
              label="ovs_name:"
              label-for="ovs_name-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="ovs_name-input"
                v-model="form.ovs_name"
                placeholder="Enter ovs_name"
              />
            </b-form-group>
            <b-form-group
              label="spindle_count:"
              label-for="spindle_count-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="spindle_count-input"
                v-model="form.spindle_count"
                placeholder="Enter spindle_count"
              />
            </b-form-group>
            <b-form-group
              label="ssh_port:"
              label-for="ssh_port-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="ssh_port-input"
                v-model="form.ssh_port"
                placeholder="Enter ssh_port"
              />
            </b-form-group>
          </b-col>-->
        </b-row>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GroupsAddModal',
  data() {
    return {
      form: {
        group_name: ''
        // alloc_policy: '',
        // cpu_speed: '',
        // exclusive_storage: '',
        // oob_program: '',
        // ovs: '',
        // ovs_link: '',
        // ovs_name: '',
        // spindle_count: '',
        // ssh_port: ''
      }
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      return valid;
    },
    resetModal() {
      this.form.group_name = '';
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }

      // Hide the modal manually
      this.$nextTick(() => {
        const dataInstances = this.form;
        // eslint-disable-next-line
      console.log(JSON.stringify(dataInstances));

        axios.post('http://10.110.3.230:8008/v1/groups', dataInstances)
          .then(response => {
          // eslint-disable-next-line
          console.log(response.data);
            this.$bvModal.hide('modal-add-groups');
            // setTimeout(() => {
            //   this.$router.go(0);
            // }, 1000);
          })
          .catch(error => {
          // eslint-disable-next-line
          console.log(error);
          });
      });
    }
  }
};
</script>

<style>

</style>
