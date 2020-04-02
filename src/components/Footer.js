import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Me acompanhe no Instagram{' '}
      <img
        className="img-instagram"
        alt="instagram"
        src="/images/instagram.png"
      />{' '}
      <a
        href="https://instagram.com/paolafabeni/"
        target="_blank"
        rel="noopener noreferrer"
      >
        @paolafabeni
      </a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span>
      </div>
    </footer>
  </div>
)
