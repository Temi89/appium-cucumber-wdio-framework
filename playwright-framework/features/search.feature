Feature: Search Journal on Elsevier

  @navigateElsevier
  Scenario: Navigate to Elsevier and search for a journal
    Given I navigate to the homepage
    When I search for "Journal of Information Security"
    Then I should see search results related to "Journal of Information Security"
