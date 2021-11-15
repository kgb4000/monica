import styled from 'styled-components'

const Simple = styled('ul')`
  margin: 3rem auto;
  counter-reset: li;

  li {
    padding-left: 3.5rem;
    margin-bottom: 2rem;
    position: relative;
    list-style-type: none;
    font-weight: 200;

    @media (min-width:768px) {
      padding-left: 5rem;
    }

    ::before {
      counter-increment: li;
      content: counter(li);
      color: #fff;
      font-size: 1rem;
      background: #000;
      line-height: 30px;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      display: inline-block;
      text-align: center;
      left: 0px;
      position: absolute;
      top:  -0.001rem;
      border: 1px solid #000;
      font-weight: 200;

      @media (min-width: 768px) {
      }
  }
`

export default Simple
