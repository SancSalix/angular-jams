(function() {
  function SongPlayer() {
    var SongPlayer = {};
 /**
 * @desc Song object
 * @type {Object}
 */   
    var currentSong = null;
/**
 * @desc Buzz object audio file
 * @type {Object}
 */
    var currentBuzzObject = null;
 
/**
 * @function setSong
 * @desc Stops currently playing song and loads new audio file as currentBuzzObject
 * @param {Object} song
 */   
     var setSong = function(song) {
    if (currentBuzzObject) {
        currentBuzzObject.stop();
        currentSong.playing = null;
    }
 
    currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
    });
 
    currentSong = song;
    };
 
/**
 * @function playSong
 * @desc Sets currentBuzzObject to play and song value to true
 */      
    var playSong = function() {
      currentBuzzObject.play();
      song.playing = true;
    }
    
 /**
 * @function SongPlayer.play
 * @desc Checks if currentSong matches song value, changes it to match if not and calls playSong
 * if currentSong matches song, then sets currentBuzzObject to play if it is paused
 * @param {Object} song
 */       
    SongPlayer.play = function(song) {
     if (currentSong !== song) {
         setSong(song);
         playSong();
     } else if (currentSong === song) {
         if (currentBuzzObject.isPaused()) {
             currentBuzzObject.play();
         }
     }
 };
   /**
 * @function SongPlayer.pause
 * @desc Pauses currentBuzzObject and sets song value to false
 * @param {Object} song
 */ 
  SongPlayer.pause = function(song) {
    currentBuzzObject.pause();
    song.playing = false;
  }
       
       
    return SongPlayer;
  }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();
