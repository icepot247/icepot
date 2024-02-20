<?php
const API_URL = "https://api.adcombo.com/api/v2/order/create/";
const API_KEY = "141c589d8a735c01a6fdd6ec7cc51237";
print $_SERVER["HTTP_REFERER"];
exit();
$params = [
    'api_key' => API_KEY,
    'base_url' => 'http://icepot.xyz/',
    'ip' => $_SERVER['REMOTE_ADDR'],
    'referrer' => $_SERVER["HTTP_REFERER"],
    'subacc' => '',
    'subacc2' => '',
    'subacc3' => '',
    'subacc4' => '',
    'utm_campaign' => '',
    'utm_content' => '',
    'utm_medium' => '',
    'utm_source' => '',
    'utm_term' => '',
    'clickid' => '',
    ];
$args = array_merge($_REQUEST,$params );

$url = API_URL.'?'.http_build_query($args);
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true
));
$res = curl_exec($curl);
curl_close($curl);
$res = json_decode($res, true);
if ($res['code'] == 'ok') {
    echo $res['msg'] . ": " . $res['order_id'];
} else {
    echo $res['error'];
}

