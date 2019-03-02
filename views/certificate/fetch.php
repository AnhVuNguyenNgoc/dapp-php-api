

<?php

//fetch.php

$api_url="http://localhost/dapp-api-php/api/certificateApi.php?action=fetch_all";

// there are 4 steps to call api
// 1. curl_init()
// 2. setopt()
// 3. curl_exe()
// 4. json_decode()


$client=curl_init($api_url);

curl_setopt($client,CURLOPT_RETURNTRANSFER,true);

$response=curl_exec($client);

$result=json_decode($response);

$output='';

if(count($result) > 0)
{
    foreach($result as $row)
    {
        if($row->GENDER == 1)
        {
            $gender="Nam";
        }else
        {
            $gender="Nữ";
        }

        $output.='
        <tr>
        <th>'.$row->NAME.'</th>
        <td>'.$gender.'</td>
        <td>'.$row->MAJOR.'</td>
        <td>'.$row->CATEGORY.'</td>
        <td>'.$row->GRADUATED_YEAR.'</td>
        <td ><a href=""><span class="badge badge-success  badge-pill">Xem</span></a></td>
        </tr>
        ';
    }
  
}else
{
    $output.="
    <tr>
        <td>No data</td>
    </tr>
    ";
}


//send to ajax
echo $output;
?>