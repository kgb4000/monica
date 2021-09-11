import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'

const calendly = "https://calendly.com/monica-17/monica-browne-weddings-call"

const Gallery = () => {
	return (
		<>
			<HeroSection 
				heroText="Wedding Gallery"
				subText="Pictures From Our Happily Married Couples"
				buttonText="Book a Call"
				backgroundImage="../WebP-images/bride-groom-night-photo.webp" alt="Bride and Groom Night Photo"
				buttonLink={calendly}
				backgroundHeight="100vh"
			/>
			<section className='container'>
				<h2 className='title'>Some Of Our Favorite Wedding Pictures</h2>
				<Photos>
					{/* Natallie's wedding */}
					<img src='../WebP-images/flowers-in-pavillion.webp' className='grid-item-1' alt='Flowers in pavillion'/>
					<img src='../WebP-images/wedding-bride.webp' className='grid-item-2' alt='Wedding bride'/>
					<img src='../WebP-images/wedding-table-setting-with-flowers.webp' className='grid-item-3' alt='Wedding table setting with flowers'/>
					<img src='../WebP-images/kiss-at-wedding.webp' 			className='grid-item-4' alt='Wedding table setting with flowers'/>
					<img src='../WebP-images/reserved-wedding-table.webp' 	className='grid-item-5' alt='Reserved wedding table'/>
					<img src='../WebP-images/flowers-and-bride-shoes.webp' className='grid-item-6' alt='Flowers and bride shoes'/>
					<img src='../WebP-images/walking-down-aisle.webp' className='grid-item-8' alt='Walking down aisle'/>
					<img src='../WebP-images/happy-bride.webp' className='grid-item-9' alt='Wedding table setting with flowers'/>
					<img src='../WebP-images/wedding-ceremony.webp' className='grid-item-10' alt='Wedding ceremony'/>
					{/* Thurston's wedding */}
					<img src='../WebP-images/bride-groom-happy.webp' className='grid-item-11' alt='Happy bride and groom'/>
					<img src='../WebP-images/black-red-wedding-decor.webp' className='grid-item-13' alt='Wedding flowers on table'/>
					<img src='../WebP-images/reserved-wedding-table.webp' className='grid-item-17' alt='Reserved wedding table'/>
					<img src='../WebP-images/black-red-wedding-decor.webp' className='grid-item-18' alt='Wedding table setting with flowers'/>
					<img src='../WebP-images/bride-at-wedding.webp' className='grid-item-19' alt='Bride at Wedding'/>
					<img src='../WebP-images/tall-wedding-flowers-centerpiece.webp' className='grid-item-20' alt='Tall Wedding Flower Centerpiece'/>
					<img src='../WebP-images/tea-lights.webp' className='grid-item-21' alt='Wedding Walk Way Decor With Tea Lights'/>
					<img src='../WebP-images/indoor-wedding-ceremony.webp' className='grid-item-22' alt='Indoor Wedding Cermony'/>
					<img src='../WebP-images/black-grooms-men.webp' className='grid-item-23' alt='Black Grooms Men'/>
					<img src='../WebP-images/wedding-reception-table.webp' className='grid-item-24' alt='Wedding Reception Table'/>
					<img src='../WebP-images/wedding-reception-tables.webp' className='grid-item-25' alt='Wedding Reception Tables'/>
					<img src='../WebP-images/wedding-reception-table-decor.webp' className='grid-item-26' alt='Wedding Reception Table Decor'/>
					<img src='../WebP-images/wedding-reception-decor.webp' className='grid-item-27' alt='Wedding Reception Decor'/>
					<img src='../WebP-images/bride-groom-serious-love.webp' className='grid-item-28' alt='Bride and Groom'/>
				</Photos>
				<div className='center'>
					<a href={calendly}><Button>Book a call</Button></a>
				</div>
			</section>
			
		</>
	)
}

const Photos = styled('div')`

img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(8, 5vw);
    grid-gap: 15px;
	}

	.grid-item-2 {
		grid-column: 1 / 3;
		grid-row: 1 / 10;
	}

	.grid-item-1 {
		grid-column: 3 / 5;
		grid-row: 1 / 6;
	}

	.grid-item-3 {
		grid-column: 3 / 5;
		grid-row: 6 / 10;
	}

	.grid-item-4 {
		grid-column: 1 / 3;
		grid-row: 10 / 12;
	}

	.grid-item-9 {
		grid-column: 3 / 5;
		grid-row: 10 / 12;
	}

	.grid-item-5 {
		grid-column: 1 / 3;
		grid-row: 12 / 14;
	}

	.grid-item-6 {
		grid-column: 3 / 5;
		grid-row: 12 / 14;
	}

	.grid-item-8 {
		grid-column: 1 / 5;
		grid-row: 14 / 16;
	}

	.grid-item-10 {
		grid-column: 1 / 3;
		grid-row: 16 / 18;
	}

	.grid-item-11 {
		grid-column: 3 / 5;
		grid-row: 18 / 21;
	}

	.grid-item-13 {
		grid-column: 1 / 3;
		grid-row: 18 / 21;
	}

	.grid-item-14 {
		grid-column: 3 / 5;
		grid-row: 18 / 19;
	}

	.grid-item-17 {
		grid-column: 3 / 5;
		grid-row:  16 / 18;
	}

	.grid-item-18 {
		grid-column: 1 / 3;
		grid-row: 20 / 21;
	}

	.grid-item-19 {
		grid-column: 1 / 3;
		grid-row: 18 / 21;
	}

	.grid-item-20 {
		grid-column: 1 / 3;
		grid-row: 21 / 22;
	}

	.grid-item-21 {
		grid-column: 3 / 5;
		grid-row: 21 / 22;
	}

	.grid-item-22 {
		grid-column: 1 / 5;
		grid-row: 23 / 25;
	}

	.grid-item-23 {
		grid-column: 1 / 5;
		grid-row: 23 / 25;
	}

	.grid-item-24 {
		grid-column: 1 / 3;
		grid-row: 25 / 26;
	}

	.grid-item-25 {
		grid-column: 3 / 5;
		grid-row: 25 / 26;
	}

	.grid-item-26 {
		grid-column: 3 / 5;
		grid-row: 26 / 27;
	}

	.grid-item-27 {
		grid-column: 3 / 5;
		grid-row: 27 / 28;
	}

	.grid-item-28 {
		grid-column: 1 / 3;
		grid-row: 26 / 28;
	}

	
`

export default Gallery