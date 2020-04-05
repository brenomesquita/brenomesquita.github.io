const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => Math.floor(Math.random() * 58);
const temperature = getMarsTemperature()
// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (val) => {
  const suc = Math.random() >= 0.5
  if(suc){
  return val()
  }
  return console.log('Error getting temperature: Robot is busy')
} 


const msg = () => console.log(`Mars temperature is: ${temperature} degree Celsius`)
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = () => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = () => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...

setTimeout( () => sendMarsTemperature(msg), messageDelay()) // imprime "Mars temperature is: 20 degree Celsius", por exemplo
sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
//////////////////////////////////////////////////////////////////////////////////
