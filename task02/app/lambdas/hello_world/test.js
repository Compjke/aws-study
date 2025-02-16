const lambda = require('./index'); 

const testEvent = {
   event : 'HTTP req'
}; 

lambda
	.handler(testEvent)
	.then((response) => console.log('Lambda Response:', response))
	.catch((error) => console.error('Error:', error));

 
