<?php

 $link=mysqli_connect('localhost','root','','ok2pay');

$query=mysqli_query($link,"SELECT * FROM dataplans where rank='1'");
while ($res=mysqli_fetch_array($query)) {
	
$name=$res['name'];
	
$value=$res['value'];
mysqli_query($link,"UPDATE dataplans set value='$value' where name='$name' and rank='2'");


	}

?>