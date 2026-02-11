declare module 'imagesloaded' {
  interface ImagesLoadedInstance {
    images: { isLoaded: boolean }[];
    on(event: 'progress' | 'done' | 'fail' | 'always', callback: () => void): void;
  }

  function imagesLoaded(
    element: Element | NodeList | string,
    callback?: (instance: ImagesLoadedInstance) => void
  ): ImagesLoadedInstance;

  export default imagesLoaded;
}
