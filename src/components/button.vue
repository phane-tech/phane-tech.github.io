<template>
  <button
    class="relative flex items-center gap-2 overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-200 hover:bg-neutral-800 hover:ring-offset-2 active:ring-2 active:ring-neutral-800"
  >
    <!-- start of lefside icon -->
    <span v-if="icon" class="material-icons-two-tone text-2xl" :class="iconClass">{{ icon }}</span>
    <!-- end of left side icon -->

    <!-- start of text -->
    <span v-if="text" class="capitalize" :class="buttonTextClass">{{ text }}</span>
    <!-- end of text -->
    
    <!-- start of right side icon -->
    <span v-if="rightIcon" class="material-icons-two-tone text-2xl" :class="iconClass">
        {{rightIcon}}
    </span>
    <!-- end of right side icon -->
  </button>
</template>
<script>
export default {
  name: "baseButton",
  props: {
    buttonTextClass: String,
    text: String,
    rightIcon: String,
    icon: String,
    iconClass: String,
  },
};
</script>
