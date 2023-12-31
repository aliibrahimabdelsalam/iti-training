
// sum three numbers
var arr=[]
var sum=0
var mutli=1
alert("enter three number ")
for(var i=0;i<3;i++)
 arr[i]=prompt("enter number")
var division=parseInt(arr[0])
for(var i=0;i<3;i++)
{
    arr[i]=parseInt(arr[i])
    sum+=arr[i]
    mutli*=arr[i]
    if(i==0){
        continue
    }else
    {
        division/=arr[i]

    }
}
document.write("<h2>sum of values:: "+sum+"</h2>")
document.write("<h2>multipublication :: "+mutli+"</h2>")
document.write("<h2>division of values:: "+division+"</h2>")


