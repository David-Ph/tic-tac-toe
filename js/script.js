let blocks = document.querySelectorAll('td');
let title = document.querySelector('h1');
let filledBlocks = 0;
let turns = 1;
let inGame = 1;

blocks.forEach((element) =>{
    element.addEventListener('click', function(e){
        if(inGame){
            if(this.firstChild.nodeName == "#text"){
                this.innerHTML = '';
                let blockImage = document.createElement('img');
                if(turns === 1){
                    blockImage.src = './image/o.png';
                    turns = 2;
                }else{
                    blockImage.src = './image/x.png';
                    turns = 1;
                }
                console.log(blockImage);
                this.appendChild(blockImage);
                filledBlocks++;
            }
            checkWinner();
        }
    })
})

function checkWinner(){
    let hasWin = (
        (blocks[0].innerHTML == blocks[1].innerHTML && blocks[0].innerHTML == blocks[2].innerHTML) ||
        (blocks[3].innerHTML == blocks[4].innerHTML && blocks[3].innerHTML == blocks[5].innerHTML) ||
        (blocks[6].innerHTML == blocks[7].innerHTML && blocks[6].innerHTML == blocks[8].innerHTML) ||
        (blocks[0].innerHTML == blocks[4].innerHTML && blocks[0].innerHTML == blocks[8].innerHTML) ||
        (blocks[2].innerHTML == blocks[4].innerHTML && blocks[2].innerHTML == blocks[6].innerHTML) ||
        (blocks[0].innerHTML == blocks[3].innerHTML && blocks[0].innerHTML == blocks[6].innerHTML) ||
        (blocks[1].innerHTML == blocks[4].innerHTML && blocks[1].innerHTML == blocks[7].innerHTML) ||
        (blocks[2].innerHTML == blocks[5].innerHTML && blocks[2].innerHTML == blocks[8].innerHTML)
    );
    if(hasWin){
        inGame = 0;
        if(turns === 1){
            title.innerHTML = "X has won";
        }else{
            title.innerHTML = "O has won";
        }
    }else if(filledBlocks >= 9){
        title.innerHTML = 'Draw!';
    }
}
