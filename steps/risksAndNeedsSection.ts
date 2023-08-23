import { Page } from '@playwright/test'
import { ApplyPage, TaskListPage } from '../pages/apply'

export const completeHealthNeedsTask = async (page: Page, name: string) => {
  const taskListPage = new TaskListPage(page)
  await taskListPage.clickTask('Add health needs')

  await reviewGuidancePage(page, name)
  await completeSubstanceMisusePage(page, name)
  await completePhysicalHealthPage(page, name)
  await completeMentalHealthPage(page, name)
  await completeCommunicationAndLanguagePage(page, name)
  await completeLearningDifficultiesPage(page, name)
  await completeBrainInjuryPage(page, name)
  await completeOtherHealthPage(page, name)
}

async function reviewGuidancePage(page: Page, name) {
  const guidancePage = await ApplyPage.initialize(page, `Request health information for ${name}`)
  await guidancePage.clickContinue()
}

async function completeSubstanceMisusePage(page: Page, name) {
  const substanceMisusePage = await ApplyPage.initialize(page, `Health needs for ${name}`)

  await substanceMisusePage.checkRadioInGroup('take any illegal substances', 'No')
  await substanceMisusePage.checkRadioInGroup('drug and alcohol service', 'No')
  await substanceMisusePage.checkRadioInGroup('substitute medication', 'No')

  await substanceMisusePage.clickSave()
}

async function completePhysicalHealthPage(page: Page, name) {
  const physicalHealthPage = await ApplyPage.initialize(page, `Physical health needs for ${name}`)

  // we can't use the normal checkRadioInGroup() helper due to follow-on yes/no radios
  // triggering Error: strict mode violation
  await page.getByRole('group', { name: 'Do they have any physical health needs?' }).locator('label').nth(4).click()
  await physicalHealthPage.checkRadioInGroup('receiving any medical treatment', 'No')
  await physicalHealthPage.checkRadioInGroup('receiving any medication', 'No')
  await physicalHealthPage.checkRadioInGroup('live independently', 'Yes')
  await physicalHealthPage.checkRadioInGroup('additional support', 'No')

  await physicalHealthPage.clickSave()
}

async function completeMentalHealthPage(page: Page, name) {
  const mentalHealthPage = await ApplyPage.initialize(page, `Mental health needs for ${name}`)

  await mentalHealthPage.checkRadioInGroup('any mental health needs', 'No')
  await mentalHealthPage.checkRadioInGroup('community mental health services', 'No')

  // we can't use the normal checkRadioInGroup() helper due to follow-on yes/no radios
  // triggering Error: strict mode violation
  await page.locator('css=input[name="hasPrescribedMedication"][value="no"]').click()

  await mentalHealthPage.clickSave()
}

async function completeCommunicationAndLanguagePage(page: Page, name) {
  const communicationPage = await ApplyPage.initialize(page, `Communication and language needs for ${name}`)

  await communicationPage.checkRadioInGroup('additional communication needs', 'No')
  await communicationPage.checkRadioInGroup('interpreter', 'No')
  await communicationPage.checkRadioInGroup('need any support', 'No')

  await communicationPage.clickSave()
}

async function completeLearningDifficultiesPage(page: Page, name) {
  const learningPage = await ApplyPage.initialize(page, `Learning difficulties and neurodiversity for ${name}`)

  await learningPage.checkRadioInGroup('additional needs', 'No')
  await learningPage.checkRadioInGroup('vulnerable', 'No')
  await learningPage.checkRadioInGroup('difficulties interacting', 'No')
  await learningPage.checkRadioInGroup('additional support', 'No')

  await learningPage.clickSave()
}

async function completeBrainInjuryPage(page: Page, name) {
  const brainInjuryPage = await ApplyPage.initialize(page, `Brain injury needs for ${name}`)

  await brainInjuryPage.checkRadioInGroup('brain injury?', 'No')
  await brainInjuryPage.checkRadioInGroup('vulnerable', 'No')
  await brainInjuryPage.checkRadioInGroup('difficulties interacting', 'No')
  await brainInjuryPage.checkRadioInGroup('additional support', 'No')

  await brainInjuryPage.clickSave()
}

async function completeOtherHealthPage(page: Page, name) {
  const otherHealthPage = await ApplyPage.initialize(page, `Other health needs for ${name}`)

  // we can't use the normal checkRadioInGroup() helper due to follow-on yes/no radios
  // triggering Error: strict mode violation
  await page.locator('css=input[name="hasLongTermHealthCondition"][value="no"]').click()

  await otherHealthPage.checkRadioInGroup('seizures', 'No')
  await otherHealthPage.checkRadioInGroup('treatment for cancer', 'No')

  await otherHealthPage.clickSave()
}
