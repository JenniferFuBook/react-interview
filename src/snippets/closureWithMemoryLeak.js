function createHandler() {
  const largeObject = new Array(1000000).fill('*');
  return () => {
    console.log('Handler active');
  };
}
// The code creates a closure that retains a reference to 'largeObject', leading to a memory leak
document.addEventListener('click', createHandler());
