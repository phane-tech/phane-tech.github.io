<template>
  <div class="max-w-7xl mx-auto p-4">
    <dropdown
      :items="[
        { label: 'phaneendra', icon: 'fingerprint', class: 'text-green-500' },
        { label: 'mokshitha', icon: 'settings', class: 'text-yellow-500' },
        { label: 'narasimha', icon: 'home', class: 'text-sky-500' },
        { label: 'dhanalakshmi', icon: 'language', class: 'text-orange-500' },
        { label: 'Naga Vani', class: 'text-red-500', icon: 'visibility' },
      ]"
    />
  </div>
</template>
<script>
import dropdown from "@/components/dropdown.vue";
export default {
  components: { dropdown },
  data() {},
};
</script>
