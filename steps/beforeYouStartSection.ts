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

export const completeConsentTask = async (page: Page, name: string) => {
  const confirmConsentPage = await ApplyPage.initialize(
    page,
    `Confirm ${name}'s consent to apply for Short-Term Accommodation (CAS-2)`,
  )

  await confirmConsentPage.checkRadio(`Yes, ${name} has given their consent`)
  await confirmConsentPage.fillDateFieldInGroup('When did they give consent?', {
    year: '2022',
    month: '3',
    day: '1',
  })
  await confirmConsentPage.clickSave()
}
