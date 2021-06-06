import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header/header'
import Index from './pages/index'
import About from './pages/about'
import './styles/App.css'
import Footer from './components/footer/footer'

const App = () => {
    return (
        <Router>
            <Header/>
            <Route path="/" exact component={Index} />
            <Route path="/about" exact component={About} />
            <Footer />
        </Router>
    )
}

export default App
