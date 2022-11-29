import { createRouter, createWebHistory } from 'vue-router'
import roleRoute from './roles'
import accessRoute from './access'
import userRoute from './users'

const routes = [
    
    ...accessRoute,
    ...userRoute,
    ...roleRoute,
    
  
  
]

console.log(routes)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
