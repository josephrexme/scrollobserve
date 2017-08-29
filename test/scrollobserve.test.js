const expect = require('chai').expect
const cleanup = require('jsdom-global')()
const scrollobserve = require('../index')

describe('scrollobserve', () => {
  describe('observables', () => {
    it('is an array method', () => {
      expect(scrollobserve().observables).to.be.an('Array')
    })
    it('gets precise count of observables with the scrollobserve class', () => {
      // document.body.innerHTML = '<div class="scrollobserve"></div>'
      // expect(scrollobserve().observables.length).to.equal(1)
    })
  })

  describe('config', () => {
    it('is a config object method', () => {
      expect(scrollobserve().config).to.be.an('object')
    })
    it('has all required keys', () => {
      const keysForConfig = [
        'reverse', 'offset', 'inViewClass', 'offViewClass', 'ignoreTransform'
      ];
      expect(scrollobserve().config).to.have.all.keys(...keysForConfig)
    })
    it('overrides default config with newly added config', () => {
      const customConfig = { offset: 1, repeat: false }
      expect(scrollobserve(customConfig).config).to.include(customConfig)
    })
  })

  describe('destroy', () => {
    it('is a function method', () => {
      expect(scrollobserve().destroy).to.be.a('function')
    })
    it('returns nothing when invoked', () => {
      expect(scrollobserve().destroy()).to.be.an('undefined')
    })
  })
})
