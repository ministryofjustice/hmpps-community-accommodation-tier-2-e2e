import { expect } from '@playwright/test'
import { test } from '../test'
import {
  completeFundingInformationTask,
  completeAboutThePersonSection,
  enterCrn,
  startAnApplication,
} from '../steps/apply'

test('create a CAS-2 application', async ({ page, person }) => {
  await startAnApplication(page)
  await enterCrn(page, person.crn)
  await completeFundingInformationTask(page, person.name)
  await completeAboutThePersonSection(page, person.name)
  await expect(page.getByText('You have completed 2 of 2 sections')).toBeVisible()
})
