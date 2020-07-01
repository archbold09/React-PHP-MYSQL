<?php
session_start();
date_default_timezone_set('America/Bogota');
setLocale(LC_ALL, "es_CO");

function trace($test)
{
    echo '<pre>';
    print_r($test);
    echo '</pre>';
}

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$array = json_decode(file_get_contents("php://input"), TRUE);

require_once "../models/mains.php";

class mainControllers extends mains
{

    public function __construct()
    {
        parent::__construct();
    }

    public function parse($text)
    {
        $parsedText = str_replace(chr(10), "", $text);
        return str_replace(chr(13), "", $parsedText);
    }
}

if (isset($array['data']['petition'])) {

    $petition = $array['data']['petition'];
    $mc = new mainControllers();

    $response = [
        "state" => false,
        "message" => "Hubo un error al procesar la petición"
    ];

    switch ($petition) {

            #list
        case 'list':

            $data = $mc->list();

            if ($data) {
                $response = [
                    'state' => true,
                    'message' => 'Users have been found',
                    'array' => $data 
                ];
            } else {
                $response = [
                    'state' => false,
                    'message' => 'No users found'
                ];
            }

            echo json_encode($response);
            break;
            #end list

    }
}
