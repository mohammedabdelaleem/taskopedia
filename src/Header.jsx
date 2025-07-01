
const headerFooterStyle = {backgroundColor:'gold' , color:'red'};

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

export default function Header()
{
  return (
    <header style={headerFooterStyle}>
      <MainHeader/>
      <SubHeader/>
    </header>
  )
}