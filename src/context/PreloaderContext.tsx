import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import imagesLoaded from 'imagesloaded';

interface PreloaderContextType {
  isLoading: boolean;
  progress: number;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined);

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const imgLoad = imagesLoaded(document.body);
    let loadedCount = 0;

    imgLoad.on('progress', () => {
      loadedCount++;
      const totalImages = imgLoad.images.length;
      const percent = totalImages > 0 ? (loadedCount / totalImages) * 100 : 100;
      setProgress(Math.round(percent));
    });

    imgLoad.on('done', () => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });

    imgLoad.on('fail', () => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <PreloaderContext.Provider value={{ isLoading, progress }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  const context = useContext(PreloaderContext);
  if (context === undefined) {
    throw new Error('usePreloader must be used within a PreloaderProvider');
  }
  return context;
}

export default PreloaderContext;
