function checkLogin(Login,Password) {
  const correctLogin = "adam";  
  const correctPassword = "12345";

  if (Login === correctLogin && Password === correctPassword) {
      return "You are logged in";
  } else if (Login !== correctLogin && Password !== correctPassword) {
      return "Both inputs are wrong";
  } else if (Login !== correctLogin) {
      return "Your login is wrong";
  } else {
      return "Your password is wrong";
  }
}

console.log(checkLogin("adam", "12345")); 
console.log(checkLogin("user", "12345"));   
console.log(checkLogin("adam", "09090")); 
console.log(checkLogin("user", "55555"));  
console.log(checkLogin ( "enlik", "7777" ))


//console.log(a); 
//var a = 5;
// JS видит переменную, объявленную с помощью var, он как бы поднимает (всплывает) её объявление вверх кода.
