(function () {
    "use strict";

    angular
    .module("movieHunter")
    .controller("MovieListCtrl",
                [MovieListCtrl]);

    function MovieListCtrl() {
        var vm = this;

        vm.movies = [
            {
                title: 'The Fellowship of the Ring',
                director: 'Jackson',
                date: '2001-12-19',
                imageurl: 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Fellowship-Of-The-Ring_small.jpg',
                mpaa: 'pg-13'
            },
             {
                 title: 'The Two Towers',
                 director: 'Jackson',
                 date: '2002-12-18',
                 imageurl: 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Two-Towers_small.jpg',
                 mpaa: 'pg-13'
             },
		     {
		         title: 'The Point',
		         director: 'Wolf',
		         date: '1971-02-02',
		         imageurl: '',
		         mpaa: 'nr'
		     }
        ];
        vm.title = "Search by Movie Title";
        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        };
    }

}());

