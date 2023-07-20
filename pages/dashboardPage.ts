import { BasePage } from './basePage'

export class DashboardPage extends BasePage {
  async goto() {
    await this.page.goto('/')
  }

  async clickStartApplication() {
    await this.page.getByRole('button', { name: 'Start now' }).click()
  }
}
