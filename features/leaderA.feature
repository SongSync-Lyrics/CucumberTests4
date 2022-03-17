Feature: As the owner of the app, I would like to view a list of all songs played through the app with timestamps, so that I can track down what publisher I need to pay money to​

    Scenario: I am the app owner
        Given I am "the owner"
        When I want to check for which songs were played
        Then I can get a list of songs

    Scenario: I am not the app owner
        Given I am "not the app owner"
        When I want to check for which songs were played
        Then I can't get a list of songs