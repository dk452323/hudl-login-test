import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly teamNameDisplay: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = this.page.getByRole('button', { name: /^Continue$/ });
    this.teamNameDisplay = page.locator('.hui-primaryteamswitcher__display-name').first();
  }

  async navigate() {
    await this.page.goto('https://www.hudl.com/login');
  }

  async login(email: string, password: string) {
    await this.usernameInput.fill(email);
    await this.submitButton.click();
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async verifyLogin(teamName: string) {
    await expect(this.teamNameDisplay).toBeVisible();
    await expect(this.teamNameDisplay).toContainText(teamName);
  }
}
