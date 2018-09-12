function navHover() {
    document.getElementsByTagName('button').addEventListener('mouseover', function() {
        let btnColor = event.target.id; 
        btnColor.style.background-color = '#ef6817';
        document.getElementById('scheduleNav').style.background-color = '#ef6817';
    })
}

navHover();