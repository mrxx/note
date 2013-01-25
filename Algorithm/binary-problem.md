问：有一个二进制数字，求出里面有多少个 1

解：二进制除以2，不能整除，则为1<br>
   二进制与0x01进行与运算，每次向右移位<br>
   
  

```
<?php
// 101&01 = 1
// 101>>1 = 10
$i = 0x10101011;
/*
$num=0;
while($i)
{
        if($i%10)
                $num++;
        $i= intval($i/=10);
}
 */
function test($v)
{
        $num=0;
        while($v){
                if($v&0x01)$num++;
                $v >>= 1;
        }
        return $num;
}
echo test($i);
?>

```