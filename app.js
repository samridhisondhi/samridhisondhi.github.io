document.addEventListener('DOMContentLoaded', () => {

    const images = document.querySelectorAll('img');
    for(const image of images){
    
        fetch('https://picsum.photos/100/100?random=50')
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;
        })

    }


})