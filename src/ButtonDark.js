import { useEffect, useState } from 'react';
import * as React from 'react';


function QuoteFromDark() {
  const [quote, setQuote] = useState([]);

  const whenClicked = () => {
    fetch(`https://web-series-quotes-api.deta.dev/quote?series=dark`)
    .then (r => r.json())
    .then (data => {
      setQuote (data);
    })
  }

  return (
    <div>
      <button type='button' onClick={() => whenClicked()}>Get a quote from Dark:</button>
      {quote.map((data) => {
            return (
              <li key={data.quote}>{data.author} : {data.quote};</li>
            )
          })}
    </div>
  )

};

export default QuoteFromDark;