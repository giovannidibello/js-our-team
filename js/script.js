const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// prendo l'elemento dalla pagina
const outputCard = document.querySelector(".containerCard");

// inizializzo la variabile 
items = "";

// creo la card dall'array dato

for (i = 0; i < teamMembers.length; i++) {

  // salvo il valore corrente
  const membroIesimo = teamMembers[i];

  // prendo i valori delle proprietà per il valore corrente
  const { name, role, email, img } = membroIesimo;

  // creo l'html da inserire in pagina
  items += `
        <div class="card">
           <div class="cardImage">
               <img src="./${img}" alt="${name}">
           </div>
           <div class="cardText">
               <h3>${name}</h3>
               <div id="roleText">${role}</div>
               <div id="emailText">${email}</div>
            </div>
        </div>
        `

        console.log(items);
        
}

// inserisco output della card in pagina
outputCard.innerHTML = items;