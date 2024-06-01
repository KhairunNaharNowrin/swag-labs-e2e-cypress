# swag-labs-e2e-cypress
This repository contains end-to-end (E2E) test automation scripts using Cypress for the Swag Labs application. The test suite covers key user interactions and scenarios to ensure the reliability and functionality of the platform.

## Test Scenarios Covered

1. **Customer Purchases Products:**
    - **Given** a standard customer is logged in,
    - **When** the customer adds multiple products to the shopping cart,
    - **And** proceeds to checkout the purchase,
    - **Then** the purchase is successful.

2. **Customer Sorts Product Items:**
    - **Given** a standard customer is logged in,
    - **When** the customer sorts available products in the product view,
    - **Then** the products are ordered according to the chosen sort method.

3. **User is Locked Out from the Platform:**
    - **Given** the customer is a locked-out customer,
    - **When** the customer attempts to log in using proper credentials,
    - **Then** the login fails,
    - **And** the customer is presented with an error state.
  
## Getting Started

To get started with the Cypress tests, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2. Install the dependencies:
    ```bash
    cd your-repo-name
    npm install
    ```
3. Run the Cypress tests:
    ```bash
    npm run cypress:open
    ```


