<template>
  <!-- Start of menu -->
  <Menu as="div" :class="dropdownClass">
    
    <!-- start of menu button -->
    <menu-button :class="buttonClass">
      <slot name="button">Dropdown</slot>
    </menu-button>
    <!-- end of Menu button -->

    <!-- start of menu -->
    <div class="relative">
      <!-- start of menu transition -->
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <!-- start of menu items -->
        <menu-items
          as="ul"
          :class="menuClass"
          class="max-h-[400px] overflow-auto inset-[0px_auto_auto_0px] rounded-[.46rem] px-5 py-3 absolute bg-white z-[107] min-w-[200px] shadow-[0px_0px_50px_0px_rgba(82,63,105,0.15)]"
        >
          <!-- start of menu item -->
          <menu-item
            v-for="(dropdown, index) in items"
            :key="index"
            v-slot="{ active }"
            as="li"
            class="capitalize py-[9px] cursor-pointer hover:opacity-100 opacity-80"
            :class="[itemClass, dropdown.class]"
          >
            <!-- start of menu item content -->
            <slot name="item" :data="dropdown" :active="active">
              <!-- Start of replaceble dropdown design -->
              <div class="flex items-center gap-3">
                <!-- start of icon -->
                <i
                  v-if="dropdown.icon"
                  class="material-icons-two-tone text-2xl"
                >
                  {{ dropdown.icon }}
                </i>
                <!-- end of icon -->

                <!-- start of label -->
                <span>{{ dropdown.label }}</span>
                <!-- end of label -->
              </div>
              <!-- end of replaceble dropdown design -->
            </slot>
            <!-- end of menu item content -->
          </menu-item>
          <!-- end of menu item -->
        </menu-items>
        <!-- end of menu items -->
      </transition>
      <!-- start of menu transition -->
    </div>
    <!-- end of menu -->
  </Menu>
  <!-- end of menu -->
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
export default {
  // Added name to avoid multi name error
  name: "dropdownMenu",
  components: { Menu, MenuButton, MenuItems, MenuItem },
  props: {
    // Add class to the menu
    dropdownClass: String,
    // Add class to the button
    buttonClass: String,
    // Add Class to the menu
    menuClass: String,
    // Add class to the dropdown items
    itemClass: String,
    // Used to loop the menu items
    items: {
      type: Array,
      default: () => [
        { label: "phaneendra", icon: "fingerprint", class: "text-green-500" },
      ],
    },
  },
};
</script>
