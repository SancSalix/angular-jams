(function () {
  function Fixtures() {
    var Fixtures = {};
//#F9F9F9
    var albumPicasso = {
      title: 'The Colors',
      artist: 'Chris Zabriskie',
      label: 'Reappear',
      year: '2012',
      albumArtUrl: '/assets/images/album_covers/Reappear.jpg',
      songs: [
        {title: 'Unfoldment Revealment Evolution Exposition Integration Arson',
          duration: '653.00', //10:53
          audioUrl: '/assets/music/Unfoldment_Revealment_Evolution_Exposition_Integration_Arson'},
        {title: 'Readers Do You Read',
          duration: '304.00',//5:04
          audioUrl: '/assets/music/Readers_Do_You_Read'},
        {title: 'Out of the Skies Under the Earth',
          duration: '363.00',//6:03
          audioUrl: '/assets/music/Out_of_the_Skies_Under_the_Earth'},
        {title: 'Is That You or Are You You',
          duration: '301.00',//5:01
          audioUrl: '/assets/music/Is_That_You_or_Are_You_You'},
        {title: 'What True Self Feels Bogus Lets Watch Jason X',
          duration: '311.00',//6:11
          audioUrl: '/assets/music/What_True_Self_Feels_Bogus_Lets_Watch_Jason_X'},
        {title: 'Chance Luck Errors in Nature Fate Destruction As a Finale',
          duration: '656.00',//10:56
          audioUrl: '/assets/music/Chance_Luck_Errors_in_Nature_Fate_Destruction_As_a_Finale'},
        {title: 'Virtues Inherited Vices Passed On',
          duration: '612.00',//6:12
          audioUrl: '/assets/music/Virtues_Inherited_Vices_Passed_On'}
       ]
    };

    var albumMarconi = {
      title: 'The Telephone',
      artist: 'Guglielmo Marconi',
      label: 'EM',
      year: '1909',
      albumArtUrl: '/assets/images/album_covers/20.png',
      songs: [
        {title: 'Hello, Operator?',
          duration: '1:01'},
        {title: 'Ring, ring, ring',
          duration: '5:01'},
        {title: 'Fits in your pocket',
          duration: '3:21'},
        {title: 'Can you hear me now?',
          duration: '3:14'},
        {title: 'Wrong phone number',
          duration: '2:15'}
      ]
    };

    Fixtures.getAlbum = function () {
      return albumPicasso;
    };

    Fixtures.getCollection = function (input) {
      var collectionBuild = [];
      for (var i = 0; i <= input; i++) {
        collectionBuild.push(albumPicasso);
      }
      return collectionBuild;
    };
    return Fixtures;
  }

  angular
    .module('blocJams')
    .factory('Fixtures', Fixtures);
})();
