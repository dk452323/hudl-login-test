import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { LoginPage } from '../pages/LoginPage';

dotenv.config();

function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is not set`);
  return value;
}

const HUDL_EMAIL = getEnv('HUDL_EMAIL');
const HUDL_PASSWORD = getEnv('HUDL_PASSWORD');

test('Login to Hudl using Page Object Model', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login(HUDL_EMAIL, HUDL_PASSWORD);
  await expect(page).toHaveURL(/.*hudl\.com.*/);
  await loginPage.verifyLogin('Newcastle Jets FC');
});
