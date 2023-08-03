import { Page } from '@playwright/test'
import { ApplyPage, TaskListPage } from '../pages/apply'

export const completeEqualityAndDiversityTask = async (page: Page, name: string) => {
  const taskListPage = new TaskListPage(page)
  await taskListPage.clickTask('Complete equality and diversity monitoring')

  await completeWillAnswerQuestionsPage(page, name)

  await completeDisabilityPage(page, name)
}

async function completeDisabilityPage(page: Page, name: string) {
  const disabilityPage = await ApplyPage.initialize(page, `Does ${name} have a disability?`)

  await disabilityPage.checkRadio('No', true)
  await disabilityPage.clickSave()
}

async function completeWillAnswerQuestionsPage(page: Page, name: string) {
  const willAnswerEqualityQuestionsPage = await ApplyPage.initialize(
    page,
    `Does ${name} want to answer the equality questions?`,
  )
  await willAnswerEqualityQuestionsPage.checkRadio('Yes')
  await willAnswerEqualityQuestionsPage.clickSave()
}
