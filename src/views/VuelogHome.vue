<template>
  <div class="top-container"> <!-- Top Wrapper -->
    <br>
    <br>
    <section class="block__mg">
      <h1 class="category__title">Being Korean</h1>
      <router-link to="/blog/jinkim/2018/0216"><h3 class="category__description">한국인 에세이 서문: "그 때 왜 그랬을까"</h3></router-link>
      <!--Perfect Dish that Suits Your Tastes -->
    </section>

    <section class="block__mg--top">
      <div class="pos--left mobile-hide">
        <img src="../assets/blog/mg-top-p912.png" />
      </div>
      <!-- <router-link :to="{name: 'post', params: {category: post.category, slug: post.slug, year: post.year}}" v-text="i18nify(post.title)"> -->
      <router-link class="pos--middle card mobile-flex" to="/blog/panopticon/2018/0228/" style="background-color: #002a9f">
        <h1>한국과<br>집단주의</h1>
      </router-link>
      <!-- </router-link> -->
      <router-link to="/blog/jinkim/2018/0306/" class="pos--right mobile-flex">
        <h1 class="title">한국인 유전자(1) - <br>나의 뿌리를 찾아서</h1>
        <p class="content">
          우리는 모두 흰 도화지를 갖고 태어난다고 한다.<br>
          멋진 작품이 나오기 위해선 밑그림을 그리고, 명암을 넣고 색을 잘 칠해야 한다고 배운다. 하지만, 때로는 자유롭게 물감을 흩뿌린 작품이 더 높게 평가 받고, 더 많은 사람들에게 영감을 준다. 다양성이 존중받고 가치있게 여겨지는 지금 시대에 우리는 그 어느때보다 많은 자유가 주어지고 있다. 무한한 자유, 그리고 연속된 선택은 피곤한 일이다. 그렇기 때문에 사람의 뇌는 계속해서 반복되는 부분을 학습하고 습관화해 의식적으로 생각하지 않아도 일을 수행할 수 있도록 설계되어 있다.
        </p>
      </router-link>
    </section>
    <section class="block__mg--middle">
      <router-link to="/blog/lucaspark/2018/0308/" class="pos--left card mobile-hide">
        <img class="background-image" src="../assets/blog/mg-middle-p182.png" />
        <h1>한반도 지형은<br>한국인에게 어떤 영향을 주었을까</h1>
      </router-link>
      <router-link to="/blog/yoonjae/2018/0312/" class="pos--right card mobile-flex" style="background-color: #4900be;">
        <h1>합리적<br>선택이론</h1>
      </router-link>
    </section>
    <section class="block__mg--bottom">
      <div class="pos--left mobile-hide" style="background-color: #ffcf00"/>
      <div class="pos--right">
        <router-link to="/blog/lucaspark/2018/0406" class="article" style="margin-top: 0px;">
          <img class="" src="../../userdata/images/040618-1.jpg" />
          <div class="row-flex">
            <h1 class="title">국가 만들기 1</h1>
            <br>
            <p class="description">한국인은 매우 근면하다고들 말한다. 남이 시킨 일을 열심히 하는 것뿐만 아니라 자신이 스스로 일을 찾아서 더 하는 사람들도 많다.</p>
          </div>
        </router-link>
        <router-link to="/blog/panopticon/2018/0428" class="article">
          <img class="" src="../../userdata/images/042818-1.jpg" />
          <div class="row-flex">
            <h1 class="title">민주주의, 팬덤 문화</h1>
            <br>
            <p class="description">지난 글에서 필자는 기업문화 바깥의 영역들에서 집단주의가 어떻게 작동하는지 이야기하기로 했었다. 이번 글에서 이야기할 것은 대한민국의</p>
          </div>
        </router-link>
        <router-link to="/blog/yoonjae/2018/0412" class="article">
          <img class="" src="../../userdata/images/041218-1.jpg" />
          <div class="row-flex">
            <h1 class="title">민주주의, 최후의 성역</h1>
            <br>
            <p class="description">서울대 동양사학과의 박훈 교수님 칼럼에 한국인에게 세 가지 성역이 있는 것 같다는 내용이 있다. 그 중 반공주의와 민족주의는 어느 정도</p>
          </div>
        </router-link>
        <router-link to="/blog/yoonjae/2018/0412" class="article">
          <img class="" src="../../userdata/images/032118-2.jpg" />
          <div class="row-flex">
            <h1 class="title">동아시아의 집단주의</h1>
            <br>
            <p class="description">지난 글에서는 현생인류가 어떤 경로로 이동했는지 설명했었다. 요약하자면, 전세계에 분포되어 있는 현생인류는 대략 10만년전에</p>
          </div>
        </router-link>
      </div>
    </section>

    <section class="block__cta--subscription" style="background-color: #009ebe">
      <h3 class="title">저희 구독자가 되실래요?</h3>
      <hr>
      <form>
        <input type="email" placeholder="이메일" v-model="payload.subscriptionEmail">
        <button class="btn" @click="submit">좋아요</button>
      </form>
    </section>

      <h1 class="category__title" style="margin: 50px 0 50px;">Recent Posts</h1>

    <section style="margin-bottom: 30px;">
        <div v-for="(year, index) in archive.postsByYear" :key="index">
          <ul style="list-style: none;">
            <li v-for="(post, index) in year.posts.slice(0,8)" :key="index">
              <router-link :to="{name: 'post', params: {category: post.category, slug: post.slug, year: post.year}}" class="recent-posts" v-text="i18nify(post.title)"></router-link>
              <!-- <router-link :to="{name: 'category', params: {category: post.category}}" v-text="i18nify(post.categoryTitle)"></router-link> -->
            </li>
          </ul>
        </div>
    </section>
    <router-link class="more-button" to="/archive">더 보기 ></router-link>

    <transition name="fade" mode="out-in" appear>
      <vuelog-footer style="margin: 100px 0 20px; width:100%; padding: 20px 0 25px 0;" :key="active"></vuelog-footer>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
  $primary-text--color: #555;
  @mixin global-font {
    font: normal 16px sans-serif
  }

  /* avoid inconsistencies across browsers */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* width and height of an element are calculated (border-box: it includes padding and borders) */
    @include global-font;
    color: $primary-text--color;
  }
