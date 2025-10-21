let vAny: any = 10;
let vUnknown: unknown = 10;

// With any, vAny can be assigned and used freely
let s1: string = vAny;

// With any, there is no compilation error, but it can crash at runtime
vAny.method();

// With unknown, vUnknown cannot be assigned before check or assertion
let s2: string = vUnknown; // Compilation error: Type 'unknown' is not assignable to type 'string'
vUnknown.method(); // Compilation error: 'vUnknown' is of type 'unknown'.

if (typeof vUnknown === "number") {
  let s3: string = vUnknown.toString(); // After type narrowing, vUnknown is now known to be a number
}
