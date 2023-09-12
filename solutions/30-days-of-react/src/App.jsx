import frontEnd from './assets/frontend_technologies.png'
import rudeusImg from './assets/rudeus.png'

function App() {

  const rudeus = {
    firstName: "Rudeus",
    lastName: 'Greyrat',
    img: rudeusImg,
    skills: ['Sorcerer', 'Healer', 'Sculptor'],
    joined: "Sept 11 2023"
  }

  const rudeusRenderedSkills = rudeus.skills.map((skill, i) => (
    <li key={i}>{skill}</li>
  ))

  const frontendImg = (
    <div className='img'>
      <img src={frontEnd} alt="frontend tech" />
    </div>
  )

  const subscribeForm = (
    <form className='form' action="/" method="post">
      <h2>SUBSCRIBE</h2>
      <p>Sign up with your email address to receive news and update</p>
      <div className="form-input">
        <input type="text" placeholder='First name' />
        <input type="text" placeholder='Last name' />
        <input type="text" placeholder='Email' />
      </div>
      <button type="submit" className='btn'>Subscribe</button>
    </form>
  )

  const userCard = (
    <div className="card">
      <img src={rudeus.img} alt="" />
      <h2>{rudeus.firstName} {rudeus.lastName}</h2>
      <p>Ahli Rawa, Doronuma</p>
      <p>SKILLS</p>
      <ul>
        {rudeusRenderedSkills}
      </ul>
      <small>Joined on: {rudeus.joined}</small>
    </div>
  )

  return (
    <>
     {frontendImg}
     {subscribeForm}
     {userCard}
    </>
  )
}

export default App
