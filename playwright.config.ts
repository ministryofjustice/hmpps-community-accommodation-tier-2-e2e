import 'dotenv/config'
import { defineConfig, devices } from '@playwright/test'
import { TestOptions } from './testOptions'

export default defineConfig<TestOptions>({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  maxFailures: 1,
  workers: 1,
  reporter: 'html',
  timeout: process.env.CI ? 5 * 60 * 1000 : 2 * 60 * 1000,
  use: {
    trace: 'on-first-retry',
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'setupDev',
      testMatch: /.*\.setup\.ts/,
      use: { baseURL: 'https://community-accommodation-tier-2-dev.hmpps.service.justice.gov.uk' },
    },
    {
      name: 'dev',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
        baseURL: 'https://community-accommodation-tier-2-dev.hmpps.service.justice.gov.uk',
      },
      dependencies: ['setupDev'],
    },
    {
      name: 'setupLocal',
      testMatch: /.*\.setup\.ts/,
      use: {
        baseURL: 'http://localhost:3000',
        user: {
          name: 'Pom User',
          username: 'POM_USER',
          password: 'password123456',
        },
      },
    },
    {
      name: 'local',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
        baseURL: 'http://localhost:3000',
        person: {
          name: 'Aadland Bertrand',
          crn: 'X320741',
        },
        user: {
          name: 'JIM SNOW',
          username: 'jimsnowldap',
          password: 'secret',
        },
      },
      dependencies: ['setupLocal'],
    },
  ],
})
