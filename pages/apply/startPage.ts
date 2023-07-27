import { BasePage } from '../basePage'

export class StartPage extends BasePage {
  async goto() {
    await this.page.goto('/')
  }

  async startNow() {
    await this.page.getByRole('button', { name: 'Start now' }).click()
  }
}
