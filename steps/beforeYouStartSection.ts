import { Page } from '@playwright/test'
import { ApplyPage } from '../pages/apply'

export const completeEligibilityTask = async (page: Page, name: string) => {
  const confirmEligibilityPage = await ApplyPage.initialize(
    page,
    `Check ${name} is eligible for Short-Term Accommodation (CAS-2)`,
  )

  await confirmEligibilityPage.checkRadio('Yes')
  await confirmEligibilityPage.clickSave()
}
