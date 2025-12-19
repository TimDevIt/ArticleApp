import { createStore } from 'vuex'
import { articleModule } from '@/store/articleModule';
import { commentModule } from '@/store/commentModule';


export default createStore({
  modules: {
    article: articleModule,
    comment: commentModule
  }
})
