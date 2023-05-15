<template>
  <page-section>
    <b-table
      responsive="md"
      bordered
      head-variant="light"
      :busy.sync="isLoading"
      :items="instances"
      :fields="fields"
      show-empty
      empty-text="No items available"
    >
      <template #cell(expandRow)="row">
        <b-button
          size="sm"
          variant="light"
          class="btn-icon-only"
          @click="toggleRowDetails(row)"
        >
          <icon-chevron />
        </b-button>
      </template>

      <template #cell(actions)="row">
        <b-button
          variant="danger"
          size="sm"
          class="mr-2 mt-2"
          @click="deleteInstances(row.item.name)"
        >
          delete
        </b-button>
        <b-button
          variant="success"
          size="sm"
          class="mr-2 mt-2"
          @click="startUpInstances(row.item.name)"
        >
          startup
        </b-button>
      </template>

      <template #row-details="{ item }">
        <b-container fluid>
          <div>
            <b-button-group>
              <b-button
                v-b-modal.modal-modify-instances
                squared
                size="sm"
                class="mr-2 mt-2"
                variant="warning"
              >
                Modify
              </b-button>
              <b-button
                v-b-modal.modal-rename-instances
                variant="info"
                size="sm"
                class="mr-2 mt-2"
              >
                rename
              </b-button>
              <b-button
                v-b-modal.modal-grow-instances
                variant="info"
                size="sm"
                class="mr-2 mt-2"
              >
                grow
              </b-button>
              <b-button
                v-b-modal.modal-shutdown-instances
                variant="danger"
                size="sm"
                class="mr-2 mt-2"
              >
                shutdown
              </b-button>
              <b-button
                v-b-modal.modal-reboot-instances
                variant="danger"
                size="sm"
                class="mr-2 mt-2"
              >
                reboot
              </b-button>
            </b-button-group>
          </div>
          <b-row>
            <b-col
              class="mt-2"
              sm="6"
              xl="6"
            >
              <dl>
                <dt>Name:</dt>
                <dd>{{ item.name }}</dd>
                <dt>Admin state:</dt>
                <dd>{{ item.admin_state }}</dd>
                <dt>OS:</dt>
                <dd>{{ item.os }}</dd>
                <dt>Pnode:</dt>
                <dd>{{ item.pnode }}</dd>
                <dt>Disk template:</dt>
                <dd>{{ item.disk_template }}</dd>
                <dt>Vcpus:</dt>
                <dd>{{ item.beparams.vcpus }}</dd>
                <dt>Always failover:</dt>
                <dd>{{ item.beparams.always_failover }}</dd>
                <dt>Nic.macs:</dt>
                <dd>{{ item.beparams.auto_balance }}</dd>
              </dl>
            </b-col>
            <b-col
              class="mt-2"
              sm="6"
              xl="6"
            >
              <dl>
                <dt>Ctime:</dt>
                <dd>{{ item.ctime }}</dd>
                <dt>Disk usages:</dt>
                <dd>{{ item.disk_usage }}</dd>
                <dt>Maxmem:</dt>
                <dd>{{ item.beparams.maxmem }}</dd>
                <dt>Maxmem:</dt>
                <dd>{{ item.beparams.maxmem }}</dd>
                <dt>Disk type:</dt>
                <dd>{{ item.hvparams.disk_type }}</dd>
                <dt>Status:</dt>
                <dd>{{ item.status }}</dd>
                <dt>Nic type:</dt>
                <dd>{{ item.hvparams.nic_type }}</dd>
                <dt>Mtime:</dt>
                <dd>{{ item.mtime }}</dd>
              </dl>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-table>
  </page-section>
</template>

<script>
import axios from '@/api/axios';
import { actionTypes } from '@/store/modules/instances';
import { mapState } from 'vuex';
import PageSection from '@/components/Global/PageSection.vue';
import IconChevron from '@carbon/icons-vue/es/chevron--down/20';

export default {
  name: 'InstancesTable',
  components: {
    PageSection,
    IconChevron
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      fields: [
        {
          key: 'expandRow',
          label: '',
          tdClass: 'table-row-expand'
        },
        {
          key: 'name',
          label: 'Name',
          sortable: true
        },
        {
          key: 'admin_state',
          label: 'Admin state'
        },
        {
          key: 'status',
          label: 'Status'
        },
        {
          key: 'os',
          label: 'OS'
        },
        {
          key: 'pnode',
          label: 'Pnode'
        },
        {
          key: 'disk_template',
          label: 'Disk template'
        },
        {
          key: 'actions',
          label: 'Actions',
          tdClass: 'text-center'
        }
      ],
      items: [
        // {
        //   name: 'antix-21-template',
        //   admin_state: 'down',
        //   os: 'noop',
        //   pnode: 'cl43gnt1',
        //   disk_template: 'gluster',
        //   nic_ips: 'null',
        //   nic_macs: 'aa:00:00:bb:0b:af',
        //   nic_modes: 'bridged',
        //   nic_uuids: '2c5a17c5-f5ab-4c33-a22b-2f2dd82cce0c',
        //   nic_names: 'null',
        //   nic_links: 'vmbr0',
        //   nic_networks: 'null',
        //   nic_bridges: 'vmbr0',
        //   network_port: '11000',
        //   beparams: [{
        //     vcpus: '1'
        //   }],
        //   hvparams: [
        //     {
        //       disk_type: 'fff'
        //     }
        //   ]
        // }
      ]
    };
  },
  computed: {
    ...mapState({
      isLoading: state => state.instances.isLoading,
      instances: state => state.instances.data,
      error: state => state.instances.error
    })
  },
  mounted() {
    this.fetchInstances();
  },
  methods: {
    fetchInstances() {
      this.$store.dispatch(actionTypes.getInstances, { apiUrl: this.apiUrl });
    },
    deleteInstances(name) {
      this.isBusy = true;

      const instanceName = {
        instance_name: name
      };

      this.$bvModal.msgBoxConfirm('Please confirm that you want to delete.', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then(value => {
          // eslint-disable-next-line
           console.log(instanceName);
          // eslint-disable-next-line
          console.log(value);
          if (value === true) {
            axios.delete(`instance/${name}`, { data: instanceName })
              .then(responce => {
              // eslint-disable-next-line
              console.log(responce);
                setTimeout(() => {
                  this.fetchInstances();
                }, 1000);
              })
            // this.$store.dispatch(actionTypes.deleteInstances, {
            //   apiUrl: this.apiUrl,
            //   name: 'alcor',
            //   data: this.name
            // })
              .catch(e => {
              // eslint-disable-next-line
              console.log(e);
              });
          } else {
            this.isBusy = false;
          }
        })
        .catch(err => {
          // eslint-disable-next-line
          console.log(err);
        });
    },
    startUpInstances(name) {
      this.isBusy = true;

      const instanceName = {
        instance_name: name
      };

      axios.put(`instance/${name}/startup`, instanceName)
        .then(responce => {
          // eslint-disable-next-line
          console.log(responce);
          setTimeout(() => {
            this.getInstances();
            this.isBusy = false;
          }, 1000);
        })
        .catch(e => {
          // eslint-disable-next-line
          console.log(e);
          this.isBusy = false;
        });
    },
    toggleRowDetails(row) {
      row.toggleDetails();
    }
  }
};
</script>

<style scoped>

</style>
