vue-blog with lambda triggers,
based on https://vuelog.js.org/#/home

// package file to /docs folder
npm run lite

// upload to s3
aws s3 cp /Users/b9words/Workspace/imceo/prod/vue_blog/docs s3://b9words.com --recursive --grant read=uri=http://acs.amazonaws.com/groups/global/AllUsers

// invalidate cache

// b9words cloudfront invalidate
aws cloudfront create-invalidation --distribution-id EQPVZ253WQ4RH --paths "/userdata/*"
// www.b9words cloudfront invalidate
aws cloudfront create-invalidation --distribution-id E2P5VWX6OCXK2A --paths "/userdata/*"