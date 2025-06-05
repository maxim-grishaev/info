import styles from './page.module.css';
import { Github, LinkedIn, Telegram } from './icons.svg';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container_in}>
        <h1 className={styles.wave}>
          Hello, I am Maxim Grishaev <span className={styles.hand}>👋</span>
        </h1>
        <h2>Software Engineer (Fullstack, Frontend, Web, Mobile)</h2>

        <p>
          Helped teams to <strong>deliver 2-3x faster</strong> while <strong>cutting error rates by 50%</strong>.
          Shipped features <strong>used by 300 million monthly users globally</strong> across web, mobile, and smart TV
          platforms. Helped multiple engineers <strong>level up and get promoted</strong> through hands-on{' '}
          <strong>support and clear feedback</strong>. Managed the <strong>hiring and onboarding</strong> of new
          developers. Improved <strong>app performance by up to 30%</strong> (and even more in some aspects).{' '}
          <strong>Modernised legacy codebases</strong> and cleaned them.
          <strong>Set up tooling and workflows</strong> (CI, testing, automation, performance, etc). Not afraid to{' '}
          <strong>dive into unfamiliar</strong> systems and make sense of them fast.
        </p>

        <p className={styles.links}>
          For more information, please visit my
          <Link href="https://www.linkedin.com/in/maxim-grishaev">
            <LinkedIn className={styles.icon} alt="LinkedIn" />
            LinkedIn profile
          </Link>
          ,
          <Link href="https://github.com/maxim-grishaev">
            <Github className={styles.icon} alt="GitHub" />
            GitHub
          </Link>
          or write me directly via
          <Link href={`https://t.me/mg_k3?text=${encodeURIComponent('Hello! I used a link on your website')}`}>
            <Telegram className={styles.icon} alt="Telegram" />
            Telegram
          </Link>
        </p>
        <div className={styles.keywords}>
          <h2>Keywords</h2>
          <ul>
            <li>
              <strong>Programming languages:</strong> Typescript, Javascript
            </li>
            <li>
              <strong>Also</strong> Rust, Golang, Python, Ruby on Rails, Elixir.
            </li>
            <li>
              <strong>Skills:</strong> Team Leadership, Web Development, Product Engineering, Process Automation,
              Project Management, Project Planning.
            </li>
            <li>
              <strong>Tools:</strong> Node.js, Typescript, Javascript, React, Next.js, React Native, HTML, CSS, AWS,
              PostgreSQL, Redis, Docker, Terraform, Redux, MobX, styled components, vanilla-extract, SCSS, Cordova,
              GraphQL, WebSockets, REST, gRPC, Protobuf, XMPP, browser extension API, Coralogix, DataDog, NewRelic,
              Sentry, RUM, Jest, vitest, Notion, Figma, TS, JS, SVG, Leaflet, OpenAPI, Puppeteer, PhantomJS, SVG, VML,
              A/B testing, Angular, GraphQL
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
