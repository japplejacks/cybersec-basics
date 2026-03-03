import { getSortedPosts } from '../lib/posts';
import AdSense from '../components/AdSense';

export default function Home() {
  const posts = getSortedPosts();

  return (
    <>
      <div className="hero">
        <h1>CyberSec Basics</h1>
        <p>Practical cybersecurity tips and guides to protect your small business from threats.</p>
      </div>

      <AdSense slot="header-ad" />

      {posts.length === 0 ? (
        <p>New content coming soon! Check back for cybersecurity guides and tool reviews.</p>
      ) : (
        <ul className="post-list">
          {posts.map(post => (
            <li key={post.slug} className="post-card">
              <h2><a href={`/posts/${post.slug}`}>{post.title}</a></h2>
              <span className="post-date">{post.date}</span>
              {post.keywords && (
                <div className="post-keywords">
                  {post.keywords.map(kw => (
                    <span key={kw} className="keyword">{kw}</span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      <AdSense slot="footer-ad" />
    </>
  );
}
