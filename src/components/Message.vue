<template>
  <li
    style="margin-top: 10px"
    class="message"
    data-test="test-message"
  >
    <span>
      {{ message }}
    </span>
  </li>
</template>

<script>
export default {
  props: ['message']
}
</script>
