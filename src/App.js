import React from 'react'
import Github from './components/Feed/Github'
import Reddit from './components/Feed/Reddit'
import ProductHunt from './components/Feed/ProductHunt'

function App () {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <Github title="Github" url="https://gtrend.yapie.me/" />
      <Reddit title="Reddit" url="https://www.reddit.com/r/ADHD+AdithyaKalany+announcements+disneyvacation+dubai+entitledparents+harrypotter+HolUp+ihadastroke+insaneparents+Lenovo+LibreWolf+linux+linuxmasterrace+linuxmemes+ObsidianMD+privacy+selfhosted+softwaregore+talesfromtechsupport+theyknew+todayilearned+unixporn+windows+Windows10+youngpeopleyoutube" />
      <ProductHunt title="Product_Hunt" url="https://www.producthunt.com/feed?category=undefined" />
    </div>
  )
}

export default App
