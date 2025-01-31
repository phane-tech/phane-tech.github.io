<template>
  <transition-root as="template" :show="show">
    <Dialog
      class="relative z-10"
      @close="backdropClose ? $emit('close', false) : ''"
      :class="dialogClass"
    >
      <!-- start of the backdrop -->
      <transition-child
        as="template"
        :show="isBackDrop"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 w-full h-full pointer-events-auto bg-black bg-opacity-20 backdrop-blur-sm"
          :class="backdropClass"
        />
      </transition-child>
      <!-- end of the backdrop -->

      <!-- start of the modal -->
      <div class="fixed inset-0 overflow-hidden" :class="modalClass">
        <!-- start of the body -->
        <div
          class="pointer-events-none fixed inset-y-0 right-0 flex"
          :class="modalBody"
        >
          <transition-child
            as="template"
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <dialog-panel
              class="pointer-events-auto relative w-screen"
              :style="`width:${size}px`"
              :class="pannelClass"
            >
              <!-- Start of the body -->
              <div
                class="flex h-full flex-col overflow-hidden bg-white border border-gray-100"
                :class="pannelBodyClass"
              >
                <!-- start of header  slot -->
                <template v-if="isHeader">
                  <slot name="header">
                    <!-- start of header -->
                    <div
                      class="bg-gray-50 border-gray-100 p-4 gap-7 border-b flex justify-between items-start"
                    >
                      <div v-if="header - description || headerTitle">
                        <!-- start of title -->
                        <h4
                          v-if="headerTitle"
                          class="text-lg mb-1 font-semibold"
                        >
                          {{ headerTitle }}
                        </h4>
                        <!-- End of title -->

                        <!-- start of description -->
                        <p
                          v-if="headerDescription"
                          class="text-md text-gray-500 leading-6"
                        >
                          {{ headerDescription }}
                        </p>
                        <!-- End of description -->
                      </div>
                      <!-- start of header close icon -->
                      <i
                        v-if="headerClose"
                        class="material-icons-two-tone text-2xl text-gray-400 hover:text-gray-900 transition duration-500 cursor-pointer"
                        @click="headerClose ? $emit('close') : ''"
                        >close
                      </i>
                      <!-- end of the header close icon -->
                    </div>
                    <!-- end of header -->
                  </slot>
                </template>
                <!-- end of header slot -->
                <div class="grow overflow-auto p-4">
                  <slot name="body" />
                </div>
                <!-- start of the footer text -->
                <template v-if="isFooter">
                  <slot name="footer" />
                </template>
                <!-- end of footer text -->
              </div>
              <!-- end of the body -->
            </dialog-panel>
          </transition-child>
        </div>
        <!-- end of the body -->
      </div>
      <!-- end of the modal -->
    </Dialog>
  </transition-root>
</template>

<script>
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
export default {
  name: "SidebarComponent",
  components: {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
  },
  props: {
    // To Hide and show the component
    show: {
      default: false,
      type: Boolean,
      required: true,
    },
    // To hide and show the backdrop
    backdropClose: {
      default: true,
      type: Boolean,
    },
    // To define the size of the sidebar
    size: {
      default: 400,
      type: Number,
    },
    // To define the header on close button
    headerClose: {
      default: true,
      type: Boolean,
    },
    // To hide and show the header
    isHeader: {
      default: true,
      type: Boolean,
    },
    // To Hide and show the footer
    isFooter: {
      default: true,
      type: Boolean,
    },
    // To pass the heading
    headerTitle: String,
    // To pass the header description
    headerDescription: String,
    // To show and hide the backdrop
    isBackDrop: String,
    // To define the CSS class for dialog
    dialogClass: String,
    // To define the backdrop class
    backdropClass: String,
    // To define the modal class
    modalClass: String,
    // To Define the modal body class
    modalBody: String,
    // To define the pannel class
    pannelClass: String,
    // To Define the pannel body class
    pannelBodyClass: String,
  },
};
</script>
