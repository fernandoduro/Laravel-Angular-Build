var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');

    mix.scripts([
       	"angular/modules/angular.min.js",
    	"angular/modules/angular-route.1.2.5.min.js",
		"angular/modules/angular-sanitize.1.2.5.min.js",
		"angular/modules/angular-moment.min.js",
       	"angular/app.js",
    ], 'public/js/angular.js') // Angular
    mix.scripts([
       "angular/controllers/test.js",
    ], 'public/js/controllers.js') // Angular
});
