function buttonsHover() {
    let buttons = [...document.getElementsByTagName('button')];
    buttons.forEach(function(el) {
        el.addEventListener('mouseover', function() {
            let btnColor = event.target; 
            btnColor.setAttribute('style', 'background-color:#ef6817');
        });
        el.addEventListener('mouseout', function() {
            let btnColor = event.target; 
            btnColor.setAttribute('style', 'background-color:#727271');
        });
    });
}

buttonsHover();