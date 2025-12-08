

document.addEventListener('DOMContentLoaded', async () => { 
    try {   
        const response = await fetch('https://xkcd.now.sh/?comic=latest');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); 
        const comicImage = document.getElementById('img-comic');
        const comicDate = document.getElementById('date-comic');  
        comicImage.src = data.img;
        comicImage.alt = data.alt;
        comicImage.title = data.title;
        comicDate.textContent = `Date: ${data.day.padStart(2, "0")}/${data.month.padStart(2, "0")}/${data.year}`;
    } catch (error) {
        console.error('Error fetching the comic:', error);
    }
});