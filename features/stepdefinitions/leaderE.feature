Feature: As a user, I would like to have a dark mode option, so that the website is easier on the eyes

    Scenario: It is late at night
        Given it is dark outside
        When I want to use the app
        Then I can change the app to dark mode so that I don't strain my eyes

    Scenario: It isn't late at night
        Given it is light outside
        When I want to use the app
        Then I can change the app to light mode