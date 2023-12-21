import { Page } from '@playwright/test'
import { ApplyPage, TaskListPage } from '../pages/apply'

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

export const completeReferrerDetailsTask = async (page: Page) => {
  const taskListPage = new TaskListPage(page)
  await taskListPage.clickTask('Add your details')

  await completeConfirmDetailsPage(page)
  await completeJobTitlePage(page)
  await completeContactNumberPage(page)
}

async function completeConfirmDetailsPage(page: Page) {
  const confirmDetailsPage = await ApplyPage.initialize(page, `Confirm your details`)

  await confirmDetailsPage.clickSave()
}

async function completeJobTitlePage(page: Page) {
  const jobTitlePage = await ApplyPage.initialize(page, `What is your job title?`)

  await jobTitlePage.fillField('What is your job title?', 'POM')

  await jobTitlePage.clickSave()
}

async function completeContactNumberPage(page: Page) {
  const confirmDetailsPage = await ApplyPage.initialize(page, `What is your contact telephone number?`)

  await confirmDetailsPage.fillField('What is your contact telephone number?', '12345')

  await confirmDetailsPage.clickSave()
}

export const completeInformationNeededTask = async (page: Page, name: string) => {
  const taskListPage = new TaskListPage(page)
  await taskListPage.clickTask('Check information needed from the applicant')

  const checkInformationNeededPage = await ApplyPage.initialize(page, `Check information needed from ${name}`)

  await checkInformationNeededPage.checkRadio(`Yes`)
  await checkInformationNeededPage.clickSave()
}
