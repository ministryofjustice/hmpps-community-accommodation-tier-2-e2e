import { expect } from '@playwright/test'
import { test } from '../test'
import {
  completeAboutThePersonSection,
  completeAreaAndFundingSection,
  completeBeforeYouStartSection,
  enterCrn,
  startAnApplication,
} from '../steps/apply'

test('create a CAS-2 application', async ({ page, person }) => {
  await startAnApplication(page)
  await enterCrn(page, person.crn)
  await completeBeforeYouStartSection(page, person.name)
  await completeAreaAndFundingSection(page, person.name)
  await completeAboutThePersonSection(page, person.name)
  await expect(page.getByText('You have completed 3 of 3 sections')).toBeVisible()
})
