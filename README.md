# Atlantis Question Answer Platform

In this Reactjs project, I made an responsive Atlantis Question Answer website. I used React hooks, modern CSS, swiper js, framer motion, and many more. For contact, I used the Email js library. To make this site more functional and practical, I implemented  dark and light mode with the useContext hook.



https://user-images.githubusercontent.com/47225405/195882888-5b7c80fe-0a9b-4992-b1d6-92ee1ac8d438.mp4



### UseState Hook
In React, functional components are basically stateless components as you cannot manage the state in them. But with the introduction of Hooks in React 16.8 version, If you write a function component and realize you need to add some state to it, you can use useState Hook.

```
const [count, setCount] = useState()
```

count: the current state
setCount: a function that updates the state


### UseContext Hook
useContext” hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. Context defined will be available to all the child components without involving “props”.
_In the project, I created the dark and light mode with the useContext hook._


## yarn
Yarn is a package manager that doubles down as project manager.

### Installing
```
yarn --version
```

_yarn start_


## React Unicons
1000+ Pixel-perfect vector icons as React Components. These icons are designed by Iconscout.

### Installing
```
npm i @iconscout/react-unicons
```


## Framer Motion
An open source motion library for React, made by Framer.

### Installing
```
yarn add framer-motion
```


## EmailJS
Send emails, html and attachments (files, streams and strings) from node.js to any smtp server

### Features
- Emails are queued and the queue is sent asynchronously 
- Supports sending html emails and emails with multiple attachments (MIME)
- Attachments can be added as strings, streams or file paths
- Supports utf-8 headers and body

### Installing 
```
npm install emailjs
```

## SwiperJS

Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.

### Installing
```
npm i swiper
```
