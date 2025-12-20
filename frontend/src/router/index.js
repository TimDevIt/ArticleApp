import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CreateArticleView from '@/views/CreateArticleView.vue';
import ArticleListView from '@/views/ArticleListView.vue';
import ArticleDetailView from '@/views/ArticleDetailView.vue';
import UpdateArticleView from '@/views/UpdateArticleView.vue';
import CommentAnaylticView from '@/views/CommentAnaylticView.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
   {
    path: '/articles',
    name: 'articles',
    component: ArticleListView
  },
  {
    path: '/article',
    name: 'createArticle',
    component: CreateArticleView
  },
  {
    path: '/article/:id',
    name: 'readArticle',
    component: ArticleDetailView
  },
  {
    path: '/article/:id/update',
    name: 'updateArticle',
    component: UpdateArticleView
  },
  {
    path: '/analytic/comments',
    name: 'analyticComments',
    component: CommentAnaylticView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
