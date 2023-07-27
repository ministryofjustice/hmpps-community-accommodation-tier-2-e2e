import { test } from '../test'
import { completeFundingInformationTask, enterCrn, startAnApplication } from '../steps/apply'

test('create a CAS-2 application with funding information', async ({ page, person }) => {
  await startAnApplication(page)

  await enterCrn(page, person.crn)

  await completeFundingInformationTask(page, person.name)
})
