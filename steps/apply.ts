import { Page } from '@playwright/test'
import { ApplicationsDashboardPage, ApplyPage, CRNPage, StartPage, TaskListPage } from '../pages/apply'

export const startAnApplication = async (page: Page) => {
  // Start page
  // --------
  // visit the root url
  const startPage = new StartPage(page)
  await startPage.goto()

  // // confirm that I'm ready to start
  await startPage.startNow()

  // Applications dashboard
  // -----------------
  // Follow link to 'Start a new application'
  const applicationsDashboard = new ApplicationsDashboardPage(page)
  await applicationsDashboard.startNewApplication()
}

export const enterCrn = async (page: Page, crn: string) => {
  const crnPage = new CRNPage(page)
  await crnPage.enterCrn(crn)
  await crnPage.clickSave()
}

export const completeAreaAndFundingSection = async (page: Page, name: string) => {
  await completeFundingInformationTask(page, name)
}

const completeFundingInformationTask = async (page: Page, name: string) => {
  const taskListPage = new TaskListPage(page)
  await taskListPage.clickTask('Add funding information')

  const fundingInformationPage = await ApplyPage.initialize(
    page,
    `How will ${name} pay for their accommodation and service charge?`,
  )
  await fundingInformationPage.checkRadio('Personal money or savings')
  await fundingInformationPage.clickSave()
}

export const completeAboutThePersonSection = async (page: Page, name: string) => {
  await completeWillAnswerEqualityQuestionsTask(page, name)
}

const completeWillAnswerEqualityQuestionsTask = async (page: Page, name: string) => {
  const taskListPage = new TaskListPage(page)
  await taskListPage.clickTask('Complete equality and diversity monitoring')

  const willAnswerEqualityQuestionsPage = await ApplyPage.initialize(
    page,
    `Does ${name} want to answer the equality questions?`,
  )
  await willAnswerEqualityQuestionsPage.checkRadio('Yes, answer the equality questions (takes 2 minutes)')
  await willAnswerEqualityQuestionsPage.clickSave()
}
