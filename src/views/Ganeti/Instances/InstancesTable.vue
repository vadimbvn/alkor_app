<template>
  <page-section>
    <b-table
      responsive="md"
      bordered
      head-variant="light"
      :items="items"
      :fields="fields"
    >
      <template #cell(show_details)="row">
        <b-button
          size="sm"
          variant="primary"
          @click="row.toggleDetails"
        >
          {{ row.detailsShowing ? 'Закрыть' : 'Подробнее' }}
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

export default {
  components: {
    PageSection
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
          label: ''
        }
      ],
      items: [
        {
          name: 'antix-21-template',
          admin_state: 'down',
          os: 'noop',
          pnode: 'cl43gnt1',
          disk_template: 'gluster',
          nic_ips: 'null',
          nic_macs: 'aa:00:00:bb:0b:af',
          nic_modes: 'bridged',
          nic_uuids: '2c5a17c5-f5ab-4c33-a22b-2f2dd82cce0c',
          nic_names: 'null',
          nic_links: 'vmbr0',
          nic_networks: 'null',
          nic_bridges: 'vmbr0',
          network_port: '11000'

        }

      ]
    };
  }

};
</script>

<style scoped>

</style>
