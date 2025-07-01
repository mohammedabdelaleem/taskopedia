import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById("root"))

function MainHeader()
{
  return (
  <header>
      <h1>React Course</h1>
  </header>
  )
}

function SubHeader()
{
  return (
      <h3>This Will Be An Exciting Course</h3>
  )
}

function Header()
{
  return (
    <header>
      <MainHeader/>
      <SubHeader/>
    </header>
  )
}


function MainComponent()
{
  return (
  <main>
      <p>In This Course We Will Learning React By Building ReactOpedia!!</p>
      <ul>
        <li>Call Ben</li>
        <li>Go to Walmart</li>
      </ul>
  </main>
  )
}

function Footer(){
  return (
    <footer>
      <h2>Happy Coding</h2>
    </footer>
  )
}

root.render(
  <div>
    <Header/>
    <MainComponent/>
    <Footer/>
  </div>
)

