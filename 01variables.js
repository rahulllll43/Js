const accountId = 123456
let accountEmail = "xyz@123"
var accountPassword = "123654"
accountCity = "Jaipur"
let accountState
// account = 2 // not allowed

accountEmail = "hgf@hn.com"
accountPassword = "2121212"
accountCity = "noida"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not to use var 
because of block scope and functional scope
*/