(function () {
	function SongPlayer(Fixtures) {
		var SongPlayer = {};
		var currentAlbum = Fixtures.getAlbum();
		var currentBuzzObject = null;

		var setSong = function (song) {
			if (currentBuzzObject) {
				currentBuzzObject.stop();
				SongPlayer.currentSong.playing = null;
			}

			currentBuzzObject = new buzz.sound(song.audioUrl, {
				formats: ['mp3'],
				preload: true
			});

			SongPlayer.currentSong = song;
		};


		var playSong = function (song) {
			currentBuzzObject.play();
			SongPlayer.currentSong.playing = true;
		}

		var stopSong = function (song) {
			currentBuzzObject.stop();
			SongPlayer.currentSong.playing = null;
		}

		var getSongIndex = function (song) {
			return currentAlbum.songs.indexOf(song);
		};

		SongPlayer.currentSong = null;

		SongPlayer.play = function (song) {
			song = song || SongPlayer.currentSong;
			if (SongPlayer.currentSong !== song) {
				setSong(song);
				playSong(song);
			} else if (SongPlayer.currentSong === song) {
				if (currentBuzzObject.isPaused()) {
					currentBuzzObject.play();
				}
			}
		};

		SongPlayer.pause = function (song) {
			song = song || SongPlayer.currentSong;
			currentBuzzObject.pause();
			song.playing = false;
		}

		SongPlayer.previous = function () {
			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			currentSongIndex--;
			if (currentSongIndex < 0) {
				stopSong(song);
			} else {
				var song = currentAlbum.songs[currentSongIndex];
				setSong(song);
				playSong(song);
			}
		};

		SongPlayer.next = function () {
			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			currentSongIndex++;
			if (currentSongIndex >= currentAlbum.songs.length) {
				stopSong(song);
			} else {
				var song = currentAlbum.songs[currentSongIndex];
				setSong(song);
				playSong(song);
			}
		};

		return SongPlayer;
	}

	angular
		.module('blocJams')
		.factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
