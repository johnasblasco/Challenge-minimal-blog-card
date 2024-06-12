import React from 'react'

const parent = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
}

const card = {
      height: '388px',
      width: '368px',
      backgroundColor: '#FFFFFF',
      boxShadow: '1px 1px 2px 2px #E5EAF0',
      borderRadius: '16px ',
}
const img = {
      margin: '16px',
      height: '152px',
      width: '336px',
}


const design = {
      margin: '0 16px',
      padding: '4px 12px',
      fontWeight: '600',
      color: '#883AE1',
      backgroundColor: '#E6D6FC',
      borderRadius: '6px',
      display: 'inline',
      fontSize: '10px',
}

const content = {
      margin: '16px',
}

const h1 = {
      marginBottom: '6px',
      fontWeight: '600',
      fontSize: '20px',
      color: '#20293A'
}
const p = {
      margin: '0px 0px 20px 0px',
      fontSize: '14px',
      color: '#6C727F'
}
const hr = {
      borderTop: '1px solid #E5EAF0'
}
const footer = {
      margin: '0px 16px',
      display: 'flex',
      alignItems: 'center'
}
const annie = {
      color: '#6C727F',
      fontSize: '10px',

}
function App() {
      return (
            <div style={parent}>
                  <div style={card}>
                        <img style={img} src="cactus_img.jpg" />
                        <p style={design}>Design</p>

                        <div style={content}>
                              <h1 style={h1}>Embracing Minimalism</h1>
                              <p style={p}>From minimalist sculptures to minimalis paintings, this blog will inspire you to appreciate the beauty that lies simplicity.</p>
                        </div>


                        <hr style={hr} />
                        <div style={footer}>
                              <p style={annie}>Annie Spratt</p>
                        </div>
                  </div>

            </div>
      )
}

export default App


