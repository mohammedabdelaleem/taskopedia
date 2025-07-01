
export default function MainComponent()
{
  const whatWeWillLearn = "React.js"
  const totalLectures = 3 
  return (
  <main>
      <p className='text-primary'>In This Course We Will Learning {whatWeWillLearn} By Building ReactOpedia!!</p>
      <p>Total Lectures : {totalLectures}</p>
      <ul>
        <li className='orange-color'>Call Ben</li>
        <li>Go to Walmart</li>
      </ul>
  </main>
  )
}
