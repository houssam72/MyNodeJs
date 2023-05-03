const fs = require("fs");

// fs.stat("./docs/blog1.txt", (err, stats) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log(stats.isFile()); // true
//   console.log(stats.isDirectory()); // false
//   console.log(stats.isSymbolicLink()); // false
//   console.log(stats.size); // 1024000 //= 1MB
// });

fs.open("./docs/blog5.txt", "w", (err, fd) => {
  if (err) throw err;

  const buffer = Buffer.from("Contenu à écrire dans le fichier");
  const offset = 0;
  const length = buffer.length;
  const position = null; // Écrit à partir de la fin du fichier

  fs.write(
    fd,
    buffer,
    offset,
    length,
    position,
    (err, bytesWritten, buffer) => {
      if (err) throw err;
      console.log(`${bytesWritten} octets écrits`);
    }
  );
});

fs.writeFile("./docs/blog5.txt", "some content1", (err) => {
  if (err) {
    console.log("err1", err);
  }
  console.log("Fichiers bien Ecrit1");
});

fs.writeFile("./docs/blog5.txt", "some content2", { flag: "w+" }, (err) => {
  if (err) {
    console.log("err2", err);
  }
  console.log("Fichiers bien Ecrit2");
});

fs.readdir("./docs", (err, files) => {
  if (err) console.log("Err", err);
  console.log("Files", files);
});
