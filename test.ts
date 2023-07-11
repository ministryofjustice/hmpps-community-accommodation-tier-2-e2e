import { test as base } from '@playwright/test'

import { TestOptions } from './testOptions'

export const test = base.extend<TestOptions>({
  person: [
    {
      name: 'Ben Davies',
      crn: 'X371199',
    },
    { option: true },
  ],
  user: [
    {
      name: 'Approved Premises E2ETester',
      username: process.env.HMPPS_AUTH_USERNAME as string,
      password: process.env.HMPPS_AUTH_PASSWORD as string,
    },
    { option: true },
  ],
})
