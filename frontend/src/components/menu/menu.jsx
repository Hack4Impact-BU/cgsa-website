import React, { useState, useEffect } from 'react';
import './menu.css';

function Menu({ visible }) {
  const [results, setResults] = useState([])
  const [body, setBody] = useState([])
  const links = new Map([['About Us', 'about-us'], ['Blog', 'blog'], ['Contact Us', 'contact-us'], ['Home', ''], ['Newsletter Sign-Up', 'newsletter'], ['Resources', 'resources'], ['Space Booking Form', 'space-booking'], ['Volunteer Sign-Up', 'volunteer']])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/text')
      .then(res => res.json())
      .then(data => {
        setBody(data.pages)
      })
  }, [])

  function handleSearch(e) {
    const query = e.target.value.trim()

    if (!e.target.value.trim()) {
      setResults([])
      return
    }

    try {
      let newResults = []
      body.forEach(obj => {
        const words = obj.text.split(" ")
        for (let i = 0; i < words.length; i++) {
          let addResult = true
          if (query.includes(" ")) {
            const queryWords = query.split(" ")
            for (let j = i; j < i+queryWords.length-1; j++)
              if (j < words.length && words[j].toLowerCase() != queryWords[j-i].toLowerCase())
                addResult = false
            if (i+queryWords.length-1 < words.length && !words[i+queryWords.length-1].includes(queryWords[queryWords.length-1]))
              addResult = false
            if (addResult)
              i += query.split(" ").length-1
          } else if (!words[i].toLowerCase().includes(query.toLowerCase())) {
            addResult = false
          }
          if (addResult)
            newResults.push({id: newResults.length, page: obj.name, excerpt: i-3 <= 0 ? words.slice(0, i+4).join(' ')+'...' : i+4 >= words.length ? '...'+words.slice(i-3, words.length).join(' ') : '...'+words.slice(i-3, i+4).join(' ')+'...'})
        }
      })
      setResults(newResults)
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
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
            {results.length > 0 && (
              <div id="search-results">
                <ul>
                  {results.map((result) => (
                    <a href={'/'+links.get(result.page)} key={result.id}>
                      <li>
                        <p style={{fontWeight: 'bold'}}>{result.page}</p>
                        <i style={{fontSize: '0.8rem'}}>{result.excerpt}</i>
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
            )}
            <p id="search-text" style={{opacity: results.length === 0 ? "1" : "0"}}>No results found</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
