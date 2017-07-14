import g from '../../global'

import template from './index.html'

import './style.css'

// 导出类
export default class {
  mount(container) {
    document.title = 'bar'
    container.innerHTML = template
    container.querySelector('.bar__gofoo').addEventListener('click', () => {
      // 调用router.go方法加载 /bar 页面
      g.router.go('/foo')
    })
  }
}