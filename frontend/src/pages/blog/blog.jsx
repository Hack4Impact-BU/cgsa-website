import { useState, useEffect } from 'react'
import './blog.css'
import { DateTime } from 'luxon'
import parse from 'html-react-parser'

function Blog() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://cgsa-website-9ee3262d35c4.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div className="blog_container">
            <h1 className="page_title" style={{ textAlign: 'center' }}>Blog</h1>
            <p className="about_description" style={{ marginTop: '-1rem' }}>The Center for Gender, Sexuality, and Activism (CGSA) at Boston University is more than just a space—it's a movement. Rooted in a commitment to social justice, the CGSA empowers students to challenge oppression, build community, and advocate for equality across all genders and sexualities. In this blog, we’ll explore the stories, initiatives, and impact of this vital student-led organization, showcasing how it continues to inspire change both on campus and beyond.</p>
            {
                posts.map((item, index) => (
                    <div key={index} class="blog_post">
                        <h1>{item.title}</h1>
                        <h3><i>{item.author}</i> • {DateTime.fromISO(item.createdAt).toLocaleString(DateTime.DATETIME_MED)}</h3>
                        <p>{parse(item.content)}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Blog