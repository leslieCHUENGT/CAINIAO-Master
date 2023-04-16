import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import '@/mock/index' // 模拟数据
import { createPinia } from 'pinia'
import {
  Card,
  Swipe,
  SwipeItem,
  Cell,
  Checkbox,
  CheckboxGroup,
  Skeleton,
  Lazyload,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  Form,
  Cascader,
  ConfigProvider,
  Sticky,
  Popup,
  Field,
  Button,
  Icon,
  Search,
  Stepper,
  Tab,
  Tabs,
  Grid,
  GridItem,
  Image,
  Loading,
  NavBar,
  NoticeBar,
  ShareSheet,
  Sidebar,
  SidebarItem,
  SubmitBar,
  SwipeCell,
  CellGroup,
  TextEllipsis
} from 'vant'
import {
  ElCard
} from 'element-plus'
import 'element-plus/dist/index.css'
import 'vant/lib/index.css'
import 'lib-flexible/flexible' 
import './assets/main.css'


const app = createApp(App)
app
  .use(Tab) 
  .use(Tabs)
  .use(router)
  .use(createPinia())
  .use(ElCard)
  .use(Loading)
  .use(Cascader)
  .use(Icon)
  .use(Sticky)
  .use(Popup)
  .use(ConfigProvider)
  .use(SubmitBar)
  .use(Cell)
  .use(CellGroup)
  .use(Swipe)
  .use(Card)
  .use(Stepper)
  .use(Checkbox)
  .use(SwipeItem)
  .use(Skeleton)
  .use(ActionBar)
  .use(ActionBarIcon)
  .use(ActionBarButton)
  .use(CheckboxGroup)
  .use(Form)
  .use(Field)
  .use(Button)
  .use(Lazyload)
  .use(TextEllipsis)
  .use(SwipeCell)
  .use(Search)
  .use(Grid)
  .use(GridItem)
  .use(ShareSheet)
  .use(Image)
  .use(NoticeBar)
  .use(NavBar)
  .use(Sidebar)
  .use(SidebarItem)
  .mount('#app')