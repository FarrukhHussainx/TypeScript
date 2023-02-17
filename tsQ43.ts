function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (const magician of magicians) {
    greatMagicians.push(`${magician} the Great`);
  }
  return greatMagicians;
}

const magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette"];
const greatMagicians: string[] = make_great([...magicians]); // make a copy of the original array
show_magicians(magicians); // show the original names
console.log("--------");
show_magicians(greatMagicians); // show the great magicians' names
