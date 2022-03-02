/**
 * Project name(项目名称)：JS_if_else
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/2
 * Time(创建时间)： 20:28
 * Version(版本): 1.0
 * Description(描述)： 无
 */

var now = new Date();           // 获取当前的完整日期
var dayOfWeek = now.getDay();   // 获取一个 0-6 之间的数字，用来表示当前是星期几，0 表示星期日、1 表示星期一、以此类推
if (dayOfWeek > 0 && dayOfWeek < 6)
{       // 判断：如果当前是星期一到星期五中的一天，则输出“Have a nice day!”，若不是则输出“Have a nice weekend!”
    alert("Have a nice day!");
}
else
{
    alert("Have a nice weekend!");
}