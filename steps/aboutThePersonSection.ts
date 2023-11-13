import { Page } from '@playwright/test'
import { ApplyPage, TaskListPage } from '../pages/apply'

export const completeEqualityAndDiversityTask = async (page: Page, name: string) => {
  const taskListPage = new TaskListPage(page)
  await taskListPage.clickTask('Complete equality and diversity monitoring')

  await completeWillAnswerQuestionsPage(page, name)

  await completeDisabilityPage(page, name)

  await completeSexAndGenderPage(page)

  await completeSexualOrientationPage(page, name)

  await completeEthnicGroupPage(page, name)

  await completeWhiteBackgroundPage(page, name)

  await completeReligionPage(page, name)

  await completeMilitaryVeteranPage(page, name)

  await completeCareLeaverPage(page, name)

  await completeParentalOrCarerResponsibilitiesPage(page, name)

  await completeMaritalStatusPage(page, name)
}

async function completeMaritalStatusPage(page: Page, name) {
  const maritalStatusPage = await ApplyPage.initialize(
    page,
    `What is ${name}'s legal marital or registered civil partnership status?`,
  )
  await maritalStatusPage.checkRadio('Married', true)
  await maritalStatusPage.clickSave()
}

async function completeParentalOrCarerResponsibilitiesPage(page: Page, name) {
  const parentalOrCarerResponsibilitiesPage = await ApplyPage.initialize(
    page,
    `Does ${name} have parental or carer responsibilities?`,
  )
  await parentalOrCarerResponsibilitiesPage.checkRadio('Yes', true)
  await parentalOrCarerResponsibilitiesPage.clickSave()
}

async function completeCareLeaverPage(page: Page, name) {
  const careLeaverPage = await ApplyPage.initialize(page, `Is ${name} a care leaver?`)
  await careLeaverPage.checkRadio('Yes', true)
  await careLeaverPage.clickSave()
}

async function completeMilitaryVeteranPage(page: Page, name) {
  const militaryVeteranPage = await ApplyPage.initialize(page, `Is ${name} a military veteran?`)
  await militaryVeteranPage.checkRadio('Yes', true)
  await militaryVeteranPage.clickSave()
}

async function completeReligionPage(page: Page, name) {
  const religionPage = await ApplyPage.initialize(page, `What is ${name}'s religion?`)
  await religionPage.checkRadio('Agnostic', true)
  await religionPage.clickSave()
}

async function completeWhiteBackgroundPage(page: Page, name) {
  const whiteBackgroundPage = await ApplyPage.initialize(
    page,
    `Which of the following best describes ${name}'s White background?`,
  )
  await whiteBackgroundPage.checkRadio('Irish', true)
  await whiteBackgroundPage.clickSave()
}

async function completeEthnicGroupPage(page: Page, name) {
  const ethnicGroupPage = await ApplyPage.initialize(page, `What is ${name}'s ethnic group?`)
  await ethnicGroupPage.checkRadio('White', true)
  await ethnicGroupPage.clickSave()
}

async function completeSexualOrientationPage(page: Page, name) {
  const sexualOrientationPage = await ApplyPage.initialize(
    page,
    `Which of the following best describes ${name}'s sexual orientation?`,
  )
  await sexualOrientationPage.checkRadio('Gay', true)
  await sexualOrientationPage.clickSave()
}

async function completeSexAndGenderPage(page: Page) {
  const sexandGenderPage = await ApplyPage.initialize(page, 'Sex and gender identity')
  await sexandGenderPage.checkRadio('Male', true)
  await sexandGenderPage.checkRadio('Yes')
  await sexandGenderPage.clickSave()
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

export const completeAddressHistoryTask = async (page: Page, name: string) => {
  const taskListPage = new TaskListPage(page)
  await taskListPage.clickTask('Add address history')

  await completePreviousAddressPage(page, name)
}

async function completePreviousAddressPage(page: Page, name: string) {
  const previousAddressPage = await ApplyPage.initialize(page, `Did ${name} have an address before entering custody?`)
  await previousAddressPage.checkRadio('Yes')
  await previousAddressPage.fillFieldByGroupAndLabel('What was the address?', 'Address line 1', '1 Example Road')
  await previousAddressPage.fillFieldByGroupAndLabel('What was the address?', 'Town or city', 'Anytown')
  await previousAddressPage.fillFieldByGroupAndLabel('What was the address?', 'Postcode', 'AB1 2CD')

  await previousAddressPage.clickSave()
}
