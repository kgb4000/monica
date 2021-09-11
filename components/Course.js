import Link from 'next/link'
import styled from 'styled-components'
import Button from '../components/Button'

const Course = () => {
  return (
    <PopUp>
      <div className='container'>
        <h3>Learn the 5 Mistakes Couples Make When Planning Their Wedding and How To Avoid Them</h3>
        <p>In his 5 part video series, you will learn:</p>
        <ul>
          <li>Why you need a budget!</li>
          <li>What your wedding planner really does?</li>
          <li>How to choose the best wedding vendors for your budget!</li>
          <li>Vendor contracts, don't loose your money!</li>
          <li>Covid-19 protocols</li>
        </ul>
        <h3>Sign up now fro FREE!</h3>
        <form>
          <input type='email' placeholder='Email' />
          <Button>I want to know</Button>
          <Button>I don't want to know</Button>
        </form>
      </div>
    </PopUp>
  )
}

const PopUp = styled('div')`

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: fixed;
  color: #fff;
  background-color: pink;
  padding: 1.2em 0;
  margin: 1.2em;

  h3 {
    margin-bottom: 1em;
  }

  ul {
    margin: 1em 0;
  }
`

export default Course