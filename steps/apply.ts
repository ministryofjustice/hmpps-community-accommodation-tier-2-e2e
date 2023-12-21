import { Page } from '@playwright/test'

import {
  ApplicationsDashboardPage,
  BeforeYouStartPage,
  DashboardPage,
  FindByPrisonNumberPage,
  TaskListPage,
} from '../pages/apply'
import {
  completeConsentTask,
  completeEligibilityTask,
  completeInformationNeededTask,
  completeReferrerDetailsTask,
} from './beforeYouStartSection'
import {
  completeAddressHistoryTask,
  completeEqualityAndDiversityTask,
  completePersonalInformationTask,
} from './aboutThePersonSection'
import { completeHealthNeedsTask, completeRiskToSelfTask, completeRoshTask } from './risksAndNeedsSection'
import { completeAreaInformationTask, completeFundingInformationTask } from './areaAndFundingSection'
import {
  completeCurrentOffencesTask,
  completeHDCLicenceAndCPPDetailsTask,
  completeOffenceHistoryTask,
} from './offenceAndLicenceInformationSection'
import { completeCheckAnswersTask } from './checkAnswersSection'

export const startAnApplication = async (page: Page) => {
  // Start page
  // --------
  // visit the root url
  const dashboardPage = new DashboardPage(page)
  await dashboardPage.goto()

  // Follow link to 'new referral'
  await dashboardPage.makeNewReferral()

  // // confirm that I'm ready to start
  const beforeYouStartPage = new BeforeYouStartPage(page)
  await beforeYouStartPage.startNow()

  // Applications dashboard
  // -----------------
  // Follow link to 'Start a new application'
  const applicationsDashboard = new ApplicationsDashboardPage(page)
  await applicationsDashboard.startNewApplication()
}

export const enterPrisonerNumber = async (page: Page, prisonNumber: string) => {
  const prisonNumberPage = new FindByPrisonNumberPage(page)
  await prisonNumberPage.enterPrisonNumber(prisonNumber)
  await prisonNumberPage.clickButton('Search for applicant')
}

export const confirmApplicant = async (page: Page) => {
  const confirmApplicantPage = new TaskListPage(page)
  confirmApplicantPage.clickButton('Confirm and continue')
}

export const completeBeforeYouStartSection = async (page: Page, name: string) => {
  await completeEligibilityTask(page, name)
  await completeConsentTask(page, name)
  await completeReferrerDetailsTask(page)
  await completeInformationNeededTask(page, name)
}

export const completeAreaAndFundingSection = async (page: Page, name: string) => {
  await completeAreaInformationTask(page, name)
  await completeFundingInformationTask(page, name)
}

export const completeAboutThePersonSection = async (page: Page, name: string) => {
  await completePersonalInformationTask(page, name)
  await completeEqualityAndDiversityTask(page, name)
  await completeAddressHistoryTask(page, name)
}

export const completeRisksAndNeedsSection = async (page: Page, name: string) => {
  await completeHealthNeedsTask(page, name)
  await completeRiskToSelfTask(page, name)
  await completeRoshTask(page, name)
}

export const completeOffenceAndLicenceInformationSection = async (page: Page, name: string) => {
  await completeCurrentOffencesTask(page, name)
  await completeOffenceHistoryTask(page, name)
  await completeHDCLicenceAndCPPDetailsTask(page, name)
}

export const completeCheckAnswersSection = async (page: Page) => {
  await completeCheckAnswersTask(page)
}
