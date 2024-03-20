function downloadFile(href: string, filename: string) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = href;
  link.click();
}

export async function downloadFromBlob(content: Blob, filename: string) {
  const href = URL.createObjectURL(content);

  downloadFile(href, filename);

  URL.revokeObjectURL(href);
}
