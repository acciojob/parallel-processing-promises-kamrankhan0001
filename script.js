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


// const images = [
//   { url: 'https://via.placeholder.com/150', description: 'Placeholder Image 1' },
//   { url: 'https://via.placeholder.com/250', description: 'Placeholder Image 2' },
//   { url: 'https://via.placeholder.com/350', description: 'Placeholder Image 3' },
// ];

// function downloadAndDisplayImages(images) {
//   const promises = images.map(image => {
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       img.onload = () => {
//         resolve(img);
//       };
//       img.onerror = () => {
//         reject(`Failed to load image's URL: ${image.url}`);
//       };
//       img.src = image.url;
//     });
//   });
  
//   Promise.all(promises)
//     .then(images => {
//       const output = document.getElementById('output');
//       images.forEach(image => {
//         const imgElement = document.createElement('img');
//         imgElement.src = image.src;
//         imgElement.alt = image.alt;
//         output.appendChild(imgElement);
//       });
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// const button = document.getElementById('download-images-button');
// button.addEventListener('click', () => {
//   downloadAndDisplayImages(images);
// });
// Array of image URLs
const images = [
  { url: 'https://example.com/image1.jpg', description: 'Image 1' },
  { url: 'https://example.com/image2.jpg', description: 'Image 2' },
  { url: 'https://example.com/image3.jpg', description: 'Image 3' },
];

// Function to download and display images
function downloadAndDisplayImages(images) {
  // Map the array of image objects to an array of Promises that download each image
  const imagePromises = images.map(image => {
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

  // Use Promise.all to wait for all images to be downloaded
  Promise.all(imagePromises)
    .then(images => {
      // Append the downloaded images to the output container
      const outputContainer = document.getElementById('output');
      images.forEach(image => {
        const imgElement = document.createElement("Downloads and displays images");
        imgElement.src = image.src;
        imgElement.alt = image.description;
        imgElement.width = 400;
        imgElement.height = 300;
        outputContainer.appendChild(imgElement);
      });
    })
    .catch(error => {
      console.error(error);
    });
}

// Attach click event listener to the download button
const downloadButton = document.getElementById('download-images-button');
downloadButton.addEventListener('click', () => {
  downloadAndDisplayImages(images);
});


