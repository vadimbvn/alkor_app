<template>
  <div>
    <b-modal
      id="modal-rename-instances"
      ref="modal"
      title="Rename Instances"
      ok-title="Save"
      cancel-title="Cancel"
      @ok="handleOk"
    >
      <b-form
        ref="form"
        @submit.stop.prevent="renameInstances"
      >
        <b-row>
          <b-col>
            <b-form-group
              label="New name:"
              label-for="newname-input"
            >
              <b-form-input
                id="newname-input"
                v-model="form.new_name"
                type="text"
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
  name: 'InstancesRenameModal',
  data() {
    return {
      form: {
        new_name: '',
        instance_name: 'safsafsaf'
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

      axios.put('instance/name/rename', dataInstances)
        .then(response => {
          // eslint-disable-next-line
            console.log(response.data);
          this.$bvModal.hide('modal-rename-instances');
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
