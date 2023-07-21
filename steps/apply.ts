import { Page } from '@playwright/test'
import { DashboardPage } from '../pages/dashboardPage'
import { ApplyPage, CRNPage, TaskListPage } from '../pages/apply'

export const visitDashboard = async (page: Page): Promise<DashboardPage> => {
  const dashboard = new DashboardPage(page)
  await dashboard.goto()

  return dashboard
}

export const enterCrn = async (dashboard: DashboardPage, page: Page, crn: string) => {
  await dashboard.clickStartApplication()

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
