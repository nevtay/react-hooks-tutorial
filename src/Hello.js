import React, {useEffect} from 'react';

export const Hello = () => {
  useEffect(() => {
    console.log('render hello');

    return () => {
      console.log('unmount hello');
    };
  }, []);
  return <div>Hello!</div>;
};
