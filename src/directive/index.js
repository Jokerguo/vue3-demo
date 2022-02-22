/**
 * 全局注册指令
*/

const directives = import.meta.glob('./**/*.js') // 懒加载
// const temp = import.meta.globEager('./**/*.js') // 直接导入

export default function install(app) {
  for (const path in directives) { 
    const name = path.split('/')[1]
    directives[path]().then(module => { 
      app.directive(name,module.default)
    })
  }
}