import Link from 'next/link'
import styled from 'styled-components'

const Areas = () => {
  return (
    <div className="footer-container">
      <h3>Locations</h3>
      <ul>
        <li>
          <Link href="/wedding-planner-annapolis" passHref>
            <a>Annapolis, MD</a>
          </Link>
        </li>
        <li>
          <Link href="/bethesda" passHref>
            <a>Bethesda, MD</a>
          </Link>
        </li>
        <li>
          <Link href="/chevy-chase" passHref>
            <a>Chevy Chase, MD</a>
          </Link>
        </li>
        <li>
          <Link href="/wedding-planner-greenbelt" passHref>
            <a>Potomac, MD</a>
          </Link>
        </li>
        <li>
          <Link href="/wedding-planner-potomac-md" passHref>
            <a>Potomac, MD</a>
          </Link>
        </li>
        <li>
          <Link href="/rockville" passHref>
            <a>Rockville, MD</a>
          </Link>
        </li>
        <li>
          <Link href="/silver-spring" passHref>
            <a>Silver Spring, MD</a>
          </Link>
        </li>
        <li>
          <Link href="/wedding-planner-washington-dc" passHref>
            <a>Washington, DC</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Areas
