import { Page } from '@playwright/test'
import { ApplyPage, TaskListPage } from '../pages/apply'

export const completeWillAnswerEqualityQuestionsTask = async (page: Page, name: string) => {
  const taskListPage = new TaskListPage(page)
  await taskListPage.clickTask('Complete equality and diversity monitoring')

  const willAnswerEqualityQuestionsPage = await ApplyPage.initialize(
    page,
    `Does ${name} want to answer the equality questions?`,
  )
  await willAnswerEqualityQuestionsPage.checkRadio('Yes, answer the equality questions (takes 2 minutes)')
  await willAnswerEqualityQuestionsPage.clickSave()
}
