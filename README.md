# Dribbble Like Collage Images Animation
Study how dribbble-404 make the beautiful 404 site and remake it.

**目標：**[dribbble-404 page](https://dribbble.com/shots/902435-Website-Analytics-Dashboard/attachments/98800?fbclid=IwAR38Oqp0kxBYHKR8iamYRKFlkFpEzO-NMSfQ55RF30WnCvJqjvjXMwQ_3lE)

**成果：**[Demo](https://timingjl.github.io/dribbble-like-collage-images-animation/)

![](https://raw.githubusercontent.com/TimingJL/dribbble-like-collage-images-animation/master/src/demo/dribbble-404-clone-demo.gif)


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
const sign = () => (Math.floor(Math.random() * 10) % 2 === 0 ? 1 : -1);
const transformAnimation = () => {
  const x = sign() * 1000 * Math.random();
  const y = sign() * 1000 * Math.random();
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
- 後來找一下，發現一個自己過去沒有注意到的css屬性 `background-blend-mode` 剛好符合這個需求，他的 [browser support](https://caniuse.com/#search=background-blend-mode)在主流瀏覽器(Chrome, Firefox, Safari, iOS Safari, Android Browser)上面也不錯，而最新的 Edge 76也有支援(至於 IE，先叫他去旁邊玩沙好了...)。
- `background-blend-mode`可以幫助我們把2張圖像用混合模式做效果，這邊我使用到的是 `multiply`顏色相乘模式，如此做到的顏色效果會跟 dribbble 比較接近。但缺點就是會失去原本圖片的顏色，但這個缺點我覺得比上面的遮罩變色方式較為能夠被接受。
```css
background-image: url(imageUrl), linear-gradient(#f00, #f00);
background-blend-mode: multiply;
```

>使用 background-blend-mode 实现主色改为渐变色
>https://www.cnblogs.com/coco1s/p/8080211.html
>
>不可思议的混合模式 background-blend-mode
>https://github.com/chokcoco/iCSS/issues/31

