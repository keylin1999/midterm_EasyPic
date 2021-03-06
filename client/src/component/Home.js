import React, { Component } from 'react';
import logo from './a.png'
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="main">
        <img id="Logo" src={logo}/>
        <h1>建議用法</h1>
        <div className="paragraph">
          你可以寫<pre>{"<"}img class="RandomPic"{">"}</pre>
          在html裡，然後再在程式碼中向我們的網站要圖片來自動更新 img source.
          </div>
          <div className="paragraph">
            從：
        </div>
          <div className="paragraph">
            <pre>{"<"}img class="RandomPic"{">"}</pre>
        </div>
        <div className="paragraph">
            變成：
        </div>
        <div className="paragraph">
            <pre>{"<"}img class="RandomPic" src="Some URL"{">"}</pre>
        </div>
        <div className="paragraph">
            你可以透過這個網站看我們的圖庫有哪些圖片，又或是如果你是許可的使用者的話你可以新增和刪除我們的圖檔
        </div>
        <div className="paragraph">
          只有傳上面有的 Tag 才會被加入，所以其實有提供刪除和新增 Tag 的 API 只是礙於時間的關係沒有辦法把它做得很完全，也有刪除圖片的 API。
        </div>
        <div className="paragraph">
          <h1>API 使用篇</h1>
        </div>
        <div className="paragraph">
          <pre>{"/api/imgSrc"}</pre>
        </div>
        <div className="paragraph">
         Method: GET,  Content-Type: application/json 然後傳想要取得的圖片集的 tag
        </div>
        <div className="paragraph">
          <pre>{"/api/imgSrc"}</pre>
        </div>
        <div className="paragraph">
         Method: DELETE,  Content-Type: application/json 然後傳 password 和要刪掉的資源的 source
        </div>
        <div className="paragraph">
          <pre>{"/api/imgTags"}</pre> 
        </div>
        <div className="paragraph">
        Method: POST,  Content-Type: application/json 然後傳 tagName 和密碼 password
        </div>
        <div className="paragraph">
          <pre>{"/api/imgTags"}</pre>
        </div>
        <div className="paragraph">
        Method: DELETE,  Content-Type: application/json 然後傳 tagName 和密碼 password
        </div>
      </div>
    );
  }
}
export default Home;
