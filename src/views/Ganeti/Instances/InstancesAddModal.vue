<template>
  <div>
    <b-modal
      id="modal-add-instances"
      ref="modal"
      size="lg"
      title="Add new Instances"
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
              label="Name:"
              label-for="name-input"
              invalid-feedback="Name is required"
              :state="Namestate"
            >
              <b-form-input
                id="name-input"
                v-model="form.instance_name"
                placeholder="Enter name"
                :state="Namestate"
                required
              />
            </b-form-group>
            <b-form-group
              label="Node:"
              label-for="node-input"
              invalid-feedback="Node is required"
              :state="Nodestate"
            >
              <b-form-select
                v-model="form.pnode"
                :options="nodes"
                :state="Nodestate"
                required
              />
            </b-form-group>
            <b-form-group
              label="Disk size:"
              label-for="disk-input"
              invalid-feedback="Disk is required"
              :state="Diskstate"
            >
              <b-form-input
                id="disk-input"
                v-model="form.disks.size"
                placeholder="Enter disk size"
                :state="Diskstate"
                required
              />
            </b-form-group>
            <b-form-group
              label="Maxmem:"
              label-for="maxmem-input"
              invalid-feedback="Maxmem is required"
              :state="Maxstate"
            >
              <b-form-input
                id="maxmem-input"
                v-model="form.maxmem"
                placeholder="Enter maxmem"
                type="number"
                :state="Maxstate"
                required
              />
            </b-form-group>
            <b-form-group
              label="Minmem:"
              label-for="minmem-input"
              invalid-feedback="Minmem is required"
              :state="Minstate"
            >
              <b-form-input
                id="minmem-input"
                v-model="form.minmem"
                placeholder="Enter minmem"
                type="number"
                :state="Minstate"
                required
              />
            </b-form-group>
            <b-form-group
              label="Vcpus:"
              label-for="vcpus-input"
              invalid-feedback="Vcpus is required"
              :state="Vcpusstate"
            >
              <b-form-input
                id="vcpus-input"
                v-model="form.vcpus"
                placeholder="Enter vcpus"
                type="number"
                :state="Vcpusstate"
                required
              />
            </b-form-group>
            <b-form-group
              label="Ignore ipolicy:"
              label-for="ignore_ipolicy"
            >
              <b-form-select
                v-model="form.ignore_ipolicy"
                :options="ignoreipolicyces"
              />
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group
              label="Boot order:"
              label-for="bootorder-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="bootorder-input"
                v-model="form.bootorder"
                placeholder="Enter bootorder input"
              />
            </b-form-group>
            <b-form-group
              label="Cdrom image path:"
              label-for="cdromimagepath-input"
              invalid-feedback="Cdrom image path is required"
            >
              <b-form-input
                id="cdromimagepath-input"
                v-model="form.cdromimagepath"
                placeholder="Enter cdrom image path"
              />
            </b-form-group>
            <b-form-group
              label="Cdrom disk type:"
              label-for="cdromdisktype-input"
              invalid-feedback="Cdrom disk type is required"
            >
              <b-form-input
                id="cdromdisktype-input"
                v-model="form.cdromdisktype"
                placeholder="Enter cdromdisktype input"
              />
            </b-form-group>
            <b-form-group
              label="Vnc bind address:"
              label-for="vncbindaddress-input"
              invalid-feedback="Vnc bind address is required"
            >
              <b-form-input
                id="vncbindaddress-input"
                v-model="form.vncbindaddress"
                placeholder="Enter vncbindaddress input"
              />
            </b-form-group>
            <b-form-group
              label="Ip check:"
              label-for="ip_check"
            >
              <b-form-select
                v-model="form.ip_check"
                :options="ipchecks"
              />
            </b-form-group>
            <b-form-group
              label="Name check"
              label-for="name_check"
            >
              <b-form-select
                v-model="form.name_check"
                :options="namecheckes"
              />
            </b-form-group>
            <b-form-group
              label="No install"
              label-for="no_install"
            >
              <b-form-select
                v-model="form.no_install"
                :options="noinstalls"
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
  name: 'InstancesAddModal',
  data() {
    return {
      form: {
        instance_name: '',
        pnode: null,
        maxmem: '',
        minmem: '',
        vcpus: '',
        bootorder: '',
        cdromimagepath: '',
        cdromdisktype: '',
        vncbindaddress: '',
        ignore_ipolicy: true,
        ip_check: false,
        name_check: false,
        no_install: true,
        disks: [{ size: '1024' }],
        os: 'noop',
        mode: 'create',
        nics: [{ mode: 'bridged', link: 'vmbr0' }]
      },
      nodes: [
        { text: 'Select One', value: null },
        'cl43gnt0',
        'cl43gnt1',
        'cl43gnt2',
        'cl43gnt3',
        'cl43gnt4',
        'cl43gnt5'],
      ignoreipolicyces: [true, false],
      ipchecks: [true, false],
      namecheckes: [true, false],
      noinstalls: [true, false],
      Namestate: null,
      Nodestate: null,
      Diskstate: null,
      Maxstate: null,
      Minstate: null,
      Vcpusstate: null
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.Namestate = valid;
      this.Nodestate = valid;
      this.Diskstate = valid;
      this.Maxstate = valid;
      this.Minstate = valid;
      this.Vcpusstate = valid;
      return valid;
    },
    resetModal() {
      this.form.instance_name = '';
      this.Namestate = null;
      this.Nodestate = null;
      this.Diskstate = null;
      this.Maxstate = null;
      this.Minstate = null;
      this.Vcpusstate = null;
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

        axios.post('http://10.110.3.230:8008/v1/instance', dataInstances)
          .then(response => {
          // eslint-disable-next-line
          console.log(response.data);
            this.$bvModal.hide('modal-add-instances');
            setTimeout(() => {
              this.$router.go(0);
            }, 1000);
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
