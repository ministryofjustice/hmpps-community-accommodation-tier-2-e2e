import { expect } from '@playwright/test'
import { test } from '../test'

test('view a submitted application as an admin', async ({ page, adminUser }) => {
  await signOut(page)
  await expect(page.locator('h1')).toContainText('Sign in')
  await signInAsAdmin(page, adminUser)
  await expect(page.locator('h1')).toContainText('CAS2: Short-term accommodation')
})

const signOut = async page => {
  await page.goto('/sign-out')
}

const signInAsAdmin = async (page, adminUser) => {
  await page.getByLabel('Username').fill(adminUser.username)
  await page.getByLabel('Password').fill(adminUser.password)
  await page.getByRole('button', { name: 'Sign in' }).click()
}
