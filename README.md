# Playwright Automation

> 📝 This README was generated with the assistance of **Amazon Q (AI)** — see [AI Assistance](#ai-assistance) section for details.

A test automation project built with [Playwright](https://playwright.dev/) and JavaScript, targeting the [Practice Test Automation](https://practicetestautomation.com) website.

## 🚀 Live HTML Report

The Playwright HTML report is deployed and accessible at:

🔗 **[https://playwright-automation.vercel.app](https://playwright-automation.vercel.app)**

## 🎥 Demo Video

A demo recording of the test execution is available at:

📁 `tests/Reports/2026-03-22 22-52-39.mp4`

## Tech Stack

- **Playwright** v1.58.2
- **JavaScript** (ES Modules)
- **Browser** - Chromium
- **CI/CD** - GitHub Actions
- **Deployment** - Vercel

## Project Structure

```
e:\Playwright\
├── .github/
│   └── workflows/
│       └── playwright.yml            # GitHub Actions CI/CD pipeline
├── ss/                               # Screenshots on test failure
├── test-results/                     # Test artifacts
├── tests/
│   ├── PracticetestAutomation/
│   │   ├── Pages/
│   │   │   └── ExceptionPage.js      # Page Object Model
│   │   ├── Fixture.js                # Playwright Fixtures
│   │   ├── LoginTest.spec.js         # Login test cases
│   │   ├── PracticeException.spec.js # Exception handling tests
│   │   └── tableTest.spec.js         # Table tests (in progress)
│   ├── Reports/
│   │   ├── index.html                # HTML report
│   │   └── 2026-03-22 22-52-39.mp4  # Demo video
│   ├── amazon.spec.js
│   └── example.spec.js
├── playwright.config.js              # Playwright configuration
└── package.json
```

## Test Cases

### LoginTest.spec.js
| Test | Description |
|---|---|
| Login via automation | Valid login, verify success page, logout |
| Login using invalid name | Verify error message for invalid username |
| Incorrect password check | Verify error message for invalid password |

### PracticeException.spec.js
| Test | Description |
|---|---|
| Add first row | Verify dynamic row addition |
| TC2_Exceptions | Element interactability exception |

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version)
- [Git](https://git-scm.com/)

### Installation

```bash
# clone the repository
git clone https://github.com/harishrajarajan89/playwright-automation.git

# navigate to project
cd playwright-automation

# install dependencies
npm install

# install playwright browsers
npx playwright install
```

### Running Tests

```bash
# run all tests
npx playwright test

# run specific test file
npx playwright test tests/PracticetestAutomation/LoginTest.spec.js

# run tests in headed mode (see browser)
npx playwright test --headed

# run tests in debug mode
npx playwright test --debug

# view html report
npx playwright show-report

# run with full options (chromium only, single thread, trace enabled, headed)
npx playwright test --project=chromium --workers=1 --trace=on --headed
```

## Features

- ✅ Login flow with valid/invalid credentials
- ✅ Assertions — `toHaveTitle`, `toHaveURL`, `toContainText`, `toBeVisible`
- ✅ Screenshots on test failure saved to `ss/` folder
- ✅ Soft assertions (`expect.soft`)
- ✅ Page Object Model (`ExceptionPage.js`)
- ✅ Fixtures (`Fixture.js`)
- ✅ `test.describe` for grouping tests
- ✅ `beforeEach` / `afterEach` hooks
- ✅ CI/CD pipeline with GitHub Actions
- ✅ HTML report deployed on Vercel

## CI/CD

Tests automatically run on every `push` and `pull_request` to `main` or `master` branch via GitHub Actions. The HTML report is uploaded as an artifact and retained for 30 days.

## AI Assistance

The following tasks were assisted by AI:

| Area | What AI helped with |

| README | Generated and maintained this README file |
| Git setup | Guided Git installation, PATH configuration, and pushing to GitHub |
| Learning roadmap | Provided structured Playwright learning path with examples |
