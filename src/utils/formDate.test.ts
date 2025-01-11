import { formatDateStr, formatDateNumber } from './formDate';

describe('formatDateStr', () => {
  it('should format a timestamp into a string with format "DD.MM.YYYY"', () => {
    const timestamp = new Date(2023, 0, 5).getTime(); 
    const formattedDate = formatDateStr(timestamp);
    expect(formattedDate).toBe('05.01.2023');
  });

  it('should handle leap years correctly', () => {
    const timestamp = new Date(2020, 1, 29).getTime();
    const formattedDate = formatDateStr(timestamp);
    expect(formattedDate).toBe('29.02.2020');
  });

  it('should correctly format single-digit days and months', () => {
    const timestamp = new Date(2023, 8, 3).getTime();
    const formattedDate = formatDateStr(timestamp);
    expect(formattedDate).toBe('03.09.2023');
  });
});

describe('formatDateNumber', () => {
  it('should convert a date string "DD.MM.YYYY" into a timestamp in milliseconds', () => {
    const dateString = '05.01.2023';
    const timestamp = formatDateNumber(dateString);
    const expectedTimestamp = new Date(2023, 0, 5).getTime();
    expect(timestamp).toBe(expectedTimestamp);
  });

  it('should handle leap years correctly', () => {
    const dateString = '29.02.2020';
    const timestamp = formatDateNumber(dateString);
    const expectedTimestamp = new Date(2020, 1, 29).getTime();
    expect(timestamp).toBe(expectedTimestamp);
  });

  it('should return the current timestamp if the input is invalid', () => {
    const invalidDate = 'invalid.date';
    const result = formatDateNumber(invalidDate);
    const now = Date.now();
    expect(result).toBeGreaterThan(now - 1000);
    expect(result).toBeLessThan(now + 1000);
  });

  it('should correctly parse dates with single-digit days and months', () => {
    const dateString = '03.09.2023';
    const timestamp = formatDateNumber(dateString);
    const expectedTimestamp = new Date(2023, 8, 3).getTime();
    expect(timestamp).toBe(expectedTimestamp);
  });
});