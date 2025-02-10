export default function Main() {
  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input type="text" placeholder="One does not simply" name="topText" />
        </label>

        <label>
          Bottom Text
          <input type="text" placeholder="Walk into Mordor" name="bottomText" />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src="../../public/assets/meme-one-does-not-simply.png" />
        <span className="top">One does not simply</span>
        <span className="bottom">Walk into Mordor</span>
      </div>
    </main>
  );
}
