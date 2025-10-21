// Mock API client for demonstration purposes
const apiClient = {
  async get(endpoint) {
    return [
      { id: 1, value: 10, valid: true },
      { id: 2, value: 20, valid: false },
      { id: 3, value: 15, valid: true }
    ];
  }
};

// Class-based modules handle external I/O
class DataSource {
  constructor(apiClient) { 
    this.apiClient = apiClient; 
  }
  async fetchData() { 
    return await this.apiClient.get('/data'); 
  }
}

// Simulate saving data
class DataSink {
  async saveData(processed) {
    console.log('Saved result:', processed);
  }
}

// Functional core to clean data, transform it, and summarize
const cleanData = data => data.filter(item => item.valid);
const transformData = data => data.map(item => 
  ({ ...item, value: item.value * 2 }));
const summarizeData = data => ({
  count: data.length,
  sum: data.reduce((acc, item) => acc + item.value, 0)
});

// Compose functions into a reusable pipeline
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

// Create composed pipeline steps
const processPipeline = pipe(
  cleanData,
  transformData,
  summarizeData
);

// Orchestrate pipeline execution, bridging FP with OOP modules
async function runPipeline() {
  const source = new DataSource(apiClient);
  const sink = new DataSink();
  const rawData = await source.fetchData();
  const result = processPipeline(rawData);
  await sink.saveData(result);
}

// Execute the pipeline
runPipeline(); // Saved result: {count: 2, sum: 50}
