import styled from 'styled-components'
import Button from './Button'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

const Nav = () => {
  return (
    <>
      <Header>
        <a href="/">
          <div className="logo">Monica Browne Weddings</div>
        </a>
        <nav>
          {/* <li>
					<Link href='/about'>
						<a>About</a>
					</Link>
				</li>
				<li>
					<Link href='/services'>
						<a>Services</a>
					</Link>
				</li>
				<li>
					<Link href='/gallery'>
						<a>Gallery</a>
					</Link>
				</li>
				<li>
					<Link href='/testimonials'>
						<a>Testimonials</a>
					</Link>
				</li>
				<li>
					<Link href='/blog'>
						<a>Blog</a>
					</Link>
				</li>
				<li>
					<Link href='/contact'>
						<a>Contact</a>
					</Link>
				</li> */}
        </nav>
        <a href={calendly}>
          <NavButton>Book A Call</NavButton>
        </a>
      </Header>
    </>
  )
}

const Header = styled('div')`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  z-index: 1000;
  height: 70px;
  background: rgba(162, 155, 254, 0.45);
  z-index: 1000;
  position: relative;

  .logo {
    font-size: 1rem;
    max-width: 300px;
    font-weight: 700;
    color: #fff;
    font-family: minerva-modern, sans-serif;
  }

  @media (min-width: 768px) {
    .logo {
      font-size: 1.6rem;
      max-width: 400px;
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  nav {
    display: none;
  }

  nav li {
    list-style-type: none;
    margin-left: 1rem;
  }
`

const NavButton = styled(Button)`
  background-color: #a29bfe;
  border: 1px solid a29bfe;
  color: #fff;
  font-size: 0.6rem;
  border-radius: 10px;
  padding: 0.6rem 1rem;

  @media (min-width: 768px) {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
  }
`

export default Nav
