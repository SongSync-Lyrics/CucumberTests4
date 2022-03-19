Feature: As a leader, I would like to be able to upload multiple songs in a session, so that I won't have to remake the session each time I want to change the song

    Scenario: I am a leader
        Given I am a "leader"
        When I want to play another song
        Then I can upload another song without rejoining the session

    Scenario: I am a follower
        Given I am a "follower"
        When I want to play another song
        Then I can play another song without rejoining the session