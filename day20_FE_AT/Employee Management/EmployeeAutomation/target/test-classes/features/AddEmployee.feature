Feature: Add Employee

  Scenario: Add a new employee

    Given User opens Add Employee page
    When User enters employee details
    And User clicks Save button
    Then Employee should be added successfully