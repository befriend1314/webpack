import g from '../../global'

import template from './index.html'

import './style.css'

// 导出类
export default class {
  mount(container) {
    document.title = 'foo'
    container.innerHTML = template
    container.querySelector('.foo__gobar').addEventListener('click', () => {
      // 调用router.go方法加载 /bar 页面
      g.router.go('/bar')
    })
  }
}