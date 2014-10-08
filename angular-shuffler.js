(function(window, angular, undefined) {'use strict';

 var angularShuffler = angular.module('angulerShuffler',[]);
 angularShuffler.service('angularShuffler',function() {

   /**
    * @param {Array} array to shuffle
    *
    * acknowledge: http://bost.ocks.org/mike/shuffle/
    */
   var shuffler = function(array) {
     var m = array.length, t, i;

     // While there remain elements to shuffle…
     while (m) {

       // Pick a remaining element…
       i = Math.floor(shuffler.randomNumberGenerator() * m--);

       // And swap it with the current element.
       t = array[m];
       array[m] = array[i];
       array[i] = t;
     }

     return array;
   }

   /**
    * Define the default function that returns a random number 
    * in the inverval [0,1)
    */
   shuffler.randomNumberGenerator = Math.random;

   return shuffler;
 });
})(window, window.angular);
