let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');








window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    let background = new Image();
    background.src = './images/road.png';

    background.onload = function(){
      context.drawImage(background, 0, 0);
    };

    
  }
};
