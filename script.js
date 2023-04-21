//your JS code here. If required.
// function downloadImages(images) {
//   const promises = images.map(image => {
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       img.onload = () => resolve(img);
//       img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
//       img.src = image.url;
//     });
//   });

//   return Promise.all(promises);
// }
// const downloadButton = document.getElementById('download-images-button');
// const outputContainer = document.getElementById('output');

// downloadButton.addEventListener('click', () => {
//   downloadImages(images)
//     .then(images => {
//       images.forEach(image => {
//         outputContainer.appendChild(image);
//       });
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });
const images = [
  { url: 'https://via.placeholder.com/150', description: 'Placeholder Image 1' },
  { url: 'https://via.placeholder.com/250', description: 'Placeholder Image 2' },
  { url: 'https://via.placeholder.com/350', description: 'Placeholder Image 3' },
];

function downloadAndDisplayImages(images) {
  const promises = images.map(image => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve(img);
      };
      img.onerror = () => {
        reject(`Failed to load image's URL: ${image.url}`);
      };
      img.src = image.url;
    });
  });
  
  Promise.all(promises)
    .then(images => {
      const output = document.getElementById('output');
      images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        output.appendChild(imgElement);
      });
    })
    .catch(error => {
      console.error(error);
    });
}

const button = document.getElementById('download-images-button');
button.addEventListener('click', () => {
  downloadAndDisplayImages(images);
});

