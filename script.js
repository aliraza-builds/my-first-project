//Operators lec 1

//Addition
let a=5;
let b=10;
console.log("a is =",a,"and b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a*b=",a/b);//iska ka matlab hai ke a ko b ke baad divide karne pe jo reminder aye ga
console.log("a**b=",a**b);//double streak means power a ki power b hai

//Uniary operators
//a== means a+1, increment
//a-- means a-1, dcrement
console.log("Unirary opeartors");
console.log("a=",a,"b=",b);
console.log("a++=",a++);
console.log("a=",a);//post increment phele value show hogi baad main increse ya decrese hogi
console.log("a=",a,"b=",b);
console.log("a--=",a--);
console.log("a=",a);


console.log("a=",a,"b=",b);
console.log("++a=",++a);
//pre increment /decrement se murad phwlw icrement hoga phir value aye gi
console.log("a=",a,"b=",b);
console.log("--a=",--a);

console.log("Assignment operators");//=, += , *= %=, **=
//a+ means a+1=1
let c=3;
let d=5;
c += 4;//a=a+4
console.log("c=",c);

//Comparison Operators == equal to, != not eqaul to,=== strict eaual to also check data type

console.log("a is =",a,"and b=",b);
console.log( "a=b",a==b);
//!=
console.log("a is =",a,"and b=",b);
console.log( "a!=b",a!=b);
//===
q=10;
w="10";//js auto pe phele string ko number main convert kare ga then compare
console.log("q is =",q,"and bw",w);
console.log( "q==w",q==w);

// ===
q=10;
w="10";//js strictly data type bhi check kare ga
console.log("q is =",q,"and bw",w);
console.log( "q===w",q===w);