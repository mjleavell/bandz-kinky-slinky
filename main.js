function navHover() {
    document.getElementsByTagName('button').addEventListener('mouseover', function() {
        let btnColor = event.target.id; 
        btnColor.setAttribute('style', 'background-color:#ef6817');
    })
}

navHover();