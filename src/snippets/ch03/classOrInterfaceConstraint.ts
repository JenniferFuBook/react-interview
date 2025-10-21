interface Animal {
  name: string;
  age: number;
}
export function getOldest<T extends Animal>(animals: T[]): T {
  if (animals.length === 0) {
    throw new Error("Cannot get oldest of empty array");
  }

  // Use reduce to find the animal with the highest age
  return animals.reduce((oldest, current) =>
    current.age > oldest.age ? current : oldest
  );
}
