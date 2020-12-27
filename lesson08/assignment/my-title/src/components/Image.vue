<template>
  <div>
      <img :src="require(`../assets/${imageName}`)" width=100%>
  </div>
</template>


<script>
export default {
  name: 'image',
  props: ['imageName'],
  type: Object
}
</script>
