let aus_bajnok = [
  { ev: 2022, bajnok: 'Rafael Nadal' },
  { ev: 2021, bajnok: 'Novak Djokovic' },
  { ev: 2020, bajnok: 'Novak Djokovic' },
  { ev: 2019, bajnok: 'Novak Djokovic' },
  { ev: 2018, bajnok: 'Roger Federer' },
  { ev: 2017, bajnok: 'Roger Federer' },
];

let bajnokok = document.getElementsByClassName('bajnok');
let beszur = document.getElementsByClassName('beszur');
let aus_champ = document.getElementById('aus_champ');

for (let i = 0; i < bajnokok.length; i++) {
  if (i == 0) {
    beszur[i].addEventListener('click', () => {
      let champ = aus_champ.selectedOptions;
      let ev = champ[0].value;
      let bajnok = 'Novak';

      let sor = document.createElement('th');
      let adottEvBajnoka = `${ev} bajnoka: ${bajnok}`;
      let fejszoveg = document.createTextNode(adottEvBajnoka);
      sor.appendChild(fejszoveg);
      bajnokok[0].appendChild(sor);
    });
  }
}
