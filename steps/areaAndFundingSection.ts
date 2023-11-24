import { Page } from '@playwright/test'
import { ApplyPage, TaskListPage } from '../pages/apply'

export const completeFundingInformationTask = async (page: Page, name: string) => {
  const taskListPage = new TaskListPage(page)
  await taskListPage.clickTask('Add funding information')

  const fundingInformationPage = await ApplyPage.initialize(
    page,
    `How will ${name} pay for their accommodation and service charge?`,
  )
  await fundingInformationPage.checkRadio('Personal money')
  await fundingInformationPage.clickSave()
  await completeNationalInsurancePage(page, name)
}

async function completeNationalInsurancePage(page: Page, name: string) {
  const willAnswerEqualityQuestionsPage = await ApplyPage.initialize(
    page,
    `What is ${name}'s National Insurance number? (Optional)`,
  )
  await willAnswerEqualityQuestionsPage.clickSave()
}

export const completeAreaInformationTask = async (page: Page, name: string) => {
  const taskListPage = new TaskListPage(page)
  await taskListPage.clickTask('Add exclusion zones and preferred areas')

  const areaInformationPage = await ApplyPage.initialize(page, `First preferred area for ${name}`)

  await areaInformationPage.fillField('Preferred area', 'London')
  await areaInformationPage.fillField('Reason for preference', 'Family')

  await areaInformationPage.clickSave()
}
