<template>
  <ul>
    <Message
      v-for="(message, index) in messages"
      :key="index"
      :message="message"
    />
  </ul>
</template>

<script>
import Message from './Message'

export default {
  name: 'MessageList',
  components: {
    Message
  },
  props: ['messages']
}
</script>
