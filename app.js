const ul = document.querySelector("ul");
let price = document.querySelector(".price")


let names = ['Alice | Writer : $30','Bob | Teacher : $50','King | Programmer : $70','Tom | Electrician : $90','Rob | Lawyer : $110','Tim | Doctor $130','Drake | Nurse : $150'];
let jobs = ['Writer','Teacher','Programmer','Electrician','Lawyer','Doctor','Nurse'];
let dicedNames = names.slice(0, 2);

function render() {
  let html = dicedNames.map(function(person) {
    return `<li>${person}</li>`;
  })
  ul.innerHTML = html.join('');
}

render();
let num = 0
let j = setInterval(function() {
  dicedNames.push(names[num + 2]);
  num++;
  if (dicedNames.length === 7) {
    clearInterval(j);
  }
  render();
}, 2000)

let y = setInterval(function() {
    price.innerHTML = price.innerHTML * 1 + 20;

    if(price.innerHTML >= 90) {
        clearInterval(y);
    }
}, 2000)