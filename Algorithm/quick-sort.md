给定不规则的数组，进行快速排序

将数组分成两半，一大一小，再递归调用
===
```
def sort(array)
        # return [] if array.empty?
        return array if array.size < 2
        left, right = array[1..-1].partition { |y| y <= array.first }
        sort(left) + [ array.first ] + sort(right)
end
p sort(File.new('../data/num.data').read().split("\n"))

```