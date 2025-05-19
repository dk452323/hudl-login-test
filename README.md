## 🧪 Playwright Test Setup

This project includes end-to-end tests written with [Playwright](https://playwright.dev/). Follow the steps below to install dependencies and run the tests.

### 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed (version 16 or later is recommended).

   ```bash
   npm install
   ```

3. **Install Playwright (if not already installed):**

   ```bash
   npx playwright install
   ```

   This installs the necessary browser binaries.

---

### 🚀 Running Tests

To run all Playwright tests:

```bash
npx playwright test
```

To run a specific test file:

```bash
npx playwright test tests/example.spec.ts
```

To run tests with UI mode (interactive mode):

```bash
npx playwright test --ui
```

---

### 📸 Viewing Test Reports

After running tests, you can view a detailed HTML report:

```bash
npx playwright show-report
```

---

### 🧰 Additional Scripts

Common scripts you can add to your `package.json` for convenience:

```json
"scripts": {
  "test": "playwright test",
  "test:ui": "playwright test --ui",
  "test:report": "playwright show-report"
}
```

Then run via:

```bash
npm run test
npm run test:ui
npm run test:report
```

---
### 🚨 To run the test you must first update the .env file environment variables to your unique username and password:
```bash
HUDL_EMAIL=your-email@example.com
HUDL_PASSWORD=your-secure-password
```

