import { writeFile } from 'node:fs';

writeFile("./Exercise01/textfile.txt", "Hello World!", (err) => {
  if(err) throw err;
});