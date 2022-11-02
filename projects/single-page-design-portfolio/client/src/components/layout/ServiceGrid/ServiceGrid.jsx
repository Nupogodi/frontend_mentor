import React from 'react';
import PropTypes from 'prop-types';

// components
import { Item, Heading } from 'components/';

// styles
import styles from './ServiceGrid.module.css';

export const ServiceGrid = ({ data = [] }) => {
  return (
    <ul className={styles.grid}>
      {data.map((obj) => {
        const { id, svg, color, text, gridArea } = obj;
        const SVG = svg;

        return (
          <Item
            style={{ gridArea, backgroundColor: color }}
            key={id}
            color={color}
            render={(svg) => <SVG style={{ marginLeft: 'auto' }} />}
          >
            <Heading tag='h2' size='sm' color='light'>
              {text}
            </Heading>
          </Item>
        );
      })}
    </ul>
  );
};

ServiceGrid.propTypes = {
  data: PropTypes.array,
};
