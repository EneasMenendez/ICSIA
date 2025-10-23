import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import UserList from './components/UserList.jsx'
import SearchBar from './components/SearchBar.jsx' 
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ProfileCard />
    <UserList />
    <SearchBar />
  </StrictMode>,
)
