import { merge } from 'lodash'
import devConfig from './dev'
import testingConfig from './testing'

const env = process.env.NODE_ENV || 'development'

const baseConfig = {
    env,
    isDev: env === 'development',
    isTest: env === 'testing',
    port: process.env.PORT || 4000,
}

let envConfig = {}

switch (env) {
    case 'dev':
    case 'development':
        envConfig = devConfig.config
        break
    case 'test':
    case 'testing':
        envConfig = testingConfig.config
        break
    default:
        envConfig = devConfig.config
}

export default merge(baseConfig, envConfig)
