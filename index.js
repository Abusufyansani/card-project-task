// Unsplash API for dynamic image
const cardImage = document.querySelector('.card-image');
fetch('https://api.unsplash.com/photos/random?client_id=YOUR_API_KEY')
  .then((response) => response.json())
  .then((data) => {
    cardImage.src = data.urls.small;
  })
  .catch((error) => console.error('Error fetching Unsplash image:', error));

// Dynamic content from JSON file
fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    document.querySelector('.card-title').textContent = data.title;
    document.querySelector('.card-date').textContent = data.subtitle;
    document.querySelector('.card-description').textContent = data.description;
    document.querySelector('.card-author span').textContent = data.author.name;
    document.querySelector('.author-image').src = data.author.image;
  })
  .catch((error) => console.error('Error fetching card data:', error));
