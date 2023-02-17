const name: string = "FarrUkh";
console.log(`Lowercase: ${name.toLowerCase()}`);
console.log(`Uppercase: ${name.toUpperCase()}`);

function toTitleCase(str: string): string {
  let y = str.slice(1).toLowerCase();
  let x = str.slice(0, 1).toUpperCase();
  return x + y;
}
console.log(`Titlecase: ${toTitleCase(name)}`);

export {};