</style>

<style lang="scss" scoped> // color

$primary--color: #3f51b5;
// media breakpoints
$media__desktop: 1600px;
$media__tablet: 1024px;
$media__phone: 640px;

.recent-posts{
  font-size: 25px; 
  line-height: 50px;
  @media (max-width: 800px){
    font-size: 15.5px;
    line-height: 35px;
  }
}

nav {
  list-style-type: none;
  & li a {
    text-transform: uppercase;  
    list-style: none;
    opacity: 0.50;
    &:hover {
      opacity: 1;
    }
  }
}

a {
  text-decoration: none;
  opacity: 0.92;
  color: black;
  &:hover {
    opacity: 1;
  }
  &.btn {
    border-radius: 2px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    background-color: $primary--color;
    opacity: 1;
  }
}
button {
  text-decoration: none;
  opacity: 0.92;
  color: black;
  &:hover {
    opacity: 1;
  }
  &.btn {
    border-radius: 2px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    background-color: $primary--color;
    opacity: 1;
  }
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 50em;

  &:hover {
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2);
  }
}

.top-container {
  
  margin-right: auto;
  margin-left: -50px;
  max-width: 960px;
} // section {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 100px;
//   & h3.title {
//     text-transform: capitalize;
//     font: bold 32px "Open Sans", sans-serif;
//     margin-bottom: 30px;
//     text-align: center;
//   }
//   & p {
//     font-size: 17px;
//     max-width: 775px;
//     line-height: 2;
//     margin-bottom: 30px;
//     text-align: center;
//   }
//   @media screen and (max-width: $media__phone) {
//     padding: 50px 20px;
//   }
// }


.category__title{
  font: bold 35px "Open Sans", sans-serif;
  color: black;
  margin-bottom: 15px;
}
section.block__mg {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & a h3 {
    font: bold 20px "Open Sans", sans-serif;
    color: #616161;
    margin-bottom: 15px;
  }
}

section.block__mg--top {
  display: flex;
  max-height: 250px;
  & .pos--left {
    flex: 1;
    & img {
      max-height: 250px;
      min-width: 200px;
    }
  }
  & .pos--middle {
    flex: 2;
    margin: 0 20px 15px 15px;
    min-width: 330px;
    & h1 {
      color: white;
      text-align: right;
      font: 60px "Open Sans", sans-serif;
      padding: 20px 20px;
    }
  }
  
  & .pos--right {
    flex: 5;
    & h1 {
      font: bold 30px "Open Sans", sans-serif;
    }
    & p {
      font: 14px "Open Sans", sans-serif;
      margin: 12px 0 0 0;
    }
  }
  @media (max-width: $media__phone){
    max-height: 1000px;
    display: flex;
    flex-direction: column;
    & .pos--middle {
      flex: 1;
      margin: 0;
      height: 230px;
      & h1 {
        color: white;
        text-align: right;
        font: 60px "Open Sans", sans-serif;
        margin-right: 20px;
      }
    }
  
    & .pos--right {
      margin: 25px 0 25px;
      flex: 1;
      width: 100%;
      & h1 {
        font: bold 30px "Open Sans", sans-serif;
      }
      & p {
        font: 14px "Open Sans", sans-serif;
        
      }
    }
  }
}

