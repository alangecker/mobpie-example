const MobpieBackend = require('../mobpie')
const observable = require('mobx').observable
const httpServer = require('http').createServer()
const backend = new MobpieBackend(httpServer)
httpServer.listen(5000)


let text = observable({
  welcome: 'Hello World'
})


backend.register('demo', {
  getText(req) {
    req.send(null, text.welcome)
  },
  setText(req) {
    text.welcome = req.params[0]
    console.log(`set to '${req.params[0]}'`);
  }
})
