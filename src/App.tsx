import { defineComponent } from 'vue'
import Hello from '@/pages/Hello'

export default defineComponent({
  name: 'App',
  inheritAttrs: false,
  render() {
    return (
      <div>
        <Hello />
      </div>
    )
  },
})
