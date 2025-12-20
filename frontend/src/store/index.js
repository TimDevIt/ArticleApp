import { createStore } from 'vuex'
import { articleModule } from '@/store/articleModule';
import { commentModule } from '@/store/commentModule';
import { analyticModule } from '@/store/analyticModule';


export default createStore({
  modules: {
    article: articleModule,
    comment: commentModule,
    analytic: analyticModule
  }
})
