import axios from 'axios'
import { start } from './server'
import config from './config'
import { connect } from './utils/db'

jest.unmock('axios')

let server
let baseURL
let api

jest.mock('./utils/db', () => {
  return {
    connect: jest.fn(() => {
      return 'bar'
    }),
  }
})

beforeAll(async () => {
  server = await start()

  baseURL = `http://localhost:${config.port}/`
  api = axios.create({ baseURL })
})

afterAll(() => server.close())

describe('smoke test', () => {
  it('should return pong on ping', async () => {
    const data = await api.get('/ping').then(response => response.data)
    expect(data).toEqual('pong')
  })

  it('should not connect to db but call the mock connect function', () => {
    const { mock } = connect
    expect(mock.calls).toHaveLength(1)
    expect(mock.results[0]).toMatchInlineSnapshot(`
      Object {
        "type": "return",
        "value": "bar",
      }
    `)
  })
})
