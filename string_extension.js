// jQuery controls, inspired by c# string object methods : v0.1 (2017/09/0 13:15:43)

var string = {
    IsNullOrEmpty: function (parameter) {
        if (!parameter || (parameter.toString()
                                    .trim()
                                    .replace(' ', '')
                                    .replace('null', ''))
                                    .length === 0) return true;
        return false;
    },
    Empty: function () {
        return "";
    },
    Format: function (text, parameters) {
        var rt = "";
        $.each(parameters, function (i, e) {
            var p = "{" + i + "}",
                t = e.toString(),
                c = text.split(p).length - 1;
            for (var j = 0; j < c; j++) {
                rt = text.replace(p, t),
                text = rt;
            }
        });
        return rt;
    },
    Replace: function (text, key, value) {
        var rt = "";
        var isExist = text.indexOf(key);
        if (isExist > -1) {
            var split = text.split(key);
            $.each(split, function (i, e) {
                if (i < split.length - 1) {
                    rt += e + value;
                } else {
                    rt += e;
                }
            });
        } else {
            return text;
        }
        return rt;
    }
}
 
/* ----> string.IsNullOrEmpty <---- 

var text = "";
if(string.IsNullOrEmpty(text) == true){
console.log("object is empty"); 
}
 ----> END <----  */

/* ----> string.Empty <----  

var text = string.Empty();
console.log(text);

Output => "";
 
 ----> END <----  */

/* ----> string.Format <----  

var object = {
Id:123,
Name:"test",
ParentId:456 
}


---1---
var text = '<label class="label-control" id="{0}" name="{1}" data-parent-id="{2}"'; 

var tempText = string.Format(text,[object.Id,object.Name,object.ParentId]);
 
console.log(tempText);

Output => <label class="label-control" id="123" name="Name" data-parent-id="456"

 
---2--- Use Same Key 
var text = '<label class="label-control" id="{0}" name="label_{0}" data-parent-id="{1}"';

var tempText = string.Format(text,[object.Id,object.ParentId]);
 
console.log(tempText);


Output => <label class="label-control" id="123" name="label_123" data-parent-id="456"
  
 ----> END <----  */

/* ----> string.Replace <----  
 
var text = 'JavaScript is a programming language that allows you to implement complex things on web pages, use javascript';

var tempText = string.Replace(text,"JavaScript","whatever")

console.log(tempText);
Output => 'whatever is a programming language that allows you to implement complex things on web pages, use javascript';
  
 ----> END <----  */