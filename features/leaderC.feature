Feature: As a leader, I would like to be able to upload multiple songs in a session, so that I won't have to remake the session each time I want to change the song

    Scenario: I am a leader
        Given I am the leader
        When I want to play another song
        Then I can upload another song without recreating the session

    Scenario: I am a follower
        Given I am a follower
        When I want to keep playing along to another song
        Then I don't need to rejoin the session