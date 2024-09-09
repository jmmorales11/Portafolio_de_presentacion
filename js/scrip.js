const primero=document.querySelector('.primero'),
segundo=document.querySelector('.segundo')
segundo.style.display='none';
document.addEventListener('click', e =>  {
    if(e.target.matches('.pri1')){
        primero.style.display='flex';
        segundo.style.display='none';
    }else  if(e.target.matches('.sec2')){
        primero.style.display='none';
        segundo.style.display='flex';
    } 
})
