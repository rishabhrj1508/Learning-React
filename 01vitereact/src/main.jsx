import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google!!'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Click Me to Visit google !!!!!</a>
)

const anotherUser = "hey there";

const reactElement = React.createElement(
    'a',
    { href: 'https://gooogle.com', target: '_blank' },
    'Click Me !!',
    anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
    
    reactElement
)
