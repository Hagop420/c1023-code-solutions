// FILE IMPORT'S
import { ChangeEvent, useState } from 'react';
import './App.css';

// PARENT COMPONENT'S PROP'S
type PropsQuote = {
  quotes: string[];
};

// PARENT COMPONENT
export function SearchableList({ quotes }: PropsQuote) {
  // current states
  const [currSearch, setCurrSearch] = useState('');

  return (
    <>
      <SearchableListInputCreation
        inputSearch={(e) => setCurrSearch(e.target.value)}
        currSearch={currSearch}
      />
      <SearchableQuotesArr
        quotes={quotes.filter((quote) => {
          if (quote.toLowerCase().includes(currSearch.toLowerCase())) {
            return true;
          } else {
            return false;
          }
        })}
      />
    </>
  );
}

type InputSrch = {
  inputSearch: (index: ChangeEvent<HTMLInputElement>) => void;
  currSearch: string;
};

export function SearchableListInputCreation({
  inputSearch,
  currSearch,
}: InputSrch) {
  return (
    <>
      <input
        onChange={inputSearch}
        value={currSearch}
        className="inputTop form-control bg-dark search"
        type="text"
        placeholder="Search..."
      />
    </>
  );
}

type PropsArr = {
  quotes: string[];
};

export function SearchableQuotesArr({ quotes }: PropsArr) {
  return (
    <ul className="list-unstyled d-flex flex-column justify-content-start align-items-start">
      {quotes.map((q, index) => (
        <li className="text-left" key={index}>
          {q}
        </li>
      ))}
      {quotes.length === 0 && <p>No Matches!!</p>}
    </ul>
  );
}
