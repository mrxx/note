## 中国象棋象棋问题
问：棋盘上只有将和帅，求出所有合法位置，只能用一个变量

解：放在一个数组，循环出其中所有的可能值 

ruby ``

javascript ``

php <pre><?php
$arr = array(0,0,array());
for($arr[0]=1;$arr[0]<=9;$arr[0]++)
        for($arr[1]=1;$arr[1]<=9;$arr[1]++)
                if($arr[1]%3!=$arr[0]%3)array_push($arr[2],array($arr[0],$arr[1]));
print_r($arr[2]);
?>
</pre>