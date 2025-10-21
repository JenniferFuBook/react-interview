interface Lengthwise {
  length: number; // Declare that any object of this type must have a 'length' property
}

export function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Access is safe because T is guaranteed to have 'length'
  return arg;
}
