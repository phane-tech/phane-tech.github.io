<template>
    <Menu as="div">
        <MenuButton>
            <slot name="button">
                Dropdown
            </slot>
        </MenuButton>
        <transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <MenuItems as="ul"
                class="absolute border left-4  w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ">
                <MenuItem v-for="(dropdown, index) in items" :key="index" v-slot="{ active }" as="li">
                <slot name="item" :data="dropdown" :active="active">
                    <div class="p-2 flex capitalize cursor-pointer">
                        {{ dropdown.label }}
                    </div>
                </slot>
                </MenuItem>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
export default {
    name: 'DropdownMenu',
    components: { Menu, MenuButton, MenuItems, MenuItem },
    props: {
        items: {
            type: Array,
            default: () => {
                return [];
            }
        }
    }
}
</script>