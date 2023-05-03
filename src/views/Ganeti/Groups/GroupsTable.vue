<template>
  <page-section>
    <b-table
      responsive="md"
      bordered
      head-variant="light"
      :items="groups"
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
          class="mr-2"
          @click="deleteGroups(row.item.name)"
        >
          delete
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
                <dt>Alloc policy:</dt>
                <dd>{{ item.alloc_policy }}</dd>
                <dt>Node cnt:</dt>
                <dd>{{ item.node_cnt }}</dd>
                <dt>Node list:</dt>
                <dd>{{ item.node_list }}</dd>
              </dl>
            </b-col>
            <b-col
              class="mt-2"
              sm="6"
              xl="6"
            >
              <dl>
                <dt>Ovs:</dt>
                <dd>{{ item.ndparams.ovs }}</dd>
                <dt>Cpu Speed:</dt>
                <dd>{{ item.ndparams.cpu_speed }}</dd>
                <dt>Ctime:</dt>
                <dd>{{ item.ctime }}</dd>
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
import { actionTypes } from '@/store/modules/groups';
import { mapState } from 'vuex';
import axios from 'axios';
import PageSection from '@/components/Global/PageSection.vue';
import IconChevron from '@carbon/icons-vue/es/chevron--down/20';

export default {
  name: 'GroupsTable',
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
          key: 'ndparams.cpu_speed',
          label: 'CPU speed'
        },
        {
          key: 'ctime',
          label: 'Ctime'
        },
        {
          key: 'actions',
          label: 'Actions',
          tdClass: 'text-center'
        }
      ],
      items: [
        // {
        //   name: 'default',
        //   serial_no: '1',
        //   alloc_policy: 'preferred',
        //   node_cnt: '6',
        //   node_list: 'cl43gnt2, cl43gnt0, cl43gnt5, cl43gnt1, cl43gnt3, cl43gnt4',
        //   cpu_speed: '1',
        //   ctime: '0',
        //   exclusive_storage: 'false',
        //   ovs: 'false',
        //   ovs_name: 'switch1',
        //   mtime: '1660566025.9095514'
        // }
      ]
    };
  },
  computed: {
    ...mapState({
      isLoading: state => state.groups.isLoading,
      groups: state => state.groups.data,
      error: state => state.groups.error
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getGroups, { apiUrl: this.apiUrl });
  },
  // created() {
  //   this.getGroups();
  // },
  methods: {
    // getGroups() {
    //   axios.get('http://10.110.3.230:8008/v1/groups').then(responce => {
    //     // eslint-disable-next-line
    //     console.log(responce);
    //     this.items = responce.data;
    //   });
    // },
    deleteGroups(name) {
      this.isBusy = true;

      const groupName = {
        group_name: name
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
          console.log(groupName);
          // eslint-disable-next-line
          console.log(value);
          if (value === true) {
            axios.delete(`groups/${name}`, { data: groupName })
              .then(responce => {
              // eslint-disable-next-line
              console.log(responce);
                setTimeout(() => {
                  this.isBusy = false;
                }, 1000);
              })
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
    toggleRowDetails(row) {
      row.toggleDetails();
    }
  }

};
</script>

  <style scoped>

  </style>
