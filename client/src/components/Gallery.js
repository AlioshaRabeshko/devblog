import React, { useState } from 'react';
import Popup from "reactjs-popup";
import add from '../svgs/add.svg'

const images = [
  'https://images6.alphacoders.com/915/915683.png',
  'https://wallbox.ru/wallpapers/main2/201733/art-devuska-salut-anime.jpg',
  'https://avatars.mds.yandex.net/get-kinopoisk-post-img/2423210/201fe8e8af39ce150ad109c631e46d90/960x540',
  'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/tonari-no-totoro.jpg',
  'https://lh3.googleusercontent.com/proxy/2EZ0ogClJ7CSgXiDiiX0eK7SHTYhJgqcU8Yabka30r9PZ3IUP4Q9qVp5euW2wF08fNhBEC-8-ShGTzxiRQr1vxXcMr85sNWuAZNrexr1T8oTdoshAcBhRqw8gYKkv_0MGI2vgrYSTeJ4baDAfgojbtfGV_bOnUo1fPlGu9k84toP7F4JyExJgCGtrEZhyVKZdp2WzmGTR-czUYKsgoWOpIW487RVd4pMMrk',
  'https://i.ytimg.com/vi/rS5RGhx0vqc/maxresdefault.jpg',
  'https://i.pinimg.com/originals/05/72/3a/05723a0e662c9cc120cb271736035d5d.jpg',
  'https://images6.alphacoders.com/107/1071150.jpg',
  'https://i.pinimg.com/originals/96/59/26/965926c88be7049dfa2bf1b589807f60.jpg',
  'https://writercenter.ru/uploads/images/00/20/23/2013/05/09/26cb04-big.jpg',
  'https://lh3.googleusercontent.com/proxy/P0cidKN6UYJkjZQ7BWyOU1Qn671xubTtg759-Fi2rbUZ4JHTtOF2zhXyTzR4H8JcvAYyam99WAUORXgOn-Hp1Fhak8B0Spn5ZUgDYVHfqr31AZHIrqAeHKlwu0vxVTXqwROjDKRe2foeR81XIeheukhfPA',
  'https://pm1.narvii.com/6550/9cf477f0c141edd10d4b2d1ff2a988407d08cae1_hq.jpg'
]

function Gallery() {
  while ((images.length - 2) % 3 !== 0)
    images.push('')
  return (
    <div className="gallery-image-list">
      <div className="gallery-image" key={0}>
        <input
          className="img-input"
          type="file"
          id="img"
          name="img"
          accept="image/*"
          multiple onChange={(e) => console.log(e.target.files)}
        />
        <label htmlFor="img">Choose images to upload</label>
        <p className="or">Or upload from URL</p>
        <input type="text"></input>
        <button className="sign-button">Upload</button>
      </div>
      {images.map((el, id) => (
        <div className="gallery-image" key={id + 1}>
          <img src={el} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Gallery;
