<template>
  <b-card
    bg-variant="light"
    border-variant="light"
    class="mb-4"
  >
    <div>
      <h3 class="h5 mb-0 text-center">
        {{ title }}
      </h3>
    </div>
    <slot />
  </b-card>
</template>

<script>
export default {
  name: 'DashboardCard',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>

</style>
