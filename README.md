# Playwright Automation

A test automation project built with [Playwright](https://playwright.dev/) and JavaScript, targeting the [Practice Test Automation](https://practicetestautomation.com) website.

## Tech Stack

- **Playwright** v1.58.2
- **JavaScript** (ES Modules)
- **Browser** - Chromium
- **CI/CD** - GitHub Actions

## Project Structure

```
e:\Playwright\
├── .github/
│   └── workflows/
│       └── playwright.yml       # GitHub Actions CI/CD pipeline
├── ss/                          # Screenshots on test failure
├── test-results/                # Test artifacts
├── tests/
│   └── PracticetestAutomation/
│       ├── Pages/
│       │   └── ExceptionPage.js # Page Object Model
│       ├── LoginTest.spec.js    # Login test cases
│       ├── PracticeException.spec.js # Exception handling tests
│       └── tableTest.spec.js    # Table tests (in progress)
├── playwright.config.js         # Playwright configuration
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
| TC2_Exceptions | Element interactability exception (in progress) |

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

#Demo (project=chromium -> only runs on chrome, workers=1 -> to run in single thread, trace=on -> to get the report with snapshot of every step, headed-> to see browser)
npx playwright test --project=chromium --workers=1 --trace=on --headed
```
## How to Run the Project

1. Clone the repository
   git clone https://github.com/harishrajarajan89/playwright-automation.git

2. Navigate to project folder
   cd playwright-automation

3. Install dependencies
   npm install

4. Install Playwright browsers
   npx playwright install

5. Run tests
   npx playwright test

6. View HTML report
   npx playwright show-report


## Features

- ✅ Login flow with valid/invalid credentials
- ✅ Assertions — `toHaveTitle`, `toHaveURL`, `toContainText`, `toBeVisible`
- ✅ Screenshots on test failure saved to `ss/` folder
- ✅ Soft assertions (`expect.soft`)
- ✅ Viewport setup in `beforeEach`
- ✅ Page Object Model (`ExceptionPage.js`)
- ✅ CI/CD pipeline with GitHub Actions


## CI/CD

Tests automatically run on every `push` and `pull_request` to `main` or `master` branch via GitHub Actions. The HTML report is uploaded as an artifact and retained for 30 days.

