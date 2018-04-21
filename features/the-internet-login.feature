Feature: The Internet Login

  Scenario: Logging in the internet
    Given the login screen is shown
    When I log in
    Then a confirmation message should be shown