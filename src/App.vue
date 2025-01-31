<template>
  <div class="max-w-7xl mx-auto p-4 gap-4 flex flex-wrap">
    <base-button
      @click="show = true"
      text="Open Sidebar"
      icon="restaurant_menu"
    />
    <base-button
      v-for="(item, index) in toasts"
      :key="index"
      :text="item.text"
      :icon="item.icon"
      @click="showToast(item.toast, item.item)"
    />
    <base-button
      @click="show = true"
      text="Open Sidebar"
      icon="restaurant_menu"
    />
    <dropdown
      :items="[
        { label: 'phaneendra', icon: 'fingerprint', class: 'text-green-500' },
        // { label: 'mokshitha', icon: 'settings', class: 'text-yellow-500' },
        { label: 'narasimha', icon: 'home', class: 'text-sky-500' },
        { label: 'dhanalakshmi', icon: 'language', class: 'text-orange-500' },
        { label: 'Naga Vani', class: 'text-red-500', icon: 'schedule' },
      ]"
    />
    <sidebar :show="show" :size="380" @close="show = false" />
  </div>
</template>
<script>
import dropdown from "@/components/dropdown.vue";
import sidebar from "@/components/sidebar.vue";
import baseButton from "@/components/button.vue";
import { showNotification } from "@/js/Notification.js";
export default {
  components: { dropdown, sidebar, baseButton },
  data() {
    return {
      show: false,
      toasts: [
        {
          text: "Success",
          icon: "done_all",
          toast: "success",
          item:{
            title:"Success Toast title",
            text:'Notification component with a clean slate to build off of, style and position.'
          }
        },
        {
          text: "Error",
          icon: "error",
          toast: "error",
          item:{
            title:"Error Toast title",
            text:'Notification component with a clean slate to build off of, style and position.'
          }
        },
        {
          text: "Warning",
          icon: "warning",
          toast: "warning",
          item:{
            title:"Warning Toast title",
            text:'Notification component with a clean slate to build off of, style and position.'
          }
        },
        {
          text: "Info",
          icon: "info",
          toast: "info",
          item:{
            title:"Information Toast title",
            text:'Notification component with a clean slate to build off of, style and position.'
          }
        },
      ],
    };
  },
  methods:{
    showToast(variant, item){
      return showNotification({...item, status: variant});
    },
  }
};
</script>
