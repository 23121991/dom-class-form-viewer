var fname = createlabel("label","for","fname","first name");
var b1 = linebreak ("br");
var input = inputlabel("type","text","Id","fname");
var b2 = linebreak("br");

var lname = createlabel("label","for","lname","last name");
var b3 = linebreak ("br");
var input = inputlabel("type","text","Id","lname");
var b4 = linebreak("br");

var Email = createlabel("label","for","Email","email");
var b5 = linebreak ("br");
var input = inputlabel("type","text","Id","Email");
var b6 = linebreak("br");

var phonenumber = createlabel("label","for","phonenumber","ph number");
var b7 = linebreak ("br");
var input = inputlabel("type","text","Id","phonenumber");
var b8 = linebreak("br");

document.append(fname,b1,input,b2,lnameb3,input,b4,Email,b5,input,b6,phonenumber,b7,input,b8,button);
function createlabel(tagname,aname,avalue,content)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(aname.avalue);
    ele.innerHTML=content;
    return ele;

}
function inputlabel(tagname,aname,avalue,aname1,avalue2)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(aname.avalue);
    ele.setAttribute(aname1.value1);
    //input.innerHTML=content;
    return input;

}
function linebreak(breaker){
    var b1=document.createElement(breaker)
    return b1;
}

function linebreak(breaker){
    var b2=document.createElement(breaker)
    return b2;
}


function createlabel(tagname,bname,bvalue,content)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(bname.bvalue);
    ele.innerHTML=content;
    return ele;

}
function inputlabel(tagname,bname,bvalue,bname1,bvalue2)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(bname.bvalue);
    ele.setAttribute(bname1.bvalue1);
    //input.innerHTML=content;
    return input;

}
function linebreak(breaker){
    var b3=document.createElement(breaker)
    return b3;
}
function linebreak(breaker){
    var b4=document.createElement(breaker)
    return b4;
}


function createlabel(tagname,cname,cvalue,content)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(cname.cvalue);
    ele.innerHTML=content;
    return ele;

}
function inputlabel(tagname,cname,cvalue,cname1,cvalue2)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(cname.cvalue);
    ele.setAttribute(cname1.cvalue1);
   // input.innerHTML=content;
    return input;

}
function linebreak(breaker){
    var b5=document.createElement(breaker)
    return b5;
}
function linebreak(breaker){
    var b6=document.createElement(breaker)
    return b6;
}

function createlabel(tagname,dname,dvalue,content)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(dname.dvalue);
    ele.innerHTML=content;
    return ele;

}
function inputlabel(tagname,dname,dvalue,dname1,dvalue2)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(dname.dvalue);
    ele.setAttribute(dname1.dvalue1);
    //input.innerHTML=content;
    return input;

}
function linebreak(breaker){
    var b7=document.createElement(breaker)
    return b7;
}
function linebreak(breaker){
    var b8=document.createElement(breaker)
    return b8;
}




