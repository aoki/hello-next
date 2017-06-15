import React from 'react'
import cow from 'cowsay-browser'
import css from 'next/css'
import Head from '../components/head'

export default () => (
  <div>
    <Head />
    <main className={style}>
      <h1><img id="log" className={logo} src="static/next.svg" title="NEXT.js" alt="NEXT.js"/></h1>
      <div>Hello world!</div>
      <pre className={pre}>{cow.say({text: 'Hi there!'})}</pre>
    </main>
  </div>
)

const pre = css({
  fontFamily: 'Source Code Pro',
  fontWeight: 100
});

const logo = css({
  height: '30%',
  width: '30%'
});

const style = css({
  background: '#282A36',
  color: 'white',
  fontFamily: 'SFNSDisplay, "Hiragino Sans"',
  fontWeight: 100
});
