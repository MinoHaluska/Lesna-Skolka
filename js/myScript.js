//Slider

document.querySelector('.p1').addEventListener('click', function(){

    document.querySelector('.sl1').style.display = 'block';

    document.querySelector('.sl2').style.display = 'none';
    document.querySelector('.sl3').style.display = 'none';
    document.querySelector('.sl4').style.display = 'none';
    document.querySelector('.sl5').style.display = 'none';
})

document.querySelector('.p2').addEventListener('click', function(){
    
    document.querySelector('.sl1').style.display = 'none';

    document.querySelector('.sl2').style.display = 'block';

    document.querySelector('.sl3').style.display = 'none';
    document.querySelector('.sl4').style.display = 'none';
    document.querySelector('.sl5').style.display = 'none';
})

document.querySelector('.p3').addEventListener('click', function(){
    
    document.querySelector('.sl1').style.display = 'none';
    document.querySelector('.sl2').style.display = 'none';

    document.querySelector('.sl3').style.display = 'block';

    document.querySelector('.sl4').style.display = 'none';
    document.querySelector('.sl5').style.display = 'none';
})

document.querySelector('.p4').addEventListener('click', function(){
    
    document.querySelector('.sl1').style.display = 'none';
    document.querySelector('.sl2').style.display = 'none';
    document.querySelector('.sl3').style.display = 'none';

    document.querySelector('.sl4').style.display = 'block';

    document.querySelector('.sl5').style.display = 'none';
})

document.querySelector('.p5').addEventListener('click', function(){
    
    document.querySelector('.sl1').style.display = 'none';
    document.querySelector('.sl2').style.display = 'none';
    document.querySelector('.sl3').style.display = 'none';
    document.querySelector('.sl4').style.display = 'none';

    document.querySelector('.sl5').style.display = 'block';
})


// Table Picture

document.querySelector('.sm').addEventListener('click', function(){
    document.querySelector('.smImg').click();
})

document.querySelector('.bo').addEventListener('click', function(){
    document.querySelector('.boImg').click();
})

document.querySelector('.sc').addEventListener('click', function(){
    document.querySelector('.scImg').click();
})

document.querySelector('.bk').addEventListener('click', function(){
    document.querySelector('.bkImg').click();
})

document.querySelector('.jh').addEventListener('click', function(){
    document.querySelector('.jhImg').click();
})