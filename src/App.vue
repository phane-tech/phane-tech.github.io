<template>
  <div>
    <div> <v-select
    v-model="value"
    :items="items"
    label="Select Item"
    multiple
  >
    <template v-slot:selection="{ item, index }">
      <v-chip v-if="index < 2">
        <span>{{ item.title }}</span>
      </v-chip>
      <span
        v-if="index === 2"
        class="text-grey text-caption align-self-center"
      >
        (+{{ value.length - 2 }} others)
      </span>
    </template>
  </v-select>
    <v-select
      :items="items"
      density="compact"
      label="Compact"
    ></v-select>

    <v-select
      :items="items"
      density="comfortable"
      label="Comfortable"
    ></v-select>

    <v-select
      :items="items"
      label="Default"
    ></v-select>
  </div>
    <v-range-slider></v-range-slider>
    <v-slider color="red"></v-slider>
    <v-responsive
    class="mx-auto"
    max-width="344"
  >
    <v-text-field
      hint="Enter your password to access this website"
      label="Password"
      type="input"
      color="blue"
      v-model="phane"
    ></v-text-field>
  </v-responsive>
  </div>
</template>
<script>
export default{
  data(){
    return{
      items: ['foo', 'bar', 'fizz', 'buzz', 'fizzbuzz', 'foobar'],
      value: ['foo', 'bar', 'fizz'],
      phane: 0
    }
  }
}
</script>