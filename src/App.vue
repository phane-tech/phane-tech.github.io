<template>
  <div class="max-w-7xl mx-auto p-4 gap-4 flex ">
    <base-button @click="show = true" text="Open Sidebar" icon="restaurant_menu" />
    <dropdown
      :items="[
        { label: 'phaneendra', icon: 'fingerprint', class: 'text-green-500' },
        { label: 'mokshitha', icon: 'settings', class: 'text-yellow-500' },
        { label: 'narasimha', icon: 'home', class: 'text-sky-500' },
        { label: 'dhanalakshmi', icon: 'language', class: 'text-orange-500' },
        { label: 'Naga Vani', class: 'text-red-500', icon: 'schedule' },
      ]"
    />
    <sidebar class="mb-4" :show="show" :size="600" @close=" show = false"/>
  </div>
</template>
<script>
import dropdown from "@/components/dropdown.vue";
import sidebar from "@/components/sidebar.vue";
import baseButton from "@/components/button.vue";
export default {
  components: { dropdown, sidebar, baseButton },
  data(){
    return{
      show: true
    }
  }
};
</script>
