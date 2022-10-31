import React from 'react';

// constants
import { SERVICE_LIST } from 'utils/constants';

// components
import { Item, Heading } from 'components/';

// styles
import styles from './ServiceGrid.module.css';

export const ServiceGrid = () => {
  return (
    <ul className={styles.grid}>
      {' '}
      {SERVICE_LIST.map((obj) => {
        const { id, svg, color, text, gridArea } = obj;
        return (
          <Item gridArea={gridArea} key={id} svg={svg} color={color}>
            <Heading tag='h2' size='sm' color='light'>
              {text}
            </Heading>
          </Item>
        );
      })}
    </ul>
  );
};
