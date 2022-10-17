import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';

export default function Footer() {
  return (
    <section>
      <p>
        Copyright
        {' '}
        {getFullYear()}
        {' - '}
        {getFooterCopy()}
      </p>
    </section>
  );
}
