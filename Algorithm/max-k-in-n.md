[Algorithm](../)

问：有很多个无序的数N，怎么找出其中最大的K个数

解：将K放入一个数组，并且排序，将N轮询，如果大于K中最小的数则替换K中最小的数，并且再次排序K

```
<?php
$K = 10;
$rst = array();
while(count($rst)<$K)array_push($rst,0);
$fp = fopen("num.data","r");
while($line = fgets($fp))//read by line
{
        $v = intval($line);
        if($v > $rst[0])
        {
                array_shift($rst);//unset $rst[0]
                array_push($rst,$v);//add $v to $rst
                sort($rst,SORT_NUMERIC);//sort again
        }
}
arsort($rst,SORT_NUMERIC);
print_r($rst);
?>
```