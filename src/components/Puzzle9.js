import React, { useState } from 'react';

const Puzzle9 = () => {
  const [image, setImage] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [meme, setMeme] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateMeme = () => {
    if (!image) return;
    
    const memeImage = new Image();
    memeImage.src = image;
    memeImage.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 500;
      canvas.height = 500;
      const ctx = canvas.getContext('2d');
      const scale = Math.max(canvas.width / memeImage.width, canvas.height / memeImage.height);
      const x = (canvas.width - memeImage.width * scale) / 2;
      const y = (canvas.height - memeImage.height * scale) / 2;
      ctx.drawImage(memeImage, x, y, memeImage.width * scale, memeImage.height * scale);
      
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.font = '30px Impact';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(topText, canvas.width / 2, 50);
      ctx.fillText(bottomText, canvas.width / 2, canvas.height - 50);
      setMeme(canvas.toDataURL());
    };
  };

  return (
    <div>
      <form>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          placeholder='Upload image'
        />
        <input value={topText} onChange={(e) => setTopText(e.target.value)} placeholder='top text'/>
        <input value={bottomText} onChange={(e) => setBottomText(e.target.value)} placeholder='bottom text'/>
        <button type="button" onClick={handleGenerateMeme}>Generate Meme</button>
      </form>
      {meme && <img src={meme} alt="Generated Meme" />}
    </div>
  );
};

export default Puzzle9;
