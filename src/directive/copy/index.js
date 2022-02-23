/**
 * v-copy
 * 复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */

import { ElMessage } from "element-plus"

 const directive = {
   mounted(el, binding) {
     el.copyData = binding.value
     el.addEventListener('click', () => handleCopy(el.copyData))
   },
   updated(el, binding) {
     el.copyData = binding.value
    },
   beforeUnmount(el) {
     el.removeEventListener('click',handleCopy)
    }
}
 
const handleCopy = target =>{
  const input = document.createElement('input')
  input.value = target
  document.body.appendChild(input);
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input);
  ElMessage.success('复制成功')
}
 
 export default directive
 