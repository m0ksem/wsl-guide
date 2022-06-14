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
// Vite-ssg can not handle css, lol
// import 'vuestic-ui/css'
import { routes } from './routes'
import { ViteSSG } from 'vite-ssg'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    app.use(createVuesticEssential({ 
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
  },
)
