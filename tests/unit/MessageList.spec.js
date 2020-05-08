// working code:
// https://github.com/alexjoverm/vue-testing-series/blob/Test-Styles-and-Structure-in-Vue-js-and-Jest/test/MessageList.test.js

import { mount } from '@vue/test-utils'
import MessageList from '@/components/MessageList'
import Message from '@/components/Message'

describe('MessageList.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(MessageList, {
      propsData: {
        messages: ['Cat']
      }
    })
  })

  it('has received ["Cat"] as the message property', () => {
    expect(wrapper.vm.messages).toEqual(['Cat'])
  })

  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('is a MessageList component', () => {
    expect(wrapper.is(MessageList)).toBe(true)

    // CSS selector
    expect(wrapper.is('ul')).toBe(true)
  })

  it('contains a Message component', () => {
    expect(wrapper.contains(Message)).toBe(true)

    // CSS selector
    expect(wrapper.contains('.message')).toBe(true)
  })

  // Vue Instance
  it('Both MessageList and Message are vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.find(Message).isVueInstance()).toBe(true)
  })

  it('Message has a "message" property equals to "Cat', () => {
    expect(wrapper.find(Message).props('message')).toBe('Cat')
  })

  // Structure
  it('Message element exists', () => {
    expect(wrapper.find('.message').exists()).toBe(true)
  })

  it('Message is not empty', () => {
    expect(wrapper.find(Message).isEmpty()).toBe(false)
  })

  it("Message has a class attribute set to 'message'", () => {
    expect(wrapper.find(Message).attributes('class')).toBe('message')

    // data attributes
    expect(wrapper.find(Message).attributes('data-test')).toBe('test-message')
  })

  // Style
  it('Message component has the .message class', () => {
    expect(wrapper.find(Message).classes()).toContain('message')
  })

  it('Message component has style margin-top 10px', () => {
    expect(wrapper.find(Message).attributes('style')).toBe('margin-top: 10px;')
  })
})
