import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>Completed this project to learn best practices of React States, Hooks, Prop, Global Css Styling, Api and HTTPs.  </p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
