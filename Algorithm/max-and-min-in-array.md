### [Algorithm](../)>> 找出数组中最大值和最小值
解：

循环两次，分别比较每个值，找出最大和最小

比较相邻的两位，大的放到偶数位，小的放到奇数位，再和最大值最小值就行比较，互换，最后得出大小

***

```
<?php
$arr = explode("\n",file_get_contents("../data/num.data"));
$max = $min = 0;
for($i=2;$i<count($arr);$i+=2){
        if(!empty($arr[$i]) && $arr[$i]<$arr[$i-1])
        {
                $tmp = $arr[$i];$arr[$i]=$arr[$i-1];$arr[$i-1]=$arr[$i];
        }
        $max = $arr[$i]>$max ? $arr[$i] : $max;
        $min = $arr[$i-1]<$min ? $arr[$i-1] : $min;

}
echo "max=$max \n min=$min \n";

?>
```
