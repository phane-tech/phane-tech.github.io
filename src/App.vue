<template>
  <div class="max-w-7xl mx-auto p-4">
    <dropdown :items="[{label:'phaneendra'}, {label:'mokshitha'}, {label:'narasimha'}, {label:'dhanalakshmi'}]"/>
  </div>
</template>
<script>
import dropdown from '@/components/dropdown.vue';
export default {
  components: { dropdown },
  data() {
  },
}
</script>
