alt + shift + o : optimize import

# Deploy NextJs to Vercel

- NextJs là của Vercel
- khi push lên github thì Vercel build lại code và deploy

# No Pre-rendering (reactjs ,create-react-app)

- First html trống -> chảy script -> render doom

# Pre-rendering (nextjs)

- https://drive.google.com/file/d/1YKvpah7EiEJido83nWIbA5pfu9O1amUR/view

  - SSG and SSR

# SSG - StaticSiteGeneration

-> default của nextjs,

- idea : lúc build-time đã tạo ra sẵn html, khi nào nào user request lên thì trả về html sẵn (đã được tạo ra lúc build) cho nó and có thể cache (build-time)
-

# SSR - Server Side Rendering

-> Theo mỗi request nó sẽ trả về 1 file html

# CSR - client side rendering

-> static Generation without data + Fetch Data on the Client - Side

# ISR - Incremental Static Regeneration

case : 1 million products - SSG : 1 triệu build html (mất mấy tiếng mỗi lần build) - SSR : 1 triệu user cùng request 1 lần thì server k chịu nổi -

resolve : - SSR + cache -> Hạn chế
=> ISR : build 1k sản phẩm đang phổ biến ra sẵn (build ra sẵn 1k html), user query lên có sẵn trả về, nếu chưa có create ra file mới -> những user sau request thì chỉ việc lấy ra dùng

`mỗi trang có thể áp dụng các kiểu pre-rendering khác nhau`

### 02-05 Automatic Static Optimization

### 02-06 SSG getStaticProps with typescript

- 1 là dùng SSR (getServerSideProps) 2 là dùng SSG (recommend : getStaticProps + getStaticPaths )
- when should i use Static Generation ?
  - Marketing pages (landing pages,...)
  - Blog posts
  - E-commerce product listings
  - Help and documents

-Example : index ( build done will create index.html), don't need use getStaticProps or getStaticPaths

### NextJS: 02-07 SSG getStaticPaths with typescript

- [postId].tsx

### NextJS: 02-08 SSG and Data Fetching on client side

- chuyển về CSR ( client cần thì gọi script vào )
- About
  case 1: import Header normal or turn on Dynamic with ssr:true => log will render in web and server
  case 2 : import Header turn on Dynamic => when don't want render in server, just want render in client

- use Data Fetching on client side :

- in About.tsx, first it only return tag `ul` no tag `li`, fetch api and render data will made by client work (use shadow router in when has `getStaticProps` and want just want fetch in axios )

### NextJS: 02-09 Server Side Rendering with cache

https://drive.google.com/file/d/1-NHWLPnEXvvVTNNRZNDfO66I36a4lYry/view

- Run on Server-side only
- Run per page request
- TTFB (Time To first byte) will be slower than getStaticProps
- Export getServerSideProps from your Page level to enable SSR (not component level)

- use Cache : chỉ có tác dụng khi build lên các môi trường, ở local k có tác dụng

  -case 1: ParamsCache : context.res.setHeader('Cache-Control', 's-maxage=5') : get data and save data in cache in 5s and after 5s reload page will wail 5s to run getServerSideProps(context) to get new data and set in cache and keep loop like that. but: if data form sever change in this 5s then if not reload then data will old

  -case 2: ParamsCache : context.res.setHeader('Cache-Control', 's-maxage=5,stale-while-revalidate') : get data and save data in cache in 5s and after 5s reload page or any time will return old data and hidden run getServerSideProps(context) to get new data and set in cache, if reload again it can't wait 5s, it return new data right now.

  -case 3: ParamsCache : context.res.setHeader('Cache-Control', 's-maxage=5,stale-while-revalidate=5') : get data and save data in cache in 5s and after 5s reload page -> return old data (5s of maxage=5 ) + 5s stale-while-revalidate = 10s will run getServerSideProps(context) to get new data and set in cache getServerSideProps(context) return ngay trong cache and trigger getServerSideProps and will wait 3 s

  - NOTE :when deploy on CDN will remember delete old code
  - Vercel : automatic delete cache of old code when ever time release

- DON'T USE : tùy vào user mà show kết quả khác nhau

### NextJS: 02-10 ISR - Incremental Static Regeneration

https://drive.google.com/file/d/1kg_H6_jcjs2CMVLelOiE6pu7c6_hzSEz/view

- Faster Builds
- Higher Cache Hit Rate
- https://drive.google.com/file/d/1kg_H6_jcjs2CMVLelOiE6pu7c6_hzSEz/view

### NextJS: 02-11 Setup nhiều dạng layout trong NextJS

https://drive.google.com/drive/folders/1p6EjDFBIk9eeoMfsr9z5ufCbhe1rzU8W?usp=sharing

### NextJS: 03-01 Authentication với NextJS

https://drive.google.com/drive/folders/1p6EjDFBIk9eeoMfsr9z5ufCbhe1rzU8W

### NextJS: 03-02 Tạo API đơn giản với NextJS 🚀

### NextJS: 03-04 Proxy requests to API server

- yarn add http-proxy
  yarn add --dev @types/http-proxy

### NextJS: 03-05 Xử lý cho login / logout requests

- yarn add cookies
- yarn add --dev @types/cookies

add for handle easier cookies

### NextJS: 03-06 Integrate API for Login Page

- nếu để folder api ở ngoài với tên là "api" khi lên prod thì sẽ error => đổi tên để làm custom api

### NextJS: 03-07 Tổng quan về SWR 🎉

-

https://ne-np.facebook.com/Hanoihightech/posts/5094862423863115/

### NextJS: 03-08 Get logged in user with useAuth hook using useSWR

- click login se chạy thằng profile

### NextJS: 03-09 Cài đặt Protected Pages chỉ được truy cập khi đã đăng nhập

- có thể config for từng page or cho layout

### NextJS: 04-02 Setup MUI v5 cho NextJS Typescript Project

yarn add @emotion/cache @emotion/react @emotion/server @emotion/styled @mui/icons-material @mui/material

- add lib like link below (`_app, document , package, create-emotion-cache, theme`)
- https://codesandbox.io/s/github/mui/material-ui/tree/master/examples/nextjs-with-typescript?file=/package.json

### NextJS: 04-04 Vọc phá Emotion Cache

### NextJS: 04-05 Font Optimization

- example

 <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
          rel="stylesheet"
        />

- explain : display=optional (https://font-display.glitch.me/)

### NextJS: 04-06 Setup base layout with MUI 5

### NextJS: 04-07 Setup nhiều dạng container cho project

### NextJS: 04-08 Header desktop với MUI 5

-

### NextJS : 04-13 Làm giao diện cho section Recent post

-Stack : tương tự flex box

### NextJS: 04-16 Một vài cách để lấy được image URL online

- use 'https://squoosh.app'
