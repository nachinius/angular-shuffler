[![Build Status](https://secure.travis-ci.org/nachinius/angular-shuffler.png?branch=master)](https://travis-ci.org/nachinius/angular-shuffler)


Angular Array Shuffler Module
=======================


Shuffles an array inline (no copy), and get free of Math.random() if you wish.

The shuffling algoritm of the array is the Fisher-Yates algorithm
See http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle and http://bost.ocks.org/mike/shuffle/

# Install and Use

1. First download, if using bower

        bower install angular-shuffler -S
  
1. Then, make sure you include the shuffler.js in your html.
1. Then, tell your angular module/app to depend on module *Shuffler*
    
        angular.module('YourModuleName',['Shuffler']);

1. Then, inject whereever you wish, and is ready to be used, e.g:

        angular.factory('myFactory', function(Shuffler) {
    
        var list = [1,2,3,4];
        Shuffler(list);
        // list = [4,2,1,3]

        });
    
# No need to depend on an uncontrolling Math.random() function!

The random generator of the shuffler can be changed (or tracked with seed) by setting
_Shuffler.randomNumberGenerator_ which should be a function that returns
a number between [0,1).



