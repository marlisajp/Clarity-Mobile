import { useState, useEffect } from 'react';

export default useQuote = () => {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const quoteData = data[randomIndex];
      setQuote(`"${quoteData.text}" - ${quoteData.author}`);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return quote;
};
