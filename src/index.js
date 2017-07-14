import g from './global'

import foo from './views/foo'
import bar from './views/bar'
const routes = {
  '/foo': foo,
  '/bar': bar
}
class Router {
  start() {
    window.addEventListener('popstate', () => {
      this.load(location.pathname)
    })
    this.load(location.pathname)
  }
  go(path) {
    history.pushState({}, '', path)
    this.load(path)
  }
  load(path) {
    import('./views' + path + '/index.js').then(module => {
    // export default ... 的内容通过module.default访问
    const View = module.default
    const view = new View()
    view.mount(document.body)
  })
}


g.router = new Router()

g.router.start()
