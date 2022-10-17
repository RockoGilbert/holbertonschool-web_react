import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utility functions', () => {
  // Tests for utility functions

  it('Verifies that getFullYear returns current year (2022)', () => {
    expect(getFullYear()).toEqual(2022);
  });

  it('Verifies that return statement for getFooterCopy is correct for true', () => {
    expect(getFooterCopy(1)).toEqual('Holberton School');
  });

  it('Verifies that return statement for getFooterCopy is correct for false', () => {
    expect(getFooterCopy(0)).toEqual('Holberton School main dashboard');
  });

  it('Verifies that return statement for getLatestNotification is correct', () => {
    expect(getLatestNotification()).toEqual(
      '<strong>Urgent requirement</strong> - complete by EOD',
    );
  });
});