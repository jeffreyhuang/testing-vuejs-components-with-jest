<template>
  <div id="app">
    <MessageList :messages="messages" />
  </div>
</template>

<script>
import MessageList from './components/MessageList'

export default {
  name: 'App',
  components: {
    MessageList
  },
  data: () => ({
    messages: [
      'Hey John',
      'Howdy Paco'
    ]
  })
}
</script>
