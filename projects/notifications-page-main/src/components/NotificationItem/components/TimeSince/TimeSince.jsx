import React from 'react';
import PropTypes from 'prop-types';

// utilities
import { createTimeStamp } from 'utils/utilities';

// components
import { Text } from 'components';

export function TimeSince({ seconds = 0 }) {
  return (
    <Text tag='p' size='sm' color='lighter'>
      {createTimeStamp(seconds)}
    </Text>
  );
}

TimeSince.propTypes = {
  seconds: PropTypes.number.isRequired,
};
