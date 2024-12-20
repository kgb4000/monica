import styled from 'styled-components'

const PictureBox = ({
  Image1,
  alt1,
  width1,
  height1,
  Image2,
  alt2,
  width2,
  height2,
}) => {
  return (
    <Picture>
      <img
        className="picture-box-img left"
        src={Image1}
        alt={alt1}
        loading="lazy"
        width={width1}
        height={height1}
      />
      <img
        className="picture-box-img right"
        src={Image2}
        alt={alt2}
        loading="lazy"
        width={width2}
        height={height2}
      />
    </Picture>
  )
}

const Picture = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: wrap;
  max-width: 100%;

  img {
    width: 100%;
    margin: 1rem auto;
  }
   {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    max-width: 100%;
    margin: 0 auto;
  }

   {
    ${
      '' /* {
      @media (min-width: 640px) {
        display: flex;
        flex-direction: wrap;

        img {
          width: 100%;
          margin: 1rem auto;
        }
        .left {
          margin-right: 0.5%;
        }
        .right {
          margin-left: 0.5%;
        }
      }
    } */
    }
  }
`

export default PictureBox
