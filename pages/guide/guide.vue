<template>
	<div class="guide-wrap">
    <AsideNav/>
    <div class="guide-content">
      <h2 class="guide-title">Index</h2>
      <div class="guide-box index">
        <h3 class="guide-title2">Nuxt.js란</h3>
        <p>Nuxt.js는 Vue.js 개발 편의성을 높여주는 오픈소스 프레임워크로, <br/>Vue.js만으로 개발할때에 비해 생산성이 높아 최근 Vue.js로 개발하는 프로젝트에서 Nuxt를 많이 사용하고 있는 추세</p>
        <br/>
        <ul>
          <li>코드 분할 자동화</li>
          <li>전처리기 지원 (SASS, LESS, Stylus..)</li>
          <li>pages 폴더 기반의 자동 라우팅 설정</li>
          <li>정적 파일 전송</li>
          <li>SSR / SPA 지원</li>
          <li>Pre-rendering</li>
        </ul>
        <h3 class="guide-title2">설치, 셋팅</h3>
        <h4 class="guide-title3">Nuxt.js 추가</h4>
        <div class="code-box">
          npm install -g nuxt
          npm init nuxt-app &lt;프로젝트명&gt;
          ...
          cd &lt;프로젝트명&gt;
          npm run dev
          ...
          http://localhost:3000/ 
        </div>
        <h4 class="guide-title3">node-sass, sass-loader 추가</h4>
        <div class="code-box">
          npm install --save-dev node-sass 
          npm install --save-dev sass-loader sass
        </div>
        <h4 class="guide-title3">nuxt.config.js 설정</h4>
        <div class="code-box">
          css: [
            '~assets/css/common.scss',
            '~assets/css/guide.scss'
          ],
        </div>
        <h3 class="guide-title2">Assets</h3>        
        <ul>
          <li>css</li>
          <li>images</li>
          <li>font</li>
        </ul>
        <br/>
        <p style="font-size: 14px;">이미지 불러오기</p>
        <div class="code-box">
          &lt;img :src="require('../assets/images/test.jpg')"&gt;
        </div>
        <h3 class="guide-title2">packge.json</h3>        
        <div class="code-box">
          {
            "name": "nuxt-guide",
            "version": "1.0.0",
            "private": true,
            "scripts": {
              "dev": "nuxt",
              "build": "nuxt build",
              "start": "nuxt start",
              "generate": "nuxt generate",
              "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
            },
            "dependencies": {
              "core-js": "^3.25.3",
              "nuxt": "^2.15.8",
              "nuxt-guide": "file:",
              "swiper": "^5.4.5",
              "vue": "^2.7.10",
              "vue-awesome-swiper": "^4.1.1",
              "vue-server-renderer": "^2.7.10",
              "vue-template-compiler": "^2.7.10"
            },
            "devDependencies": {
              "gh-pages": "^6.2.0",
              "node-sass": "^9.0.0",
              "push-dir": "^0.4.1",
              "sass": "^1.80.3",
              "sass-loader": "^10.5.2",
              "webpack": "^4.47.0"
            }
          }
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
})
</script>