describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });

    describe("when a song is playing, we can toggle between play and pause", function() {
        beforeEach(function() {
            player.play(song);
        });
        it("should pause the song", function() {
            spyOn( player, "pause" ); // define the spy
            player.togglePlay( song );
            expect( player.pause ).toHaveBeenCalled();
            expect( player.pause ).toHaveBeenCalledWith( );
        });
        it("should play the song", function() {
            spyOn( player, "play" ); // define the spy
            player.pause(); // just called here to set up our test to play the song next.
            player.togglePlay( song );
            expect( player.play ).toHaveBeenCalled();
            expect( player.play ).toHaveBeenCalledWith( song );
        });
    });
});
