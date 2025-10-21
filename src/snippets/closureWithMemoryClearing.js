function createHandler() {
  const largeObject = new Array(1000000).fill('*');
  return function handler() {
    console.log('Handler active');
    // Clear reference after use to prevent memory leak
    largeObject.length = 0;
  };
}
const handler = createHandler();
document.addEventListener('click', handler);
// Remove the event listener when no longer needed
document.removeEventListener('click', handler);
