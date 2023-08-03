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
}
