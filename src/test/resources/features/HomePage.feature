@web
  Feature: HomePage Feature
    Background:
      Given I am on DarkSky HomePage

      @home
      Scenario: Verify min and max temperatures
        When I click today button on homepage
        And I get temperatures on homepage
        And I get min temperature on homepage
        And I get max temperature on homepage
        Then I verify min temperature on homepage
        Then I verify max temperature on homepage