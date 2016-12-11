const MobpieBackend = require('mobpie')
const observable = require('mobx').observable
const httpServer = require('http').createServer()
const backend = new MobpieBackend(httpServer)
httpServer.listen(5000)


let text = observable({
  welcome: 'Hello World'
})


backend.register('demo', {
  getText(cb) {
    cb(null, text.welcome)
  },
  setText(value) {
    text.welcome = value
    console.log(`set to '${value}'`);
  }
})
