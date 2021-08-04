<?php
header('Content-Type: application/json'); // deckare page type as json
if(isset($_GET['number']) && filter_var($_GET['number'],FILTER_VALIDATE_INT)){ // validate a number has been provided
	$data = array(
	'number' => $_GET['number'],
	'coating' => ($_GET['number'] % 3 == 0 ?true:false), // check if mutlitple of 3 return boolean
	'lightning' => ($_GET['number'] % 5 == 0 ?true:false), // check if a multiple of 5 return boolean
	);
	echo json_encode($data); // return the data as json
}else{
	echo json_encode('Invalid Input'); //return error message
}

?>