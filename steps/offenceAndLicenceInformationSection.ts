import { ApplyPage, TaskListPage } from '../pages/apply'

export const completeCurrentOffencesTask = async (page, name) => {
  const taskListPage = new TaskListPage(page)
  await taskListPage.clickTask('Add current offences')

  await completeCurrentOffenceDetailsPage(page, name)
  await completeCurrentOffencesPage(page, name)
}

async function completeCurrentOffenceDetailsPage(page, name) {
  const currentOffenceDetailsPage = await ApplyPage.initialize(page, `Add ${name}'s current offence details`)
  await currentOffenceDetailsPage.fillField('Offence title and number', 'Stalking (08000)')
  await currentOffenceDetailsPage.chooseSelectItem('Offence category', 'Stalking or Harassment')
  await currentOffenceDetailsPage.fillDateFieldInGroup('When did they commit the offence?', {
    year: '2022',
    month: '3',
    day: '1',
  })
  await currentOffenceDetailsPage.fillField('How long were they sentenced for?', '6 months')
  await currentOffenceDetailsPage.fillField('Provide a summary of the offence', 'an offence summary')
  await currentOffenceDetailsPage.checkRadio('No')
  await currentOffenceDetailsPage.clickButton('Save and continue')
}

async function completeCurrentOffencesPage(page, name) {
  const currentOffenceDetailsPage = await ApplyPage.initialize(page, `Current offences for ${name}`)
  await currentOffenceDetailsPage.clickButton('Save and continue')
}

export const completeOffenceHistoryTask = async (page, name) => {
  const taskListPage = new TaskListPage(page)
  await taskListPage.clickTask('Add offending history')

  await completeAnyPreviousConvictionsPage(page, name)
}

async function completeAnyPreviousConvictionsPage(page, name) {
  const anyPreviousConvictionsPage = await ApplyPage.initialize(page, `Does ${name} have any previous convictions?`)
  await anyPreviousConvictionsPage.checkRadio('No')
  await anyPreviousConvictionsPage.clickSave()
}
