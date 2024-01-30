function isPDF(filename) {
  return filename.toLowerCase().endsWith('.pdf');
}

function isImage(filename) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'];
  return imageExtensions.some((ext) => filename.toLowerCase().endsWith(ext));
}

function getFileFormat(filename) {
  const lastDotIndex = filename.lastIndexOf('.');
  if (lastDotIndex === -1) {
    // No file extension found
    return null;
  }
  return filename.slice(lastDotIndex + 1).toLowerCase();
}

export { isImage, isPDF, getFileFormat };
