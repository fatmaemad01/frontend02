let pop = document.getElementById('pop');
let search = document.getElementById('search');
let home = document.getElementById('home');


search.onclick = () =>{
    pop.style.display='block';
}

home.onclick = () => {
    pop.style.display='none';
}