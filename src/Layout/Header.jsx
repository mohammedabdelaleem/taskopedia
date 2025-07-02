import logo from '../images/react.png'
const headerFooterStyle = {backgroundColor:'gold' , color:'red'};

const MainHeader = ()=>
{
  return (
  <div className="py-2 pl-1" style={{backgroundColor:'black'}}>
    <img src={logo} style={{height: "35px"}} />
      <span className='pl-3 text-white-50'>React Course - TaskOpedia</span>
  </div>
  )
}

const SubHeader = ()=>
{
  return (
      <h3 style={headerFooterStyle}>This Will Be An Exciting Course</h3>
  )
}

const Header = () =>
{
  return (
    <header >
      <MainHeader/>
      <SubHeader/>
    </header>
  )
}

export default Header;