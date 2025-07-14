// The function to simulate a heavy paint operation
export const simulateHeavyPaint = (delay: number) => {
  const start = performance.now();
  while (performance.now() - start < delay) {
    // Block rendering for delay in ms
  }
};