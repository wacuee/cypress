# Automation testing project using Cypress for API and UI testing.
## Project Overview
This project is an automation testing for the OrangeHRM Login feature, forgot password feature & Dashboard Validation, built using Cypress with Page Object Model (POM) architecture. One of the main objectives of this project is to implement API Intercept testing using Cypress intercept functionality. By intercepting API requests and responses, the project can validate response status codes.

### Tech Stack
- Cypress
- Javascript
- Page Object Model (POM)

### Project Structure
```cypress/
├── e2e/
│ └── project_akhir/
│     └── kelas/
│         └── afterLogin.js
│         └── forgotPasswordPage.js
│         └── loginData.json
│         └── loginPage.js
│     └── project_akhir.cy.js
```
### Folder Description
- e2e/: Contain test specifications
- project_akhir/: Contain "kelas" folder for Page Object Model files & main cypress file in JS format that contain all of the tests
- projcet_akhir/kelas : Contain Page Object Files (UI Locator & Action asbtraction), also Test data in JSON Format

# Test Scenarios
### Login page functionals tests
| Test cases | Description |
|:----:|:----:|
| LF-01 | Login with right Username & Password |
| LF-03 | Login with wrong Username & Password |
| LF-04 | Login with wrong Username   |
| LF-05 | Login with wrong password  |

### Login page validation tests
| Test cases | Description |
|:----:|:----:|
| LF-02 | 'error credentials' Pop up should appear when inputing wrong Username & Password |

### Forgot password page functionals tests
| Test cases | Description |
|:----:|:----:|
| FP-01 | Visit forgot password page |
| FP-02 | Leave the input field and then click Reset Password button |
| FP-03 | Input username that will be reseted and then click  Reset Password Button |
| FP-04 | Click Cancel button |

### After login pages functionals tests
| Test cases | Description |
|:----:|:----:|
| LP-01 | Login using right Username & Password then go to Admin page |
| LP-02 | Login using right Username & Password then click drop down menu on profile photo then click about |

### After login pages validation tests
| Test cases | Description |
|:----:|:----:|
| LP-03 | Login using right Username & Password, head to Dashboard menu then check all 0xd sheet elements |
| LP-04 | Login using right Username & Password, head to PIM page and intercept employees API |
| LP-05 | Login using right Username & Password, head to PIM leave and intercept employees API |
| LP-06 | Login using right Username & Password, head to Time page and intercept Timesheet API |


