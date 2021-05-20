import { importButton, drawBlob } from './script.mjs';

const importImage = async () => {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/png, image/jpeg, image/*';
    input.addEventListener('change', () => {
      const file = input.files[0];
      return resolve(file);
    });
    input.click();
  });
};

importButton.style.display = 'block';
importButton.addEventListener('click', async () => {
  const file = await importImage();
  if (file) {
    await drawBlob(file);
  }
});
