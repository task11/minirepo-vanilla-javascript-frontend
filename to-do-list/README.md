# ๐จโ๐ป To do list Project

> Vanilla JS๋ก To-do List ๊ตฌํํ๊ธฐ

- ํฌ-๋ ๋ฆฌ์คํธ ๊ตฌํ
- json-server๋ฅผ ํ์ฉํด์ ๋ก์ปฌ์ Mock REST API ๊ตฌ์ถ ๋ฐ ์ฐ๋
- ๊ธฐ๋ณธ์ ์ธ ๋ฐ์ดํฐ ์ฒ๋ฆฌ์ธ ์์ฑ, ์ฝ๊ธฐ, ์์ , ์ญ์ (CRUD)๋ฅผ ๊ตฌํ
- Pagenation ์ฒ๋ฆฌ

---

## ๐  ์ ์ฉํ ๊ธฐ์ 

### strict mode

- strict mode๋ ์๊ฒฉํ๊ฒ ๋ฌธ๋ฒ ๊ฒ์ฌ๋ฅผ ์ค์ํ์ฌ ๊ธฐ์กด์๋ ๋ฌด์๋๋ ์ค๋ฅ๋ฅผ ๋ฐ์์ํด

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)



### json-server

- ์งง์ ์๊ฐ์ REST API๋ฅผ ๊ตฌ์ถํด์ฃผ๋ ํจํค์ง
- ์ค์  ํ๋ก๋์์์๋ ์ฌ์ฉํ์ง ์์ (ํ์คํธ์ฉ MOCK data)

[https://github.com/typicode/json-server](https://github.com/typicode/json-server)



### DOMContentLoaded

- ์ด๊ธฐ HTML ๋ฌธ์๋ฅผ ์์ ํ ๋ถ๋ฌ์ค๊ณ  ๋ถ์ํ์ ๋ ๋ฐ์ `์คํ์ผ ์ํธ, ์ด๋ฏธ์ง, ํ์ ํ๋ ์`์ ๋ก๋ฉ์ ๊ธฐ๋ค๋ฆฌ์ง ์๋๋ค.
- HTML๊ณผ script๊ฐ ๋ก๋๋ ์์ ์ ๋ฐ์ํ๋ ์ด๋ฒคํธ์ด๋ค.
- onload ์ด๋ฒคํธ๋ณด๋ค ๋จผ์  ๋ฐ์ํ๋ค. ๋น ๋ฅธ ์คํ์๋๊ฐ ํ์ํ ๋ ์ ํฉํ๋ค.
- (IE8 ์ดํ์์๋ ์ง์ํ์ง ์๋๋ค.)

```
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
```

[https://developer.mozilla.org/ko/docs/Web/API/Window/DOMContentLoaded_event](https://developer.mozilla.org/ko/docs/Web/API/Window/DOMContentLoaded_event)



### Javacript fetch API

- AJAX ์์ฒญ์ผ๋ก Back-End JSON Data๋ฅผ ๊ฐ์ ธ์จ๋ค.

[https://developer.mozilla.org/ko/docs/Web/API/Fetch_API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)



### Pagination

๊ตฌํ ๋ชฉํ :
+ ํ ํ์ด์ง์ ๋ฐ์ดํฐ ๊ฐ์ 5๊ฐ
+ ํ ํ๋ฉด์ ํ์ด์ง ๊ฐ์ 5๊ฐ


ํ์ด์ง๋ค์ด์์ ๊ตฌํํ๊ธฐ ์ํ ์ค์ ๊ฐ:
- currentPage: ํ์ฌ ํ์ด์ง
- totalCount: ์ด ๋ฐ์ดํฐ์ ๊ฐฏ์ => ์ฃผ๋ก backend์์ ์ฒ๋ฆฌ
- pageCount: ํ๋ฉด์ ๋ํ๋  ํ์ด์ง ๊ฐฏ์
- limit: ํ ํ์ด์ง ๋น ๋ํ๋ผ ๋ฐ์ดํฐ์ ๊ฐฏ์
- `json-server`์ paginate๋ก ๊ตฌํ



### json-server Paginate

#### Paginate

> Use _page and optionally _limit to paginate returned data. In the Link header you'll get first, prev, next and last links.

```
GET /posts?_page=7
GET /posts?_page=7&_limit=20
```
10 items are returned by default


[https://github.com/typicode/json-server](https://github.com/typicode/json-server)


---

# ๐ฅ ๊ตฌํ ๊ฒฐ๊ณผ

![todo-list](https://user-images.githubusercontent.com/89209626/157178857-c87821ea-9e07-41ca-ac6c-75ff25c32777.gif)

---

# ๐ ํ๋ก์ ํธ ํ๊ณ : KPT

> Keep/ Problem/ Try

`KEEP` :
  + **json-server ์ฌ์ฉ :** json-server์ ์ฒ์ ์ฌ์ฉํด๋ณด์๋ค. ์ฌ์ค firebase๋ก ์งํํ๋ ํ๋ก์ ํธ๊ฐ ์๋๋ฐ, ์ ๋ง ๊ฐ๋จํ ๊ฒ์ฆ์ฉ ๋ฐ์ดํฐ๋ json-server๋ก ์ถฉ๋ถํ  ๊ฒ ๊ฐ๋ค. ์์ฃผ ์ข์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์๊ฒ๋์๋ค.
  + **๊ณตํต ๋ชจ๋ํ :** ์ด๋ฒ ํ๋ก์ ํธ๋ฅผ ํ๋ฉด์ ์์ฃผ ์ฐ์ด๋ ํจ์๋ฅผ ๊ณตํต ๋ชจ๋๋ก ๋นผ์ ์์ฑํ๋๊ฒ ํธ๋ฆฌํ๋ค๋ ๊ฒ์ ๊นจ๋ณ์๋ค.
  + **Pagination :** ํ์ด์ง ๋ค์ด์์ ๊ตฌํํ๊ธฐ ์ํด ์ด๋ก ์ ํ์ตํ๊ณ  ์ ์ฉํด ๋ณด์๋ค.

`PROBLEM` :
  + **์ฌ์ฌ์ฉ ๊ฐ๋ฅํ ์ฝ๋ ์์ฑ :** ์ฝ๋๋ฅผ ์์ฑํ๋ฉด์ ์ฌ์ฌ์ฉ ๊ฐ๋ฅํ๊ณ , ๋ ๋์ ์ฝ๋๋ฅผ ์งค ์ ์์ ๊ฒ ๊ฐ๋ค๋ ์๊ฐ์ด ๊ณ์ ๋ ์ฌ๋๋ค.
  + **Pagination :** ํ์ด์ง๋ค์ด์์ ๊ตฌํํ๋ฉด์, ์ด ๋ฐ์ดํฐ์ ๊ฐ์๋ฅผ ๊ฐ์ ธ์ค๋ ๋ก์ง์ ์์ฑํ ์ง ๊ณ ๋ฏผ์ด๋์๋ค.

`TRY` : 
  + **์ฌ์ฌ์ฉ ๊ฐ๋ฅํ ์ฝ๋ ์์ฑ :** ์ค์  ํ๋ก์ ํธ์์ ๋ชจ๋๋ก ๋ฃ์ ๋, ์ฌ์ฌ์ฉ๊ฐ๋ฅํ๊ฒ ๋ฆฌํฉํ ๋งํด์ผ๊ฒ ๋ค.