import { BasePage } from '../basePage'

export class CRNPage extends BasePage {
  async enterCrn(crn: string) {
    await this.page.getByLabel("Enter the person's CRN").fill(crn)
  }
}
