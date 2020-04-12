import axios from 'axios';

const URI = 'http://private-4945e-weather34.apiary-proxy.com/weather34/rain';
let cache;

/**
 * Fetches the remote service while caching the response
 *
 * @returns {Promise}
 */
const fetch = async () => {
  if (!cache) {
    const resp = await axios.get(URI);
    [cache] = Object.values(resp.data);
  }
  return cache;
}

/**
 * Fetches the remote service and returns a Promise that is
 * resolved with an array incorporating the amounts in a day-by-day split
 *
 * @returns {Promise}
 */
export const getAmounts = async () => {
  const amounts = await fetch();
  if (!amounts) throw new Error('Invalid response schema');

  const { days } = amounts;
  if (!days) throw new Error('Invalid response schema');

  return days;
}

/**
 * Fetches the remote service and returns a Promise that is
 * resolved with the amount assigned to the given day (1-7)
 *
 * @returns {Promise}
 */
export const getAmountByDayNumber = async (number) => {
  const days = await getAmounts();
  const day = days.find(obj => obj.day === number);
  const { amount } = day;
  return amount;
}
