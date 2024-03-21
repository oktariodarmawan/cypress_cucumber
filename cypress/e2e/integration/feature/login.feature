@login
Feature: Login
 Scenario: Login successfully
  Given I open Login Page
  When I fill the username input with "oktariodarmawan@gmail.com"
  And I fill the password input with "kvnunited42"
  And I click on Login button
  Then I see "You logged into a secure area!" message