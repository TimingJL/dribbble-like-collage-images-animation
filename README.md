# Dribbble Like Collage Images Animation
Study how dribbble-404 make the beautiful 404 site and remake it.

**目標：**[dribbble-404 page](https://dribbble.com/shots/902435-Website-Analytics-Dashboard/attachments/98800?fbclid=IwAR38Oqp0kxBYHKR8iamYRKFlkFpEzO-NMSfQ55RF30WnCvJqjvjXMwQ_3lE)

**成果：**[Demo](https://timingjl.github.io/dribbble-like-collage-images-animation/)

![](https://raw.githubusercontent.com/TimingJL/dribbble-like-collage-images-animation/master/demo/dribbble-404-clone-demo.gif)


# 做法解析
## 飛入圖片動畫
**如何用圖片像拼圖那樣排列成404的樣子？**  
- 這邊沒有特別使用什麼聰明的技巧，只是單純的透過`工人智慧`來設定每一張圖片的位置。但是為了要排列得好看，會在比較下面的圖層用文字顯示，然後再透過像描邊一樣的方式，慢慢把圖片的位置抓出來設定上去，並做微調，微調的時候特別注意要前後標齊、左右對正就可以了。
- 雖然透過手動的方式設定圖片很費工、沒有效率，但是既然都已經做了沒有效率的事情，最少就避免不要重複造輪子，所以這邊我把可以拼成每個數字的圖片位置抽出來參數化，因此被做過的東西就能夠重複被使用。之後如果想要顯示別的數字，就能夠重複使用這些被編輯好的模組，不用再重新定位一次。
```js
const imagePositions = {
  0: [
    [42, 20.5],
    [42, 74],
    [22.5, 22.5],
    ...
    ...
  ],
  4: [
    [42.5, 27.5],
    [34, 34],
    [24, 40],
    ...
    ...
  ],
};
```

**動畫處理：**  
- 這邊的動畫是使用 css 的 `transform` 屬性並搭配 `keyframes` 來產生，其中圖片飛入的角度是由 transform 的 `translateX`, `translateY`, `translateZ` 三個值並透過亂數來控制。
- 另外由於飛入的時候，想要製造圖片由近而遠往前飛的效果，物理上，近距離的東西看起來比較大，變遠之後東西看起來會比較小，所以這邊加入 transform 的 `scale` 屬性來調整圖片方大縮小的比例。
```js
const signed = () => (Math.floor(Math.random() * 10) % 2 === 0 ? 1 : -1);
const transformAnimation = () => {
  const x = signed() * 1000 * Math.random();
  const y = signed() * 1000 * Math.random();
  const z = 500 * Math.random();
  const s = getRandomArbitrary(2, 10);
  return keyframes`
    0% {
      opacity: 0;
      transform: translateX(${x}px) translateY(${y}px) translateZ(${z}px) scale(${s});
    }
    100% {
      opacity: 1;
      transform: translateX(0px) translateY(0px) translateZ(0px) scale(1);
    }
  `;
};
```

**圖片顏色處理：**  
- 由於 dribbble 自己有龐大的圖片資料庫以及索引，因此他們能夠透過給定一個指定顏色，而拿到符合那個顏色的許多圖片。但由於我們沒有辦法直接使用 dribbble 的資料庫或是 API，而且我們也希望把這個專案的焦點聚焦在前端，所以想要避免透過爬蟲或是其他方式來取得圖片，因此我們想要找一個替代方案來模擬取得不同顏色的圖片。
- 在這邊我思考說，是不是有辦法直接透過程式改變圖片的顏色？原本想到的方法是想要使用一張純色的 div tag 直接像遮罩一樣蓋在我們的圖片上面，然後改變這個遮罩的透明度，所以只要遮罩變成紅色，下面的圖面也會看起來紅紅的，遮罩變成綠色，下面的圖面也會看起來綠綠的。但實際上這麼做了之後發現一個缺點，就是`因為這個遮罩是有調整過透明度的，所以顏色總是沒有辦法很鮮艷`，跟我們所選擇的顏色總是會差一個透明度，所以看起來顏色比較淡，視覺效果沒有那麼好。如果調高透明度，那麼後面圖片就會看不清楚，但若調低透明度，則我們所指定的顏色就會不那麼明顯。
- 後來找一下，發現一個自己過去沒有注意到的css屬性 `background-blend-mode` 剛好符合這個需求，他的 [browser support](https://caniuse.com/#search=background-blend-mode) 在主流瀏覽器(Chrome, Firefox, Safari, iOS Safari, Android Browser)上面也不錯，而最新的 Edge 76也有支援(至於 IE，先叫他去旁邊玩沙好了...)。
- `background-blend-mode`可以幫助我們把 2 張圖像用混合模式做效果，這邊我使用到的是 `multiply`顏色相乘模式，如此做到的顏色效果會跟 dribbble 比較接近。但缺點就是會失去原本圖片的顏色，但這個缺點我覺得比上面的遮罩變色方式較為能夠被接受。
```css
background-image: url(imageUrl), linear-gradient(#f00, #f00);
background-blend-mode: multiply;
```

>使用 background-blend-mode 实现主色改为渐变色  
>https://www.cnblogs.com/coco1s/p/8080211.html
>
>不可思议的混合模式 background-blend-mode  
>https://github.com/chokcoco/iCSS/issues/31

**背景文字消失動畫：**  
- 在圖片動畫飛進來之前，會先有一個以文字顯示的 404 在畫面上，我們希望圖片飛進來的瞬間，文字會做淡出消失。但是這邊如果只有加上 keyframes 的動畫的話，在動畫播放完之後，css 就會回到原本的狀態。也就是說，文字淡出消失之後，文字又會突然出現，這樣的效果不是我們想要的。
- 會造成上面的結果，是因為 `animation-fill-mode` 預設是 `none`。`animation-fill-mode` 這個 css 屬性的意思是說，可以指定在動畫播放結束之後，物件的狀態是怎麼樣，是不會套用任何樣式(none)？還是保留動畫完成之後的那個最後樣式(forwards)？又或者想要回到關鍵畫格第一幀的樣式(backwards)？因為這邊我們希望動畫播放完之後，文字就消失了，所以這邊我們設定 `animation-fill-mode: forwards;`。

```js
import { keyframes } from 'styled-components';
const invisibleAnimation = keyframes`
  0% {
    color: #eee;
  }
  100% {
    color: white;
    opacity: 0;
  }
`;
```

```css
animation: ${invisibleAnimation} 1s ease-in; /* 文字淡出消失動畫 */
animation-fill-mode: forwards; /* 保持動畫結束後的狀態 */
```

## 彩色顏色選擇拉霸(Color Picker Slider Bar)
**拖拉功能：**  
- 這邊實作的方法我想到有幾種，若直接使用別的人的套件，雖然可以避免重複造輪子，但是比較難客製化樣式。第二種方法是透過`-webkit-appearance: none;`覆寫 `<input type="range" />` 的樣式。第三種方法是使用`RxJS`來實作拖拉功能。
- 這個專案當中我選擇第三種方法，`使用 RxJS 來實作拖拉功能`，其實我後來覺得比較好的方法應該是第二種，直接覆寫`<input type="range" />`，因為這樣只需要修改 css 樣式就可以了。但是因為很想要找機會練習使用`RxJS`來做一些東西，所以一時手癢就自己刻了一個拉霸。
- 簡單的說明一下 RxJS 實現拖拉的步驟：
  1. 首先畫面上有一個 `thumb` 元件來監聽 `mousedown` 事件
  2. 當 `mousedown` 發生時，開始監聽 `mousemove` 事件。當 `mousemove` 事件持續進行的時候，對 `thumb` 的位置及顏色做改變。
  3. 當 `mouseup` 事件發生時，結束監聽 `mousemove` 事件，並且改變 404 的顏色並重新播放圖片飛入動畫。
```js
const mouseDown = fromEvent(thumbDOM, 'mousedown');
const mouseUp = fromEvent(body, 'mouseup');
const mouseMove = fromEvent(body, 'mousemove');
mouseDown
  .pipe(
    concatMap(() => mouseMove.pipe(takeUntil(mouseUp))),
    map((moveEvent) => moveEvent.clientX),
  )
  .subscribe((mousePosX) => {
    handleSetValue(trackDOM, mousePosX);
  });
```
>改變 HTML5 range 樣式的兩種方法  
>https://www.oxxostudio.tw/articles/201503/html5-input-range-style.html
>
>30 天精通 RxJS (08)：簡易拖拉實作 - take, first, takeUntil, concatAll  
>https://ithelp.ithome.com.tw/articles/10187333

**手機上的拖拉功能：**  
- 我們做完拖拉功能之後，如果用手機開啟網頁玩玩看，會發現怎麼拖拉功能失靈了！？原因是因為我們上面用 RxJS 所實作的拖拉功能，是監聽滑鼠事件(mouse event)，而在智慧型觸控裝置上面，我們在滑來滑去的時候，其實是觸碰事件(touch event)，因為觸發的是不同的事件，因此功能才會失靈。
- 若我們希望在手機上面也能夠拖拉色彩選擇拉霸的話，我們需要找到對應的事件並且監聽他。如下程式碼，觸控螢幕上面，按下事件是 `touchstart` ，結束而放開手指的事件是 `touchend` ，而滑手機的那個滑動事件是 `touchmove` 。
- 除了要修改事件之外，另一方面要特別注意的是，我們所希望取得的游標位置 `clientX` 這個參數，跟滑鼠事件稍微有所不同，所以只改事件名稱是不行的，需要再檢查一下物件的結構，行為才會正確。
```js
export const useTouchDrag = ({
  thumbRef,
  trackRef,
  handleSetValue,
}) => {
  useEffect(() => { // 監聽 thumb 拖曳行為以改變顏色
    const thumbDOM = thumbRef.current;
    const trackDOM = trackRef.current;
    const { body } = document;
    const touchStart = fromEvent(thumbDOM, 'touchstart');
    const touchUp = fromEvent(body, 'touchend');
    const touchEnd = fromEvent(body, 'touchmove');
    touchStart
      .pipe(
        concatMap(() => touchEnd.pipe(takeUntil(touchUp))),
        map((touchEvent) => touchEvent.touches[0].clientX), // 跟滑鼠事件取得 clientX 略有不同
      )
      .subscribe((touchPosX) => {
        handleSetValue(trackDOM, touchPosX);
      });
  }, []);
};
```

>rxjs drag and drop with touch support  
>https://gist.github.com/MoLow/5adec1333e11e03ebc6dbf08c2a6d30c

**拖拉功能選顏色：**  
- 完成拖拉功能之後，我們需要讓 `thumb` 元件被拖拉到哪裡，就改變成什麼顏色。但是拖拉的時候，我們只有得到 `thumb` 距離拉霸軌道 `track` 最左邊的距離，要怎麼讓他可以改變顏色呢？答案是，無腦用算的。
- 因為我們拉霸有六種顏色，分別是紅色、黃色、綠色、淺藍、深藍、紫色、回到紅色。兩個相鄰的顏色彼此漸層。所以這邊我就用兩個顏色相鄰的距離，來對應相對的顏色。由於顏色的表達是由16進位的 `00` 到 `ff` ，或是 `ff` 到 `00` ，因此把距離換算成相對應比例的 `16 進位數字` 之後，就能夠產生相對應的色票顏色了。

**styled-components 元件太頻繁更新的問題：**  
- 在這個專案我使用 `styled-components` 來編寫我的 css 樣式。`styled-components` 有一個很方便的地方，就是它允許我們透過傳入的 `props` 來改變 css 樣式。
- 但是由於我們的拉霸在拖拉的時候，需要非常頻繁的改變 `thumb` 元件的位置以及顏色，所以如果把更新的位置以及顏色都透過 `props` 傳入來改變樣式的話，他會跳出一個警告說：
>"Over 200 classes were generated for component styled.div. Consider using the `attrs` method, together with a style object for frequently changed styles."
- 這是因為只要每次傳入的 `props` 發生改變，`styled-components` 元件就需要產一個新的 class 來改變樣式。
- 為了避免很頻繁的產生新的 class ，這邊我把需要透過 `props` 很頻繁更新的屬性從 `styled-components` 裡面抽出來，寫成 inline style 的樣式，藉此避免上述的問題。
