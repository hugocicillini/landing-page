function openNav(){
    document.getElementById("myNav").style.width = 'calc(100vw - 12rem)';
    document.getElementById("myNav").style.height = '50%';
}

function closeNav(){
    document.getElementById("myNav").style.width = 0;
}

if (window.innerWidth < 701) {
    function openNav(){
        document.getElementById("myNav").style.width = '100%';
        document.getElementById("myNav").style.height = '60%';
        document.getElementById("myNav").style.right = '0';
    }
}

