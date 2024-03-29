<template>
<div>
      <h2 v-text="$t('archive.byYear')"></h2>
      <ul>
        <li v-for="(year, index) in archive.postsByYear" :key="index">
          <h4>
            <router-link :to="{name: 'archive-year', params: {year: year.year}}" v-text="year.year"></router-link>
            <span v-text="' (' + year.posts.length + ')'"></span>
          </h4>
          <ul>
            <li v-for="(post, index) in year.posts" :key="index">
              <router-link :to="{name: 'post', params: {category: post.category, slug: post.slug, year: post.year}}" v-text="i18nify(post.title)"></router-link>
              <span> ( </span>
              <router-link :to="{name: 'category', params: {category: post.category}}" v-text="i18nify(post.categoryTitle)"></router-link>
              <span> )</span>
            </li>
          </ul>
        </li>
      </ul>
      </div>
</template>

<script>
  import { retrieveByLanguage } from '../utils'

  export default {
    name: 'vuelog-archive',

    computed: {
      displayType () {
        return this.$route.name
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

    methods: {
      i18nify (content) {
        return retrieveByLanguage(content, this.active, this.config.defaultLang)
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