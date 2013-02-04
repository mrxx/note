###[Algorithm](/Algorithm) 
### 找出一个数组中的两个数，使得这两个数的和等于给定的数
解：从小到大排序，然后利用二分查找来计算

<hr>
```
<?php
$arr = explode("\n",file_get_contents("../data/num.data"));
$sum = 43;
sort($arr);
for($i=0,$j=count($arr)-1;$i<$j;){
        if(($arr[$i]+$arr[$j])==$sum)
                break;
        else if(($arr[$i]+$arr[$j])<$sum)
                $i++;
        else
                $j--;
}
echo "\n sum=$sum \n num1={$arr[$i]} \n num2={$arr[$j]} \n";
?>
```