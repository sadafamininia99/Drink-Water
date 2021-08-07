const smallcups = document.querySelectorAll('.cup-small');

const Liters = document.getElementById('liters');

const percentage = document.getElementById('percentage');

const remaind = document.getElementById('remaind');
//Get

smallcups.forEach((cup, idx) =>{
    // console.log(idx);
    cup.addEventListener('click', () => highlightcups(idx))
})

function highlightcups(idx){
    // console.log(idx);
    //add full class (html (color =blue))
    smallcups.forEach(() =>(cup,idx2) => 
    {
        if(idx2 <= idx){
            cup.classList.add('.full')

        }
        else{
            cup.classList.remove('.full')
        }
    })
}