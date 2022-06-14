import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { 
  createVuesticEssential, 
  VaButton,
  VaSidebar,
  VaSidebarItem,
  VaSidebarItemTitle,
  VaSidebarItemContent,
  VaContent,
  VaAlert
} from 'vuestic-ui'
import 'vuestic-ui/css'
import { routes } from './routes'

createApp(App)
  .use(createVuesticEssential({ 
    components: { 
      VaButton,
      VaSidebar,
      VaSidebarItem,
      VaSidebarItemTitle,
      VaSidebarItemContent,
      VaContent,
      VaAlert
    },
    config: {
      components: {
        VaButton: {
          rounded: false,
        }
      }
    }
  }))
  .use(createRouter({
    routes,
    history: createWebHistory(),
  }))
  .mount('#app')
