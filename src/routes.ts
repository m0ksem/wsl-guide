import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./pages/Home.vue'),
  },
  {
    path: '/terminal',
    component: () => import('./pages/Terminal.vue'),
  },
  {
    path: '/bashrc',
    component: () => import('./pages/Bashrc.vue'),
  },
  {
    path: '/export-import',
    component: () => import('./pages/ExportImport.vue'),
  },
]