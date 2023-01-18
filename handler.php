<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler(); 

$validator = $pp->getValidator();
$validator->fields(['name','email'])->areRequired()->maxLength(50);
$validator->fields(['name','email'])->areRequired()->maxLength(50);
$validator->field('email')->isEmail();
$validator->field('comments')->maxLength(6000);

if(isset($_POST['submit'])){
    if(!empty($_POST['General Inquiries Type'])) {
      foreach($_POST['General Inquiries Type'] as $selected){
        echo '  ' . $selected;
      }          
    } else {
      echo 'Please select the value.';
    }
  }



  if(isset($_POST['submit'])){
    if(!empty($_POST['What Piece Of Your Business Are You Considering Outsourcing For?'])) {
      foreach($_POST['What Piece Of Your Business Are You Considering Outsourcing For?'] as $selected){
        echo '  ' . $selected;
      }          
    } else {
      echo 'Please select the value.';
    }
  }

  if(isset($_POST['submit'])){
    if(!empty($_POST['What is the size of the organization?'])) {
      foreach($_POST['What is the size of the organization?'] as $selected){
        echo '  ' . $selected;
      }          
    } else {
      echo 'Please select the value.';
    }
  }


$pp->sendEmailTo('contactus@shelbeybrothers.com'); 

echo $pp->process($_POST);