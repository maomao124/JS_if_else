/**
 * Project name(项目名称)：JS_if_else
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/2
 * Time(创建时间)： 20:30
 * Version(版本): 1.0
 * Description(描述)： 无
 */

var now = new Date();           // 获取当前的完整日期
var dayOfWeek = now.getDay();   // 获取一个 0-6 之间的数字，用来表示当前是星期几，0 表示星期日、1 表示星期一、以此类推
if (dayOfWeek == 0)
{            // 判断当前是星期几
    alert("星期日")
}
else if (dayOfWeek == 1)
{
    alert("星期一")
}
else if (dayOfWeek == 2)
{
    alert("星期二")
}
else if (dayOfWeek == 3)
{
    alert("星期三")
}
else if (dayOfWeek == 4)
{
    alert("星期四")
}
else if (dayOfWeek == 5)
{
    alert("星期五")
}
else
{
    alert("星期六")
}