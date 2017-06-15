const divs = document.getElementsByTagName('div');

for (let i = 0; i < divs.length; i++) {
<<<<<<< HEAD
  divs[i].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'blue';
  });
}
=======
  divs[i].addEventListener('click', (event) => event.target.classList.toggle('blue'));
}
>>>>>>> 9e3ebd20a77ef7801b11e6a1d2b040d745f339d2
