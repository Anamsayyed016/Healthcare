/** Cloudinary delivery transforms — width-capped, auto format/quality. */
export function cloudinaryUrl(url: string, width?: number): string {
  if (!url.includes('res.cloudinary.com') || !url.includes('/upload/')) {
    return url;
  }

  const transform = width ? `f_auto,q_auto,w_${width}` : 'f_auto,q_auto';
  return url.replace('/upload/', `/upload/${transform}/`);
}
