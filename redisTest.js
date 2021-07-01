/*
const redis = require("redis");
const client = redis.createClient({
    host: '47.100.214.170',
    port: '1233',
    password: process.env.redisPW,
});

client.on("error", function(error) {
    console.error(error);
});
*/

//client.set("key", JSON.stringify({aaa:111}), redis.print);
//var a = client.get("record", redis.print());
console.log(process.env.redisPW);