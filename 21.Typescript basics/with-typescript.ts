function add(a: number, b: number) {
  return a + b;
}

const result = add(2, 5);

console.log(result);

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
