//your JS code here. If required.
function downloadImages(images) {
  const promises = images.map(image => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
      img.src = image.url;
    });
  });

  return Promise.all(promises);
}
const downloadButton = document.getElementById('download-images-button');
const outputContainer = document.getElementById('output');

downloadButton.addEventListener('click', () => {
  downloadImages(images)
    .then(images => {
      images.forEach(image => {
        outputContainer.appendChild(image);
      });
    })
    .catch(error => {
      console.error(error);
    });
});
