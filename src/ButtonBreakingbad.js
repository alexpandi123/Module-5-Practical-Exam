import { useEffect, useState } from 'react';
import * as React from 'react';


function QuoteFromBreakingBad() {
  const [quote, setQuote] = useState([]);

  const whenClicked = () => {
    fetch(`https://web-series-quotes-api.deta.dev/quote?series=breaking_bad`)
    .then (r => r.json())
    .then (data => {
      setQuote (data);
    })
  }

  return (
    <div>
      <button type='button' onClick={() => whenClicked()}>Get a quote from Breaking Bad:</button>
      {quote.map((data) => {
            return (
              <li key={data.quote}>{data.author} : {data.quote};</li>
            )
          })}
    </div>
  )

};

export default QuoteFromBreakingBad;