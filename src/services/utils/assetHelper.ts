const imageUrl = (pathname: string) => new URL(`../../asssets/images/image/${pathname}`, import.meta.url).href;

export {imageUrl}