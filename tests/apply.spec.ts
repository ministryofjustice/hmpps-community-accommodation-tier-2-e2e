import { test } from '../test'
import { completeFundingInformationTask, enterCrn, visitDashboard } from '../steps/apply'

test('create a CAS-2 application with funding information', async ({ page, person }) => {
  const dashboard = await visitDashboard(page)

  await enterCrn(dashboard, page, person.crn)

  await completeFundingInformationTask(page, person.name)
})
