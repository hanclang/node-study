console.log("0123456789".length);           //10
console.log("零一二三四五六七八九".length);      //10
console.log("\u00bd".length);        //1


var str = "深入浅出node.js";
var buf = new Buffer(str,'utf-8');
console.log(buf);  //<Buffer e6 b7 b1 e5 85 a5 e6 b5 85 e5 87 ba 6e 6f 64 65 2e 6a 73>
console.log(buf.length);  //19


var buf1 = new Buffer(100);   //废弃的方法
console.log(buf1.length);  //100

console.log(buf1[50]);  //元素值是一个0到255的随机数

buf1[20] = -100;
console.log(buf1[20]);    //给元素赋值如果小于0，就将该值逐次加256，直到得到一个0到255之间的整数

buf1[21] = 300;
console.log(buf1[21]);    //给元素赋值如果大于255，就将该值逐次减256，直到得到一个0到255之间的整数

buf1[22] = 3.1415;
console.log(buf1[22]);    //如果是小数，舍弃小数部分，只保留整数部分

buf1[23] = "u";
console.log(buf1[23]);

var buf2 = Buffer.alloc(10);  //创建一个长度为10，且用0填充的Buffer
console.log(buf2.length);

var buf3 = Buffer.alloc(10,1); // 创建一个长度为 10、且用 0x1 填充的 Buffer。
console.log(buf3);

var buf4 = Buffer.allocUnsafe(10);  // 创建一个长度为 10、且未初始化的 Buffer。值是随机的
console.log(buf4);
buf4.write("我我我我");   //write一个字符对应一个buffer，中文对应3个buffer
console.log(buf4);


var buf5 = Buffer.from([1,2,3]);   //// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
var buf6 = Buffer.from("test");    //创建一个包含utf-8字节<Buffer 74 65 73 74>的Buffer
console.log(buf6);


//buffer.keys()
const buf7 = Buffer.from('buffer');
for(const key of buf.values()) {
  console.log(key);
}
