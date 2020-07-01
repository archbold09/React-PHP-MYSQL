<?php

include_once __DIR__."/../conf/connection.php";

class mains extends Connection {

	private $listing;

	function __construct() {
		parent::__construct();
	}
	#list
		public function list() {
			$sentence = $this->run("SELECT *
			FROM users 
			");
			$this->listing = $sentence->fetchAll( PDO::FETCH_ASSOC );
			return $this->listing;
		}
	#end list
}
?>