import React, { useState, useEffect } from 'react';
import './menu.css';

function Menu({ visible }) {
  const [results, setResults] = useState([])
  const [body, setBody] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('http://127.0.0.1:5000/text')
      .then(res => res.json())
      .then(data => {
        setBody(data.pages)
      })
  }, [])

  function handleSearch(e) {
    const query = e.target.value

    if (!e.target.value.trim()) {
      setResults([])
      return
    }

    setLoading(true)

    try {
      let newResults = []
      body.forEach(obj => {
        const words = obj.text.split(" ")
        for (let i = 0; i < words.length; i++) {
          console.log(words[i],  words[i].includes(query) || query.includes(words[i]))
          if (words[i].includes(query) || query.includes(words[i]))
            newResults.push({id: newResults.length, page: obj.name, excerpt: i-2 <= 0 ? words.slice(0, i+3).join(' ')+'...' : i+3 >= words.length ? '...'+words.slice(i-2, words.length).join(' ') : '...'+words.slice(i-2, i+3).join(' ')+'...'})
        }
      })
      setResults(newResults)
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
    } finally {
      setLoading(false)
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
              type="text"
              placeholder="Search site..."
              onChange={(e) => handleSearch(e)}
            />
            {loading && <p>Loading results...</p>}
            {results.length > 0 && (
              <div id="search-results">
                <ul>
                  {results.map((result) => (
                    <li key={result.id}>
                      <a href={`/`}>
                        <p>{result.page}</p>
                        <i style={{fontSize: '0.8rem'}}>{result.excerpt}</i>
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
