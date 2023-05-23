import { useEffect, useState } from 'react';
import QuoteFromBreakingBad from './ButtonBreakingbad';
import QuoteFromDark from './ButtonDark';
import QuoteFromGOT from './ButtonGameOfThrones';


function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => { quotes() }, []);
  
  const quotes = async () => {
    const responseFromFetch = await fetch(`https://web-series-quotes-api.deta.dev/quote/`)
    setQuote (await responseFromFetch.json());
  };

  return (
    <div>
      <ul>
        <div>
          <h3>Random Quote:</h3> 
          {quote.map((data) => {
            return (
              <li key={data.quote}>{data.author} : {data.quote};</li>
            )
          })}
          </div>
      </ul>
      <ul><QuoteFromBreakingBad /></ul>
      <ul><QuoteFromDark /></ul>
      <ul><QuoteFromGOT /></ul>
    </div>
    );
};

export default App;
