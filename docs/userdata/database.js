/* DO NOT CHANGE THE GLOBAL VARIABLE NAME */

window.VUELOG_DATABASE = {
  config: {
    // The name of your site, will be displayed in browser tab and site header.
    brand: {
      'en-US': '한번 더 물음',
      'zh-CN': 'Benign Words',
      'de-DE': 'Benign Words',
      'pt-BR': 'Benign Words',
      'es-MX': 'Benign Words',
      'ko-KR': '한번 더 물음'
    },

    // Put the site brand behind current page in `document.title`.
    brandTrailing: false,

    // The image displayed in site header right beside the brand.
    logo: './static/favicon.svg',

    // Path to the domain root that serves your site, starts and ends with slash (`/`).
    // Set to `'/'` if your site is under domain root.
    base: '/',

    // The path to route to when you visit `/`.
    // Set to `/home`, `/blog` or a valid path at your need.
    homePath: '/home',

    // Whether footer is visible on `homePath` or not.
    homeFooter: false,

    // Vuelog interface language. Currently supports 'en-US', 'zh-CN', 'de-DE', 'pt-BR' and 'es-MX'.
    defaultLang: 'en-US',

    // Allow/disallow visitors to switch interface language.
    switchLang: false,

    // Available languages for switching. Must be a subset of supported languages, or leave empty.
    selectedLangs: [],

    // Number of posts listed in a blog/category view.
    postsCount: 3,

    // Fill in the shortname to integrate Disqus with your blog.
    disqusShortname: '',

    // Fill in the uid to integrate LiveRe with your blog.
    livereUid: '',

    // Options for marked, see https://github.com/chjj/marked#options-1 for detail
    markedOptions: {}
  },

  navigation: [
    {
      label: {
        'en-US': 'About',
      },
      type: 'page',
      path: '/page/about'
    },
    {
      label: {
        'en-US': 'SYJ',
      },
      type: 'page',
      path: '/archive/category/yoonjae'
    },
    {
      label: {
        'en-US': 'PKR',
      },
      type: 'archive',
      path: '/archive/category/lucaspark'
    },
    {
      label: {
        'en-US': 'JYK',
      },
      type: 'archive',
      path: '/archive/category/jinkim'
    },
    {
      label: {
        'en-US': 'HJK',
      },
      type: 'archive',
      path: '/archive/category/panopticon'
    },
    {
      label: {
        'en-US': 'More',
      },
      type: 'dropdown',
      path: '', // (OPTIONAL) dropdown can be routable too if you set a valid route path
      children: [
        {
          label: 'Panopticon Blog',
          type: 'outgoing',
          link: 'http://blog.naver.com/gunpla1994'
        },
        {
          label: 'Lucas Blog',
          type: 'outgoing',
          link: 'https://blog.naver.com/perinet'
        }
      ]
    }
  ],

  pages: [
    {
      title: {
        'en-US': 'Vuelog Guide',
      },
      slug: 'guide',
      exclude: true, // (OPTIONAL) `true` to exclude the page from archive view
      titleless: false, // (OPTIONAL) `true` to hide the title in page view
      commentless: false, // (OPTIONAL) `true` to disable comments for the page
      draft: false // (OPTIONAL) `true` to make the page temporarily inaccessible
    },
    {
      title: {
        'en-US': 'About Us',
      },
      slug: 'about'
    },
  ],

  categories: [
    {
      title: {
        'en-US': 'jinkim',
      },
      slug: 'jinkim'
    },
    {
      title: {
        'en-US': 'lucaspark',
      },
      slug: 'lucaspark'
    },
    {
      title: {
        'en-US': 'yoonjae',
      },
      slug: 'yoonjae'
    },
    {
      title: {
        'en-US': 'panopticon',
      },
      slug: 'panopticon'
    }
  ],

  posts: [
    /* 2018 */
    {
      title: {
        'en-US': '한국인 에세이 서문: 그 때 왜 그랬을까',
      },
      slug: '0216',
      category: 'jinkim',
      date: '2018-02-16'
    },
    {
      title: {
        'en-US': '21세기 대한민국의 종묘는 어디인가?',
      },
      slug: '0217',
      category: 'lucaspark',
      date: '2018-02-17'
    },
    {
      title: {
        'en-US': '한국사회에서의 능력주의 - 효율성과 공정성 사이에서의 논쟁',
      },
      slug: '0226',
      category: 'yoonjae',
      date: '2018-02-26'
    },
    {
      title: {
        'en-US': '한국과 집단주의에 관하여 (서문) - 광장과 정치의식',
      },
      slug: '0228',
      category: 'panopticon',
      date: '2018-02-28'
    },
    {
      title: {
        'en-US': '한국인 유전자(1) - 나의 뿌리를 찾아서',
      },
      slug: '0306',
      category: 'jinkim',
      date: '2018-03-06'
    },
    {
      title: {
        'en-US': '한반도의 지형은 한국인에게 어떤 영향을 주었을까',
      },
      slug: '0308',
      category: 'lucaspark',
      date: '2018-03-08'
    },
    {
      title: {
        'en-US': '공공선택이론/합리적 선택이론을 통해서 본 한국사회',
      },
      slug: '0312',
      category: 'yoonjae',
      date: '2018-03-12'
    },
    {
      title: {
        'en-US': '한국과 집단주의(1) - 공동체주의와 인(仁)의 윤리',
      },
      slug: '0315',
      category: 'panopticon',
      date: '2018-03-15'
    },
    {
      title: {
        'en-US': '한국인 유전자(2) - 동아시아의 집단주의',
      },
      slug: '0321',
      category: 'jinkim',
      date: '2018-03-21'
    },
    {
      title: {
        'en-US': '한국인의 탄생',
      },
      slug: '0323',
      category: 'lucaspark',
      date: '2018-03-23'
    },
    {
      title: {
        'en-US': '나는 이타적이어야 할까? – 협력의 진화',
      },
      slug: '0327',
      category: 'yoonjae',
      date: '2018-03-27'
    },
    {
      title: {
        'en-US': '한국과 집단주의(2) - 근대화된 한국과, 집단주의의 탄생',
      },
      slug: '0329',
      category: 'panopticon',
      date: '2018-03-29'
    },
    {
      title: {
        'en-US': '잠깐만, 내가 지금 무슨 생각을 하고 있는 거야?',
      },
      slug: '0403',
      category: 'jinkim',
      date: '2018-04-03'
    },
    {
      title: {
        'en-US': '국가 만들기 1',
      },
      slug: '0406',
      category: 'lucaspark',
      date: '2018-04-06'
    },
    {
      title: {
        'en-US': '민주주의, 최후의 성역',
      },
      slug: '0412',
      category: 'yoonjae',
      date: '2018-04-12'
    },
    {
      title: {
        'en-US': '한국과 집단주의(3) - 집단주의의 특질들',
      },
      slug: '0413',
      category: 'panopticon',
      date: '2018-04-13'
    },
    {
      title: {
        'en-US': '스타트업의 개발자로 일하며 우선순위 정하기',
      },
      slug: '0419',
      category: 'jinkim',
      date: '2018-04-19'
    },
    {
      title: {
        'en-US': '국가 만들기 2',
      },
      slug: '0420',
      category: 'lucaspark',
      date: '2018-04-20'
    },
    {
      title: {
        'en-US': '\'드루킹\'들에게 포획당하다',
      },
      slug: '0425',
      category: 'yoonjae',
      date: '2018-04-25'
    },
    {
      title: {
        'en-US': '한국과 집단주의(4) - 팬덤 문화',
      },
      slug: '0428',
      category: 'panopticon',
      date: '2018-04-28'
    },
    {
      title: {
        'en-US': '행동심리와 마케팅',
      },
      slug: '0516',
      category: 'jinkim',
      date: '2018-05-16'
    },
    {
      title: {
        'en-US': '국가 만들기 3',
      },
      slug: '0523',
      category: 'lucaspark',
      date: '2018-05-23'
    },
    {
      title: {
        'en-US': '행동패턴, 습관, 그리고 중독',
      },
      slug: '0709',
      category: 'jinkim',
      date: '2018-07-09'
    },
    {
      title: {
        'en-US': '국가 만들기 4',
      },
      slug: '0712',
      category: 'lucaspark',
      date: '2018-07-12'
    },
    {
      title: {
        'en-US': '한국과 집단주의(5) - 충효(忠孝)문화와 집단주의',
      },
      slug: '0720',
      category: 'panopticon',
      date: '2018-07-20'
    },
    {
      title: {
        'en-US': '우리가 서로 껴안고 있는 이유는 그저 외로워서가 아닐까',
      },
      slug: '0730',
      category: 'jinkim',
      date: '2018-07-30'
    },
    {
      title: {
        'en-US': '국가 만들기 5',
      },
      slug: '0731',
      category: 'lucaspark',
      date: '2018-07-31'
    },
    {
      title: {
        'en-US': '제도란 무엇일까?',
      },
      slug: '0801',
      category: 'yoonjae',
      date: '2018-08-01'
    },
    {
      title: {
        'en-US': '대한민국과 집단주의(6) - 노사관계와 온정주의적 배제들',
      },
      slug: '0804',
      category: 'panopticon',
      date: '2018-08-04'
    },
    {
      title: {
        'en-US': '국가만들기 총론',
      },
      slug: '0813',
      category: 'lucaspark',
      date: '2018-08-13'
    },
    {
      title: {
        'en-US': '정당-유권자 간 정보비대칭과 포퓰리즘의 장기 지속 - 1',
      },
      slug: '0819',
      category: 'yoonjae',
      date: '2018-08-19'
    },
    {
      title: {
        'en-US': '정당-유권자 간 정보비대칭과 포퓰리즘의 장기 지속 - 2',
      },
      slug: '0830',
      category: 'yoonjae',
      date: '2018-08-30'
    },
    {
      title: {
        'en-US': '대한민국과 집단주의 (7) - 집단주의의 자기재생산과 이른바 사회화기관들',
      },
      slug: '0912',
      category: 'panopticon',
      date: '2018-09-12'
    },
    {
      title: {
        'en-US': '인간의 눈 (1) - 사람의 눈은 빛에 의미를 부여한다',
      },
      slug: '1111',
      category: 'jinkim',
      date: '2018-11-11'
    },
    {
      title: {
        'en-US': '전통 만들기 총론',
      },
      slug: '1121',
      category: 'lucaspark',
      date: '2018-11-21'
    },
    {
      title: {
        'en-US': '인간의 눈 (2) - 어떻게 정보의 선별이 이루어지는가',
      },
      slug: '1127',
      category: 'jinkim',
      date: '2018-11-27'
    },
    {
      title: {
        'en-US': '국가는 왜 실패하는가',
      },
      slug: '1128',
      category: 'yoonjae',
      date: '2018-11-28'
    },
    {
      title: {
        'en-US': '한국과 집단주의에 대하여 (8) - 집단주의의 철학적 해결, 그리고 실존철학',
      },
      slug: '1129',
      category: 'panopticon',
      date: '2018-11-29'
    },
  ]
}
