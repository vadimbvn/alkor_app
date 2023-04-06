<template>
  <page-section>
    <b-table
      responsive="md"
      bordered
      head-variant="light"
      :busy.sync="isBusy"
      :items="items"
      :fields="fields"
    >
      <template #cell(show_details)="row">
        <b-button
          variant="primary"
          size="sm"
          class="mr-2"
          @click="row.toggleDetails"
        >
          {{ row.detailsShowing ? 'Close' : 'More' }}
        </b-button>
        <b-button
          v-b-modal.modal-modify-instances
          squared
          size="sm"
          class="mr-2"
          variant="primary"
        >
          Modify {{ row.item.name }}
        </b-button>
        <b-button
          variant="danger"
          size="sm"
          class="mr-2"
          @click="deleteInstances(row.item.name)"
        >
          delete
        </b-button>
      </template>

      <template #row-details="row">
        <b-container fluid>
          <b-row>
            <b-col
              class="mt-2"
              sm="6"
              xl="6"
            >
              <dl>
                <dt>Name:</dt>
                <dd>{{ row.item.name }}</dd>
                <dt>Admin state:</dt>
                <dd>{{ row.item.admin_state }}</dd>
                <dt>OS:</dt>
                <dd>{{ row.item.os }}</dd>
                <dt>Pnode:</dt>
                <dd>{{ row.item.pnode }}</dd>
                <dt>Disk template:</dt>
                <dd>{{ row.item.disk_template }}</dd>
                <dt>Vcpus:</dt>
                <dd>{{ row.item.beparams.vcpus }}</dd>
                <dt>Nic.ips:</dt>
                <dd>{{ row.item.nic_ips }}</dd>
                <dt>Nic.macs:</dt>
                <dd>{{ row.item.nic_macs }}</dd>
              </dl>
            </b-col>
            <b-col
              class="mt-2"
              sm="6"
              xl="6"
            >
              <dl>
                <dt>Nic.modes:</dt>
                <dd>{{ row.item.nic_modes }}</dd>
                <dt>Nic.uuids:</dt>
                <dd>{{ row.item.nic_uuids }}</dd>
                <dt>Nic.names:</dt>
                <dd>{{ row.item.nic_names }}</dd>
                <dt>Nic.links:</dt>
                <dd>{{ row.item.nic_links }}</dd>
                <dt>Nic.networks:</dt>
                <dd>{{ row.item.nic_networks }}</dd>
                <dt>Nic.bridges:</dt>
                <dd>{{ row.item.nic_bridges }}</dd>
                <dt>Network port</dt>
                <dd>{{ row.item.network_port }}</dd>
              </dl>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-table>
  </page-section>
</template>

<script>
import PageSection from '@/components/Global/PageSection.vue';
import axios from 'axios';

export default {
  components: {
    PageSection
  },
  data() {
    return {
      instances: null,
      isBusy: false,
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
          key: 'show_details',
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
        //   network_port: '11000'
        // }
      ]
    };
  },
  mounted() {
    axios.get('http://10.110.3.230:8008/v1/instance').then(responce => {
      // eslint-disable-next-line
      console.log(responce.data);
      this.items = responce.data;
    });
  },
  // created() {
  //   axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     .then(responce => {
  //       this.instances = responce.data;
  //       // eslint-disable-next-line
  //       console.log(responce.data);
  //     })
  //     .catch(e => {
  //       this.errors.push(e);
  //     });
  // },
  methods: {
    deleteInstances(name) {
      const instanceName = {
        instance_name: name
      };

      // eslint-disable-next-line
      console.log(instanceName);
      axios.delete(`http://10.110.3.230:8008/v1/instance/${name}`, { data: instanceName })
        .then(responce => {
          // eslint-disable-next-line
          console.log(responce);
        })
        .catch(e => {
          // eslint-disable-next-line
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>

</style>
