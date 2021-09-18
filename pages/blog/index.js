import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../../components/HeroSection'
import Button from '../../components/Button'
import { NextSeo } from 'next-seo'
import { BlogJsonLd } from 'next-seo'
import { getPosts } from '../../lib/data'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

const Monica =
  'https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631816208/monica_cqphqb.jpg'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

export default function Blog({ data }) {
  const SEO = {
    title: 'Blog | Monica Browne Weddings',
    description:
      'Blog for Monica Browne Weddings. Helping couples navigate wedding planning.',
    canonical: 'https://monicabrowneweddings.com/blog',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/blog',
      site_name: 'Monica Browne Weddings',
      image: 'bride-with-flowers.jpg',
    },
  }
  return (
    <div>
      <BlogJsonLd
        url="https://monicabrowneweddings.com/blog"
        title="Monica's Blog"
        images={[
          'https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631813345/bride-glasses_pzaoov.webp',
        ]}
        authorName="Monica Browne"
        description="My blog for engaged couples."
      />
      <NextSeo
        {...SEO}
        robotsProps={{
          notranslate: true,
          maxSnippet: -1,
        }}
      />
      <HeroSection
        heroText="Blog"
        subText="My blog for engaged couples"
        backgroundImage="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631813345/bride-glasses_pzaoov.webp"
        buttonText="Let's talk"
        buttonLink={calendly}
        backgroundHeight="60vh"
      />
      <section className="container">
        <Main>
          <h1 className="title">Monica's Blog</h1>
          <div className="content">
            <div className="blog-posts">
              {data.posts.map((post) => (
                <div key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <a>
                      <div className="blog-post">
                        <img
                          className="blog-img"
                          src={post.coverImage.url}
                          alt={post.title}
                          title={post.title}
                        />
                        <div className="blog-info">
                          <p>
                            {new Date(post.date).toLocaleDateString('en-us', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                          <h3>{post.title}</h3>
                          <p>Read more</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
            <div className="sidebar">
              {data.posts.slice(0, 1).map((post) => (
                <img
                  src={Monica}
                  alt={post.author.name}
                  title={post.author.name}
                />
              ))}
              <p>
                Hi, I'm Monica with{' '}
                <Link href="/">
                  <a>Monica Browne Weddings</a>
                </Link>
                . I help busy couples in Maryland and DC plan their dream
                weddings. If you're a busy couple and need help planning your
                wedding, let's talk.
              </p>
              <div className="center">
                <a href={calendly}>
                  <Button>Book a call</Button>
                </a>
              </div>
            </div>
          </div>
        </Main>
      </section>
    </div>
  )
}

const Main = styled('div')`
  .author-info {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 0.8rem;
    font-weight: 100;
  }
  .author-img {
    border: 3px solid #a29bfe;
    border-radius: 50%;
    max-width: 3rem;
    margin-right: 1rem;
  }

  .authoer-name {
    margin-right: 1rem;
  }

  .content li {
    list-style-type: none;
    display: inline-block;
  }

  .blog-post {
    color: #101010;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #ddd;

    :last-child {
      border-bottom: none;
    }
  }

  @media (min-width: 768px) {
    .content {
      display: flex;
      max-width: 80rem;
      margin: 0 auto;
    }
    .blog-posts {
      width: 80%;
      margin-right: 5%;
    }
    .blog-post {
      display: flex;
      margin-bottom: 2rem;
      margin-right: 2rem;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #ddd;

      .blog-img {
        width: 45%;
        margin-right: 5%;
      }

      .blog-info {
        width: 50%;

        p {
          font-size: 0.6rem;
        }
      }

      h3 {
        font-size: 1.2rem;
        font-weight: 500;
      }
    }

    .sidebar {
      width: 25%;

      img {
        max-width: 100%;
      }

      p {
        font-size: 1rem;
        font-weight: 0.6rem;
      }
    }
  }

  @media (min-width: 900px) {
    .blog-post {
      .blog-info {
        width: 50%;

        p {
          font-size: 0.6rem;
        }
      }

      h3 {
        font-size: 1.8rem;
        font-weight: 500;
        margin: 0.1rem 0;
      }
    }

    .sidebar {
      width: 20%;

      img {
        max-width: 100%;
      }

      p {
        font-size: 1rem;
        font-weight: 0.6rem;
      }
  }

  @media (min-width: 1440px) {
    .blog-post {

      .blog-img {
        width: 50%;
        margin-right: 5%;
      }

      .blog-info {
        width: 50%;

        p {
          font-size: 0.6rem;
        }
      }

      h3 {
        font-size: 2rem;
        font-weight: 500;
        margin: 0.1rem 0;
      }
    }

    .sidebar {
      width: 20%;

      img {
        max-width: 100%;
      }

      p {
        font-size: 1rem;
        font-weight: 0.6rem;
      }
  }
`
