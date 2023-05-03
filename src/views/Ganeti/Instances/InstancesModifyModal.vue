<template>
  <div>
    <b-modal
      id="modal-modify-instances"
      ref="modal"
      title="Modify Instances"
      ok-title="Save"
      cancel-title="Cancel"
      @ok="handleOk"
    >
      <b-form
        ref="form"
        @submit.stop.prevent="modifyInstances"
      >
        <b-row>
          <b-col sm="6">
            <b-form-group
              label="Maxmem:"
              label-for="maxmem-input"
            >
              <b-form-input
                id="maxmem-input"
                v-model="form.maxmem"
                type="number"
              />
            </b-form-group>
            <b-form-group
              label="Minmem:"
              label-for="Minmem-input"
            >
              <b-form-input
                id="minmem-input"
                v-model="form.minmem"
                type="number"
              />
            </b-form-group>
            <b-form-group
              label="Vcpus:"
              label-for="vcpus-input"
            >
              <b-form-input
                id="vcpus-input"
                v-model="form.vcpus"
                type="number"
              />
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <!-- <b-form-group
              label="Spindle use:"
              label-for="spindleuse-input"
              type="number"
            >
              <b-form-input
                id="spindleuse-input"
                v-model="form.spindle_use"
              />
            </b-form-group> -->
            <b-form-group
              label="Auto balance:"
              label-for="autobalance-input"
            >
              <b-form-input
                id="autobalance"
                v-model="form.auto_balance"
              />
            </b-form-group>
            <b-form-group
              label="Always failover:"
              label-for="alwaysfailover-input"
            >
              <b-form-input
                id="alwaysfailover-input"
                v-model="form.always_failover"
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
  name: 'InstancesModifyModal',
  data() {
    return {
      form: {
        instance_name: 'nerabotaetni4ego',
        maxmem: '',
        minmem: '',
        vcpus: '',
        // spindle_use: '',
        auto_balance: '',
        always_failover: ''
      }
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

      axios.put('http://10.110.3.230:8008/v1/instance/nerabotaetni4ego/modify', dataInstances)
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
