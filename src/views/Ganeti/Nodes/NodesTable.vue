<template>
  <page-section>
    <b-table
      responsive="md"
      hover
      striped
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
                <dt>Offline:</dt>
                <dd>{{ row.item.offline }}</dd>
                <dt>Master candidate:</dt>
                <dd>{{ row.item.master_candidate }}</dd>
                <dt>Drained:</dt>
                <dd>{{ row.item.drained }}</dd>
                <dt>Dtotal:</dt>
                <dd>{{ row.item.dtotal }}</dd>
                <dt>Dfree:</dt>
                <dd>{{ row.item.dfree }}</dd>
                <dt>Sptotal:</dt>
                <dd>{{ row.item.sptotal }}</dd>
              </dl>
            </b-col>
            <b-col
              class="mt-2"
              sm="6"
              xl="6"
            >
              <dl>
                <dt>Mnode:</dt>
                <dd>{{ row.item.mnode }}:</dd>
                <dt>Mfree:</dt>
                <dd>{{ row.item.mfree }}</dd>
                <dt>Pinst cnt:</dt>
                <dd>{{ row.item.pinst_cnt }}</dd>
                <dt>Secondary ip</dt>
                <dd>{{ row.item.secondary_ip }}</dd>
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
          key: 'offline',
          label: 'Offline'
        },
        {
          key: 'master_candidate',
          label: 'Master candidate'
        },
        {
          key: 'mnode',
          label: 'Mnode'
        },
        {
          key: 'secondary_ip',
          label: 'Secondary ip'
        },
        {
          key: 'show_details',
          label: ''
        }
      ],
      items: [
        {
          name: 'cl43gnt0',
          offline: 'false',
          master_candidate: 'true',
          mnode: '59',
          secondary_ip: '10.110.3.230',
          drained: 'false',
          dtotal: 'null',
          dfree: 'null',
          sptotal: 'null',
          mfree: '15777',
          pinst_cnt: '0'
        },
        {
          name: 'cl43gnt1',
          offline: 'false',
          master_candidate: 'true',
          mnode: '45',
          secondary_ip: '10.110.3.231',
          drained: 'false',
          dtotal: 'null',
          dfree: 'null',
          sptotal: 'null',
          mfree: '15818',
          pinst_cnt: '1'
        },
        {
          name: 'cl43gnt2',
          offline: 'false',
          master_candidate: 'true',
          mnode: '45',
          secondary_ip: '10.110.3.232',
          drained: 'false',
          dtotal: 'null',
          dfree: 'null',
          sptotal: 'null',
          mfree: '15818',
          pinst_cnt: '0'
        },
        {
          name: 'cl43gnt3',
          offline: 'false',
          master_candidate: 'true',
          mnode: '45',
          secondary_ip: '10.110.3.233',
          drained: 'false',
          dtotal: 'null',
          dfree: 'null',
          sptotal: 'null',
          mfree: '15817',
          pinst_cnt: '0'
        },
        {
          name: 'cl43gnt4',
          offline: 'false',
          master_candidate: 'true',
          mnode: '45',
          secondary_ip: '10.110.3.234',
          drained: 'false',
          dtotal: 'null',
          dfree: 'null',
          sptotal: 'null',
          mfree: '15818',
          pinst_cnt: '0'
        },
        {
          name: 'cl43gnt5',
          offline: 'false',
          master_candidate: 'true',
          mnode: '46',
          secondary_ip: '10.110.235',
          drained: 'false',
          dtotal: 'null',
          dfree: 'null',
          sptotal: 'null',
          mfree: '15819',
          pinst_cnt: '0'
        }

      ]
    };
  }

};
</script>

  <style scoped>

  </style>
