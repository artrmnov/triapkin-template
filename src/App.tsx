import './App.css'
import { Routes, Route } from 'react-router'
import { Home } from './home'
import { Posts } from './posts'
import { Post } from './post'
import { Navigation } from './components/navigation'
import { Content } from './components/content/content'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <Content>
        <Routes>
          <Route index element={ <Home /> } />
          <Route path="posts">
            <Route index element={<Posts />} />
            <Route path=":id" element={<Post />} />
          </Route>
        </Routes>
      </Content>
    </QueryClientProvider>
  )
}

export default App
