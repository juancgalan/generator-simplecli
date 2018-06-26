import { hello } from './app'

describe('hello', () => {
  it('should output hello', () => {
    expect(hello()).toBe('Hello')
  })
})