import React, { useState } from 'react';
import './menu.css';
import Typesense from 'typesense'; // import Typesense


  
// Initialize Typesense client
const client = new Typesense.Client({
  nodes: [
    {
      host: 'xxx.a1.typesense.net', // replace with your Typesense host
      port: 443, // usually 8108
      protocol: 'https', // or 'https' depending on your setup
    }
  ],
  apiKey: "bqJAVeRpLOzmSDw18bQBLcKCO4mfs1PH", // replace with your Typesense API key
  connectionTimeoutSeconds: 2
});

function Menu({ visible }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    
    if (!e.target.value.trim()) {
      setResults([]); // Clear results if the query is empty
      return;
    }

    setLoading(true);

    try {
      const response = await client.collections('your_collection_name').documents().search({
        q: e.target.value, // search term from input field
        query_by: 'title,description', // replace with fields from your collection
      });
      setResults(response.hits); // Set search results
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {visible && (
        <div id="menu">
          <div id="items">
            <p className="header">Who We Are</p>
            <p className="header">What We Do</p>
            <p className="header">Get Involved</p>
            <p><a href='/about-us'>About Us</a></p>
            <p><a href='/resources'>Resources</a></p>
            <p><a href='/newsletter'>Newsletter Sign-Up</a></p>
            <p><a href='/blog'>Blog</a></p>
            <p><a href='/calendar'>Calendar</a></p>
            <p><a href='/space-booking'>Space Booking Form</a></p>
            <p><a href='/contact-us'>Contact Us</a></p>
            <p style={{ gridColumn: 3 }}><a href='/volunteer'>Volunteer Sign-Up</a></p>
          </div>

          <div id="search-container">
            <input
              placeholder="Search site..."
              value={query}
              onChange={handleSearch} // handle the search input change
            />
            {loading && <p>Loading results...</p>}
            {results.length > 0 && (
              <div id="search-results">
                <ul>
                  {results.map((result) => (
                    <li key={result.document.id}>
                      <a href={`/search-result/${result.document.id}`}>
                        {result.document.title} {/* replace with the relevant field */}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {results.length === 0 && !loading && <p>No results found</p>}
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
