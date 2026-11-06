import './App.css'
import Settings from "./components/settings"
import Body from "./components/body"
import Chats from "./components/chat"
import Header from "./components/header"
import Dropdown from './components/dropdown'
import Sidebar from './components/sidebar'
import Options from './components/options'

function App() {
  return (
    <>
      <Body />
      <Dropdown />
      <Header />
      <Chats />
      <Settings />
      <Sidebar />
      <Options />
    </>
  )
}

export default App
