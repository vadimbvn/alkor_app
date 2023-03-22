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
                <dt>Alloc policy:</dt>
                <dd>{{ row.item.alloc_policy }}</dd>
                <dt>Node cnt:</dt>
                <dd>{{ row.item.node_cnt }}</dd>
                <dt>Node list:</dt>
                <dd>{{ row.item.node_list }}</dd>
                <dt>Exclusive storage</dt>
                <dd>{{ row.item.exclusive_storage }}</dd>
              </dl>
            </b-col>
            <b-col
              class="mt-2"
              sm="6"
              xl="6"
            >
              <dl>
                <dt>Ovs:</dt>
                <dd>{{ row.item.ovs }}</dd>
                <dt>Ovs name:</dt>
                <dd>{{ row.item.ovs_name }}</dd>
                <dt>Cpu Speed:</dt>
                <dd>{{ row.item.cpu_speed }}</dd>
                <dt>Ctime:</dt>
                <dd>{{ row.item.ctime }}</dd>
                <dt>Mtime:</dt>
                <dd>{{ row.item.mtime }}</dd>
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
          key: 'serial_no',
          label: 'Serial no'
        },
        {
          key: 'node_cnt',
          label: 'Node cnt'
        },
        {
          key: 'alloc_policy',
          label: 'Alloc policy'
        },
        {
          key: 'cpu_speed',
          label: 'CPU speed'
        },
        {
          key: 'ctime',
          label: 'Ctime'
        },
        {
          key: 'show_details',
          label: ''
        }
      ],
      items: [
        {
          name: 'default',
          serial_no: '1',
          alloc_policy: 'preferred',
          node_cnt: '6',
          node_list: 'cl43gnt2, cl43gnt0, cl43gnt5, cl43gnt1, cl43gnt3, cl43gnt4',
          cpu_speed: '1',
          ctime: '0',
          exclusive_storage: 'false',
          ovs: 'false',
          ovs_name: 'switch1',
          mtime: '1660566025.9095514'
        }

      ]
    };
  }

};
</script>

  <style scoped>

  </style>
