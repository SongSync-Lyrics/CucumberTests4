Feature: As a user, I would like there be a leave session button, so that I can easy leave a session

    Scenario: I am a follower
        Given Im a follower
        When I want to leave a session
        Then I can press a button and leave the session

    Scenario: I am a leader
        Given Im a leader
        When I want to leave a session
        Then I can press a button and end the session