<?php
	ini_set("display_errors", 1);
	error_reporting( E_ALL );

	$data    = json_decode(file_get_contents("php://input"), true);
	$from    = "website@viruskavach.com";
	$to      = "sales@viruskavach.com";
	$subject = $data["subject"];
	$headers = "From:" . $from;

	$message =
		$data["body"]
		. "\n\n\n"
		. "From : "
		. $data["name"]
		. " (Phone No. : "
		. $data["phone"]
		. ", Email : "
		. $data["email"]
		. ")";

	mail($to, $subject, $message, safe($headers));

	function safe($name)
	{
		return (str_ireplace(array("\r", "\n", "%0a", "%0d", "Content-Type:", "bcc:", "to:", "cc:"), "", $name));
	}
?>