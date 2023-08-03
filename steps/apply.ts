import { Page } from '@playwright/test'
import { ApplicationsDashboardPage, CRNPage, StartPage } from '../pages/apply'
import { completeEligibilityTask } from './beforeYouStartSection'
import { completeEqualityAndDiversityTask } from './aboutThePersonSection'
import { completeFundingInformationTask } from './areaAndFundingSection'

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

export const completeBeforeYouStartSection = async (page: Page, name: string) => {
  await completeEligibilityTask(page, name)
}

export const completeAreaAndFundingSection = async (page: Page, name: string) => {
  await completeFundingInformationTask(page, name)
}

export const completeAboutThePersonSection = async (page: Page, name: string) => {
  await completeEqualityAndDiversityTask(page, name)
}
