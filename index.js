//aşağıdaki satırı silmeyin
const { fifaData } = require('./fifa.js');

let sonuc = {};

const hesapla = (value) => {
  if (value.Stage === 'Final') {
    if (!sonuc[value['Home Team Name']]) {
      sonuc[value['Home Team Name']] = 0;
    }
    sonuc[value['Home Team Name']] += value['Home Team Goals'];
    if (!sonuc[value['Away Team Name']]) {
      sonuc[value['Away Team Name']] = 0;
    }
    sonuc[value['Away Team Name']] += value['Away Team Goals'];
  }
};

/*//"Year": 1930,
"Stage": "Final",
"Home Team Name": "Uruguay",
"Home Team Goals": 4,
"Away Team Goals": 2,
"Away Team Name": "Argentina" /*/

const finallerdekiGolSayilari = (data) => {
  sonuc = {};
  data.forEach(hesapla);
  console.log(sonuc);
  return sonuc;
};

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = finallerdekiGolSayilari;
