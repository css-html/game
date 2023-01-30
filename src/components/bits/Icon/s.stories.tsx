import { storiesOf } from '@storybook/react';
import React from 'react';
import toImage from 'react-svg-to-image';
import { Icon } from '..';

storiesOf('Bits/Icons', module).add('Icons', () => {
  // @ts-ignore
  const icons = Object.keys(Icon).map((key) => Icon[key]);

  const getImages = () => {
    icons
      .filter((elem) => typeof elem === 'function')
      .forEach((icon) => {
        console.log(
          '.icon__' + icon.name.charAt(4).toLowerCase() + icon.name.slice(5)
        );
        toImage(
          `.icon__${icon.name.charAt(4).toLowerCase() + icon.name.slice(5)}`,
          icon.name
        );
      });
  };

  icons.forEach((elem) => {
    console.log(typeof elem);
  });

  return (
    <div className="icons">
      {icons.map((Icons) => (
        <div>
          {typeof Icons === 'function' ? (
            <Icons />
          ) : (
            <img src={Icons} alt={Icons.name} />
          )}
        </div>
      ))}
      <button
        style={{ fontWeight: 'bold', fontSize: '0.5rem', padding: '0.25rem' }}
        onClick={getImages}
      >
        Get Images
      </button>
    </div>
  );
});
