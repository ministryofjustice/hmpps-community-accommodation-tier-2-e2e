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

export const completeFundingInformationTask = async (page: Page, name: string) => {
  const taskListPage = new TaskListPage(page)
  await taskListPage.clickTask('Add funding information')

  const fundingInformationPage = await ApplyPage.initialize(
    page,
    `How will ${name} pay for their accommodation and service charge?`,
  )
  await fundingInformationPage.checkRadio('Personal money or savings')
  await fundingInformationPage.clickSave()
}
