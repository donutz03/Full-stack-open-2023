try { 
  console.log(calculator(1, 5, 'divide'));
 } catch (error) {
console.log('smt went wrong' + error.message);
}
try {
  console.log(calculator(1, 5 , 'divide'));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: '
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
