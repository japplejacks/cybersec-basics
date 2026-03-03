export const metadata = {
  title: 'About | CyberSec Basics',
  description: 'About CyberSec Basics — practical cybersecurity guides for small business owners, by Apple Core Tech.',
};

export default function About() {
  return (
    <article>
      <a href="/" className="back-link">&larr; Back to articles</a>
      <h1>About CyberSec Basics</h1>

      <p>CyberSec Basics is a free resource dedicated to helping small business owners understand and implement cybersecurity best practices. We publish plain-language security guides, tool reviews, and actionable tips that protect your business without requiring a dedicated IT team.</p>

      <h2>What We Cover</h2>
      <ul>
        <li><strong>Security Tips:</strong> Practical, easy-to-follow advice for protecting your business data, devices, and accounts.</li>
        <li><strong>Tool Reviews:</strong> Honest reviews of security software, password managers, VPNs, and other tools small businesses need.</li>
        <li><strong>Phishing Prevention:</strong> How to train your team to recognize and avoid phishing attacks, social engineering, and email scams.</li>
        <li><strong>Password Management:</strong> Best practices for creating and enforcing strong password policies across your organization.</li>
        <li><strong>Network Security:</strong> Guides for securing your business WiFi, firewall setup, and safe remote access.</li>
      </ul>

      <h2>Who We Are</h2>
      <p>CyberSec Basics is a project by <a href="https://applecoreatl.com">Apple Core Tech</a>, an Atlanta-based IT services and digital solutions company. We handle cybersecurity for small businesses professionally, so every guide we write comes from real-world experience dealing with actual threats.</p>

      <h2>Affiliate Disclosure</h2>
      <p>Some of our articles contain affiliate links to security products and tools we recommend. If you purchase through these links, we may earn a small commission at no extra cost to you. This helps us keep the site running and continue publishing free content. We only recommend products and services we genuinely believe in.</p>

      <h2>Get in Touch</h2>
      <p>Have a security question or topic you&apos;d like us to cover? Reach out at <a href="mailto:info@applecoreatl.com">info@applecoreatl.com</a>.</p>
    </article>
  );
}
