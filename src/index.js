import K2Transfer from './components/K2Transfer'

module.exports.default = module.exports = {
  K2Transfer,
  install: function (Vue) {
    Vue.component('K2Transfer', K2Transfer)
  }
}
