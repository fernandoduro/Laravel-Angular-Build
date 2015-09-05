<?php namespace App\Http\Controllers;

class MainController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	
	public function index()
	{
		return view('layout');
	}

	public function getPhpInfo()
	{
		return phpinfo();
	}


	public function getSessions()
	{
		return [
			"sessions" => $_SESSION,
			"cookies" => $_COOKIE,
		];
	}

	public function getLocale()
	{
		return \App::getLocale();
	}

}
