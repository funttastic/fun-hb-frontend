import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dynamicImport from 'vite-plugin-dynamic-import'
import fs from 'fs'
import https from 'https'
import { env } from 'process'
import * as os from 'os'

const frontendPort: number = env['FUN_FRONTEND_PORT'] ? Number(env['FUN_FRONTEND_PORT']) : 50000

const apiProtocol: string = env['FUN_CLIENT_PROTOCOL'] || 'https'
const apiHost: string = env['FUN_CLIENT_HOST'] || 'localhost'
const apiPort: number = env['FUN_CLIENT_PORT'] ? Number(env['FUN_CLIENT_PORT']) : 50001
const apiPrefix: string = env['FUN_CLIENT_PREFIX'] || ''

const clientCertificatePath: string = env['CLIENT_CERTIFICATE_PATH'] || path.join(os.homedir(), 'shared', 'common', 'certificates', 'client_cert.pem')
const clientKeyPath: string = env['CLIENT_KEY_CERTIFICATE_PATH'] || path.join(os.homedir(), 'shared', 'common', 'certificates', 'client_key.pem')
const certificationAuthorityCertificatePath: string = env['CERTIFICATION_AUTHORITY_CERTIFICATE_PATH'] || path.join(os.homedir(), 'shared', 'common', 'certificates', 'ca_cert.pem')

const clientCert = fs.readFileSync(clientCertificatePath)
const clientKey = fs.readFileSync(clientKeyPath)
const certificationAuthorityCertificate = fs.readFileSync(certificationAuthorityCertificatePath)

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  server: {
    port: frontendPort,
    proxy: {
      '/api': {
        target: `${apiProtocol}://${apiHost}:${apiPort}${apiPrefix}`,
        changeOrigin: true,
        secure: true,
        rewrite: (path) => {
          return path.replace(/^\/api/, '/')
        },
        configure: (_proxy, options) => {
          options.agent = new https.Agent({
            key: clientKey,
            cert: clientCert,
            ca: certificationAuthorityCertificate,
            rejectUnauthorized: false, // To allow self-signed certificates
          })
        },
      },
    },
  },
  plugins: [react({
    babel: {
      plugins: [
        'babel-plugin-macros'
      ]
    }
  }),
  dynamicImport()],
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'build'
  }
})
