<template>
  <page-section>
    <b-table
      responsive="md"
      bordered
      head-variant="light"
      :items="nodes"
      :fields="fields"
      show-empty
      :busy.sync="isLoading"
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

      <template #cell(actions)>
        <b-button
          variant="danger"
          size="sm"
          class="mr-2 mt-2"
        >
          migrate
        </b-button>
        <b-button
          v-b-modal.modal-modify-nodes
          variant="success"
          size="sm"
          class="mr-2 mt-2"
        >
          modify
        </b-button>
        <b-button
          v-b-modal.modal-evacuate-nodes
          variant="success"
          size="sm"
          class="mr-2 mt-2"
        >
          evacuate
        </b-button>
      </template>

      <template #row-details="{ item }">
        <b-container fluid>
          <b-row>
            <b-col
              class="mt-2"
              sm="6"
              xl="6"
            >
              <dl>
                <dt>Name:</dt>
                <dd>{{ item.name }}</dd>
                <dt>Offline:</dt>
                <dd>{{ item.offline }}</dd>
                <dt>Master candidate:</dt>
                <dd>{{ item.master_candidate }}</dd>
                <dt>Cnodes:</dt>
                <dd>{{ item.cnodes }}</dd>
                <dt>Cnos:</dt>
                <dd>{{ item.cnos }}</dd>
                <dt>Ctotal:</dt>
                <dd>{{ item.ctotal }}</dd>
                <dt>Master candidate:</dt>
                <dd>{{ item.master_candidate }}</dd>
              </dl>
            </b-col>
            <b-col
              class="mt-2"
              sm="6"
              xl="6"
            >
              <dl>
                <dt>Master capable:</dt>
                <dd>{{ item.master_capable }}</dd>
                <dt>Vm capable:</dt>
                <dd>{{ item.vm_capable }}</dd>
                <dt>Mfree:</dt>
                <dd>{{ item.mfree }}</dd>
                <dt>Mnode:</dt>
                <dd>{{ item.mnode }}</dd>
                <dt>Mtime:</dt>
                <dd>{{ item.mtime }}</dd>
                <dt>Mtotal:</dt>
                <dd>{{ item.mtotal }}</dd>
                <dt>Cpu speed:</dt>
                <dd>{{ item.ndparams.cpu_speed }}</dd>
              </dl>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-table>
  </page-section>
</template>

<script>
import { actionTypes } from '@/store/modules/nodes';
import { mapState } from 'vuex';
import PageSection from '@/components/Global/PageSection.vue';
import IconChevron from '@carbon/icons-vue/es/chevron--down/20';

export default {
  name: 'NodesTable',
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
          key: 'offline',
          label: 'Offline'
        },
        {
          key: 'master_candidate',
          label: 'Master candidate'
        },
        {
          key: 'mfree',
          label: 'Mfree'
        },
        {
          key: 'mnode',
          label: 'Mnode'
        },
        {
          key: 'actions',
          label: 'Actions',
          tdClass: 'text-center'
        }
      ],
      items: [
        // {
        //   name: 'cl43gnt0',
        //   offline: 'false',
        //   master_candidate: 'true',
        //   mnode: '59',
        //   secondary_ip: '10.110.3.230',
        //   drained: 'false',
        //   dtotal: 'null',
        //   dfree: 'null',
        //   sptotal: 'null',
        //   mfree: '15777',
        //   pinst_cnt: '0'
        // }
        // {
        //   name: 'cl43gnt1',
        //   offline: 'false',
        //   master_candidate: 'true',
        //   mnode: '45',
        //   secondary_ip: '10.110.3.231',
        //   drained: 'false',
        //   dtotal: 'null',
        //   dfree: 'null',
        //   sptotal: 'null',
        //   mfree: '15818',
        //   pinst_cnt: '1'
        // },
        // {
        //   name: 'cl43gnt2',
        //   offline: 'false',
        //   master_candidate: 'true',
        //   mnode: '45',
        //   secondary_ip: '10.110.3.232',
        //   drained: 'false',
        //   dtotal: 'null',
        //   dfree: 'null',
        //   sptotal: 'null',
        //   mfree: '15818',
        //   pinst_cnt: '0'
        // },
        // {
        //   name: 'cl43gnt3',
        //   offline: 'false',
        //   master_candidate: 'true',
        //   mnode: '45',
        //   secondary_ip: '10.110.3.233',
        //   drained: 'false',
        //   dtotal: 'null',
        //   dfree: 'null',
        //   sptotal: 'null',
        //   mfree: '15817',
        //   pinst_cnt: '0'
        // },
        // {
        //   name: 'cl43gnt4',
        //   offline: 'false',
        //   master_candidate: 'true',
        //   mnode: '45',
        //   secondary_ip: '10.110.3.234',
        //   drained: 'false',
        //   dtotal: 'null',
        //   dfree: 'null',
        //   sptotal: 'null',
        //   mfree: '15818',
        //   pinst_cnt: '0'
        // },
        // {
        //   name: 'cl43gnt5',
        //   offline: 'false',
        //   master_candidate: 'true',
        //   mnode: '46',
        //   secondary_ip: '10.110.235',
        //   drained: 'false',
        //   dtotal: 'null',
        //   dfree: 'null',
        //   sptotal: 'null',
        //   mfree: '15819',
        //   pinst_cnt: '0'
        // }

      ]
    };
  },
  computed: {
    ...mapState({
      isLoading: state => state.nodes.isLoading,
      nodes: state => state.nodes.data,
      error: state => state.nodes.error
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getNodes, { apiUrl: this.apiUrl });
  },
  methods: {
    toggleRowDetails(row) {
      row.toggleDetails();
    }
  }
};
</script>

  <style scoped>
  </style>
