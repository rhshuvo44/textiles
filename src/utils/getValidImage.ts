

import { StaticImageData } from "next/image";


export function getValidImage(
    image: string | StaticImageData | (string | StaticImageData)[],
    width: number = 400,
    height: number = 400,
    label: string = "No Image"
): string | StaticImageData {
    const PLACEHOLDER = `https://via.placeholder.com/${width}x${height}?text=${encodeURIComponent(
        label
    )}`;

    if (!image) return PLACEHOLDER;
    if (Array.isArray(image)) return image.length ? image[0] : PLACEHOLDER;
    return image;
}
