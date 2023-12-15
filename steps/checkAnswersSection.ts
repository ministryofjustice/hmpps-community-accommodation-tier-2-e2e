import { Page } from '@playwright/test'
import { ApplyPage, TaskListPage } from '../pages/apply'

export const completeCheckAnswersTask = async (page: Page) => {
  const taskListPage = new TaskListPage(page)
  await taskListPage.clickTask('Check your answers')
  const checkAnswersPage = await ApplyPage.initialize(page, `Check your answers`)
  await checkAnswersPage.clickContinue()
}
