import Link from 'next/link'
import styled from 'styled-components'
import { getPost, getPosts, getPostsSlugs } from '../../lib/data'
import HeroSection from '../../components/HeroSection'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { NextSeo } from 'next-seo'
import { ArticleJsonLd } from 'next-seo'
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from 'react-share'
import { EmailIcon, FacebookIcon, TwitterIcon } from 'react-share'

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  const data = await getPosts()
  return {
    props: {
      post: post.posts[0],
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 30, // In seconds
  }
}

export const getStaticPaths = async () => {
  const slugsRes = await getPostsSlugs()
  const slugs = slugsRes.posts
  console.log(slugs)
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  }
}

export default function Blog({ post, data }) {
  const SEO = {
    title: post.title,
    description: post.description,
    url: `https://monicabrowneweddings.com/blog/${post.slug}`,
    canonical: `https://monicabrowneweddings.com/blog/${post.slug}`,
    openGraph: {
      type: 'article',
      article: {
        publishedTime: post.date,
        authors: [`https://www.example.com/authors/@${post.author.name}`],
      },
      images: [
        {
          url: post.coverImage.url,
          width: post.coverImage.width,
          height: post.coverImage.height,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      url: `https://monicabrowneweddings.com/blog/${post.slug}`,
      site_name: 'Monica Browne Weddings',
    },
  }

  console.log(data)
  return (
    <>
      <ArticleJsonLd
        url={`https://monicabrowneweddings.com/blog/${post.slug}`}
        title={post.title}
        images={[post.coverImage.url]}
        datePublished={post.date}
        authorName={[post.author.name]}
        description={post.description}
      />
      <NextSeo
        {...SEO}
        robotsProps={{
          notranslate: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
        }}
      />

      <Main>
        <div className="container">
          <div className="content">
            <h1>{post.title}</h1>
            <div className="author-info">
              <Link href="/about">
                <a>
                  <img
                    src={post.author.image.url}
                    className="author-img"
                    alt={post.author.name}
                    title={post.author.name}
                  />
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <span className="author-name">{post.author.name}</span>
                </a>
              </Link>
              <span>
                {new Date(post.date).toLocaleDateString('en-us', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>
            <p className="share-text">Be a dear and share:</p>
            <div className="share-btns">
              <div className="facebook-btn">
                <FacebookShareButton
                  url={`https://monicabrowneweddings.com/blog/${post.slug}`}
                >
                  <FacebookIcon size={35} round={true} />
                </FacebookShareButton>
              </div>
              <div className="twitter-btn">
                <TwitterShareButton
                  url={`https://monicabrowneweddings.com/blog/${post.slug}`}
                >
                  <TwitterIcon size={35} round={true} />
                </TwitterShareButton>
              </div>
              <div className="email-btn">
                <EmailShareButton
                  url={`https://monicabrowneweddings.com/blog/${post.slug}`}
                >
                  <EmailIcon size={35} round={true} />
                </EmailShareButton>
              </div>
            </div>
            <div className="graphCms-blog">
              <RichText content={post.content.json} />
            </div>
          </div>
          <div className="content">
            <div className="blog-posts">
              <h2>More posts you may like:</h2>
              {data.posts.slice(0, 3).map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <a>
                      <div className="blog-post">
                        <img
                          src={post.coverImage.url}
                          alt={post.title}
                          title={post.title}
                        />
                        <h3>{post.title}</h3>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </div>
            <Link href="/blog">
              <a>
                <p>&#8592; Back to Blog</p>
              </a>
            </Link>
          </div>
        </div>
      </Main>
    </>
  )
}

const Main = styled.main`
  .author-info {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    font-weight: 100;

    a {
      text-decoration: none;
    }
  }

  .share-btns {
    display: flex;
    align-items: center;
    align-content: center;
    width: 100%;
    margin-bottom: 2rem;

    .share-text {
      margin: 0;
      font-size: 1rem;
    }
  }

  .facebook-btn {
    margin: 0 0.5rem;
  }
  .email-btn {
    margin: 0 0.5rem;
  }
  .author-img {
    border: 3px solid #a29bfe;
    border-radius: 50%;
    max-width: 3rem;
    margin-right: 1rem;
  }

  .author-name {
    margin-right: 1rem;
  }

  .blog-post {
    display: flex;
    align-items: center;

    img {
      width: 50%;
      margin: 0;
      margin-right: 5%;
    }

    h3 {
      font-size: 0.8rem;
      width: 50%;
    }
  }

  .graphCms-blog {
    img {
      margin: 1rem 0;
    }
  }

  .blog-posts {
    a {
      text-decoration: none;
    }
  }

  @media (min-width: 768px) {
    .content {
      max-width: 60rem;
      margin: 0 auto;
    }

    .author-info {
      font-size: 1rem;
    }

    .blog-posts {
      margin-top: 4rem;

      h3 {
        font-size: 1.6rem;
      }
    }
  }
`
