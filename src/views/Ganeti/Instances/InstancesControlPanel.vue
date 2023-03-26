<template>
  <div>
    <b-button-group>
      <b-button v-b-modal.modal-add-instances>
        Создать БМ
      </b-button>
      <b-button>Button 2</b-button>
      <b-button>Button 3</b-button>
    </b-button-group>
    <b-modal
      id="modal-add-instances"
      title="Новая"
      ok-title="Сохранить"
      cancel-title="Отмена"
      button-size="sm"
    >
      <form>
        <b-form-group
          label="Name:"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
          />
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      nameState: null
    };
  }
};
</script>

<style>

</style>
