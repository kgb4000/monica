import Link from 'next/link'
import styled from 'styled-components'
import Button from '../components/Button'

export default function Blog({ data }) {
  return (
    <section className="container">
      <BlogContent>
        <h2 className="title">Latest Posts From Monica</h2>
        <div className="blog-posts">
          {data.posts.slice(0, 3).map((post) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div className="blog-post">
                  <img
                    className="blog-img"
                    src={post.coverImage.url}
                    alt={post.title}
                    loading="lazy"
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
              </Link>
            </div>
          ))}
        </div>
        <div className="center">
          <Link href="/blog">
            <Button>Read More Posts</Button>
          </Link>
        </div>
      </BlogContent>
    </section>
  )
}

const BlogContent = styled.div`
  @media (min-width: 768px) {

    .blog-post {
      display: flex;
      margin-bottom: 2rem;
      margin-right: 2rem;
      max-width: 60rem;
      margin: 0 auto;
      margin-bottom: 2rem;
      align-items: center;

      .blog-img {
        width: 45%;
        margin-right: 5%;
      }

      .blog-info {
        margin-top: 0;
        width: 50%;
        text-align: left;
        p {
          font-size: 0.6rem;
        }
      }

      h3 {
        font-size: 1.5rem;
        font-weight: 500;
      }
    }

    @media (min-width: 1440px) {
       .blog-info h3 {
        font-size: 2rem;
        font-weight: 500;
      }
  }`
