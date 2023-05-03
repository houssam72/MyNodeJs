// function final(someInput, callback) {
//     callback(`${someInput} et se termine par l'exécution du callback `);
//   }
  
//   function middleware(someInput, callback) {
//     return final(`${someInput} touché par le middleware `, callback);
//   }
  
//   function initiate() {
//     const someInput = 'Bonjour, ceci est une fonction ';
//     middleware(someInput, function (result) {
//       console.log(result);
//       // nécessite un callback pour retourner le résultat
//     });
//   }
  
//   initiate();
function getSong() {
    let _song = '';
    let i = 100;
    for (i; i > 0; i -= 1) {
      _song += `${i} des bières sur le mur, vous en prenez une et la faites circuler, ${
        i - 1
      } bouteilles de bière sur le mur\n`;
      if (i === 1) {
        _song += "Hey, allons chercher plus de bière";
      }
    }
  
    return _song;
  }
  
  function singSong(_song) {
    if (!_song) throw new Error("chanson est '' vide, DONNEZ-MOI UNE CHANSON !");
    console.log(_song);
  }
  
  const song = getSong();
  // cela va fonctionner
//   singSong(song);