section.block__mg--middle {
  display: flex;
  max-height: 250px;
  & .pos--left {
    flex: 6;
    margin-right: 15px;

    & .background-image {
      position: absolute;
      z-index: -1;
      width: 630px;
      max-height: 250px;
    }
    & h1 {
      font: bold 30px "Open Sans", sans-serif;
      color: white;
      padding: 150px 0 0 20px;
    }
  }
  & .pos--right {
    flex: 4;
    position: relative;
    margin-right: -115px;
    min-height: 250px;
    min-width: 430px;
    & h1 {
      color: white;
      font: 60px "Open Sans", sans-serif;
      padding: 20px 20px;
      text-align: right;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  @media (max-width: $media__phone){
    max-height: 1000px;
    flex-direction: column;
    & .pos--left {
      flex: 1;
      margin-right: 0px;

      & .background-image {
        position: absolute;
        z-index: -1;
        width: 100%;
        max-height: 500px;

      }
      & h1 {
        font: bold 23px "Open Sans", sans-serif;
        color: white;
        padding: 120px -50px 0 20px;
        margin-right: -50px;
      }
    }
    & .pos--right {
      flex: 1;
      margin: 0px 0 25px 0;
      height: 230px;
      & h1 {
        color: white;
        text-align: right;
        font: 60px "Open Sans", sans-serif;
        margin-right: 80px;
      }
    }
  }
} // middle bar


section.block__mg--bottom {
  display: flex;
  max-height: 250px;
  & .pos--left {
    flex: 1;
    min-width: 200px;
    min-height: 250px;
  }
  & .pos--right {
    -webkit-column-count: 2; /* Chrome, Safari, Opera */
    -moz-column-count: 2; /* Firefox */
    column-count: 2;
    margin-top: 20px;
    & .article {
      display: flex;
      max-width: 500px;
      height: 100px;
      margin: 15px 0 0 15px;
      & img {
        min-width: 100px;
        min-height: 100px;
        width: 100px;
        height: 100px;
      }
      & .row-flex {
        display: flex;
        flex-direction: column;
        margin-left: 12px;

        & .title {
          font: bold 20px "Open Sans", sans-serif;
          color: black;
        }
        & .description {
          font: 12px "Open Sans", sans-serif;
          color: black;
          margin-top: 5px;
        }
      }
    }
  }
  @media (max-width: $media__phone){
    max-height: 700px;
    max-width: 100%;
    & .pos--right{
      -webkit-column-count: 1; /* Chrome, Safari, Opera */
      -moz-column-count: 1; /* Firefox */
      column-count: 1;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
} // bottom bar

section.block__articles {
display: flex;
  & .article__collection {
    flex: 2;
    max-width: 700px;
    & .article {
      display: flex;
      margin: 20px 0 0 0;
      & img {
        width: 130px;
        height: 130px;
        margin-left: 20px;
      }

      & .row-flex {
        display: flex;
        flex-direction: column;
        margin-left: 12px;

        & .title {
          font: bold 25px "Open Sans", sans-serif;
          color: black;
        }
        & .description {
          font: 15px "Open Sans", sans-serif;
          color: black;
          margin-top: 5px;
        }
      }
    }
  }

  & .article__rank {
    flex: 1;
    z-index: 1;
    position: fixed;
    height: 1000px;
    background-color: #d8d8d8;
    width: 130px;
    top: 1250px;
    right: 500px;
    margin-left: 30px;
  }
}

hr {
  width: 250px;
  height: 3px;
  background-color: white;
  border: 0;
  margin-bottom: 30px;
  @media screen and (max-width: $media__tablet) {
    width: 200px;
  }
  @media screen and (max-width: $media__phone) {
    width: 150px;
  }
}

/* Header Styles */

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex-direction: column;
  animation: 1s fadein 0.5s forwards;
  opacity: 0;
  color: #fff;
  z-index: 1;
  & img {
    margin-bottom: 17px;
    width: 180px;
  }
  & nav {
    display: flex;
    & li {
      margin: 0 20px;
    }
  }
  @media screen and (max-width: $media__phone) {
    padding: 20px 50px;
    flex-direction: column;
    & nav li {
      margin: 0 15px;
    }
  }
}

@keyframes fadein {
  /* when the animation is finished, the opacity should be 1 */
  100% {
    opacity: 1;
  }
}

 .block__cta--subscription {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 20px 0;
    padding: 30px 0 30px 0;

    & h3.title {
      text-transform: capitalize;
      font: bold 32px "Open Sans", sans-serif;
      margin: 0 0 20px;
      color: white;
    }

    & form {
    display: flex;
    width: 60%;

      & button.btn {
        padding: 18px 42px;
        color: white;
      }

      & input {
        padding: 15px;
        width: 100%;
        margin-right: 30px;
        font-size: 18px;
        color: #555;
        flex: 1;
      }
    }
      @media (max-width: $media__phone){

        & h3.title {
          text-transform: capitalize;
          font: bold 26px "Open Sans", sans-serif;
          margin: 0 0 20px;
          color: white;
        }

        & form {
        display: flex;
        flex-direction: column;
        width: 80%;
        justify-content: space-between;

          & a.btn {
            width: 100%;
            color: white;
            flex: 1;
            margin-bottom: 15px;
            height: 50px;
          }

          & input {
            height: 50px;
            flex: 1;
            width: 100%;
            font-size: 18px;
            color: #555;
            margin-bottom: 12px;

          }
        }
  }
}
@media (max-width: $media__phone){
  .top-container {
    width: 100%;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }
  .mobile-hide{
    display: none;
  }
  .mobile-flex{
    width: 90vw;
  }

}

.more-button {
  text-decoration: none;
  color: #00A5D8;
  style-float: right;
  font-size: 18px;

  @media (max-width: $media__phone){
    style-float: left;
    font-size: 16px;
  }
}
</style>

<script>
  import { retrieveByLanguage } from '../utils'
  import VuelogFooter from '../components/VuelogFooter'

  export default {
    name: 'vuelog-archive',
    data(){
      return {
        payload: {
          subscriptionEmail: ''
        }
      };
    },

    computed: {
      displayType () {
        return 'archive'
      },

      active () {
        return this.$store.getters.lang
      },

      config () {
        return this.$store.getters.config
      },

      postsByCategory () {
        return this.$store.getters.postsByCategory
      },

      postsByYear () {
        return this.$store.getters.postsByYear
      },

      pages () {
        return this.$store.getters.pages
      },

      archive () {
        switch (this.displayType) {
          case 'archive-category':
            return this.getPostsInCategory(this.$route.params.category)
          case 'archive-year':
            return this.getPostsInYear(+this.$route.params.year)
          case 'archive':
            return this.getAllPostsAndPages()
        }
      },

      title () {
        var title = this.$t('archive.title')
        var brand = retrieveByLanguage(this.config.brand, this.active, this.config.defaultLang)
        if (this.displayType === 'archive-category') {
          title += ' | ' + retrieveByLanguage(this.archive.title, this.active, this.config.defaultLang)
        }
        if (this.displayType === 'archive-year') {
          title += ` | ${this.archive.year}`
        }
        if (this.config.brandTrailing) {
          return title + ' | ' + brand
        } else {
          return brand + ' | ' + title
        }
      }
    },
    components: {
      VuelogFooter
    },

    methods: {
      submit(){
        this.$http.post('https://sejypbtygc.execute-api.ap-northeast-2.amazonaws.com/development/sendMail', JSON.stringify(this.payload), {options: {headers: {'Content-Type': 'application/json'}}})
          .then(response => {
              if(response.status == 200 && response.body.statusCode == 200){
                alert('구독이 완료되었습니다. 감사합니다.')
                this.payload.subscriptionEmail = '구독이 완료되었습니다.';
              }
          }, error => {
              alert('문제가 발생했습니다. 새로고침 후 다시 시도해주세요.')
          })
      },
      oops () {
        this.$router.replace('/oops')
      },

      i18nify (content) {
        return retrieveByLanguage(content, this.active, this.config.defaultLang)
      },

      getPostsInCategory (slug) {
        for (var i = 0; i < this.postsByCategory.length; i++) {
          if (this.postsByCategory[i].slug === slug) {
            return this.postsByCategory[i]
          }
        }
        this.oops()
        return { posts: [], slug: '', title: '' }
      },

      getPostsInYear (year) {
        if (Number.isNaN(year)) {
          this.oops()
          return { posts: [], year }
        }
        for (var i = 0; i < this.postsByYear.length; i++) {
          if (this.postsByYear[i].year === year) {
            return this.postsByYear[i]
          }
        }
        return { posts: [], year }
      },

      getAllPostsAndPages () {
        return {
          postsByCategory: this.postsByCategory,
          postsByYear: this.postsByYear,
          pages: this.pages
        }
      }
    },

    created () {
      this.$store.dispatch('documentTitle', this.title)
    },

    watch: {
      $route (to, from) {
        if (to.query.lang !== from.query.lang) {
          this.$store.dispatch('documentTitle', this.title)
        }
      }
    }
  }
</script>
