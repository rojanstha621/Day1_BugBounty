// ✅ /src/app/page.js (Home Page)
export default function HomePage() {
  return (
    <section className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Ethical HCK</h1>
      <p className="text-lg mb-6">
        <strong>Ethical HCK</strong> is a student-led cybersecurity community. The core aim is to:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Make cybersecurity knowledge accessible and exciting for students and enthusiasts.</li>
        <li>Host interactive, hands-on events, workshops, and sessions that demystify cybersecurity topics.</li>
        <li>Build a fun, inclusive and safe environment for learning ethical hacking, digital forensics, OSINT, and more.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Activities by Ethical HCK</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Cybersecurity workshops (Digital Forensics, Bug Bounty, Dark Web exploration)</li>
        <li>Gamified sessions (Kahoot quizzes, clue hunts, challenges)</li>
        <li>Collaboration with guest speakers and ethical hackers</li>
        <li>Promoting legal and ethical hacking practices</li>
      </ul>
      <section className="bg-white rounded shadow p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">🌐 Cyber यात्रा (Cyber Yatra): The Initiative</h2>
        <p className="mb-2"><strong>Cyber यात्रा</strong> is a flagship event series launched by Ethical HCK in 2025.</p>
        <p><strong>Meaning:</strong> &quot;यात्रा&quot; means journey — and this event series is a journey into the world of cybersecurity.</p>
        <p><strong>Purpose:</strong> To guide beginners and enthusiasts through various cybersecurity domains. Each session explores a different facet of cyber knowledge.</p>
        <p><strong>Format:</strong> Series of 8 themed events. Guest talks, hands-on sessions, debates, and mini-competitions. Uses a gamified and real-world storytelling approach.</p>
        <h3 className="text-lg font-semibold mt-4 mb-2">🌟 Completed or Planned Events Include:</h3>
        <ul className="list-disc list-inside">
          <li>Digital Detectives – Learning digital forensics</li>
          <li>Dark Web: The Hidden Internet – Exploring Tor and .onion domains</li>
          <li>Bug Bounty: Find Your First Bug – Introduction to web app hacking</li>
          <li>More sessions planned in domains like OSINT, Privacy, Mobile Hacking, etc.</li>
        </ul>
      </section>

      <section className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-4">🪲 Bug Bounty: Find Your First Bug (Cyber यात्रा Event)</h2>
        <p className="mb-2"><strong>What is it?</strong> A hands-on event introducing participants to the world of bug bounty hunting — the ethical way to find security vulnerabilities and report them for rewards.</p>
        <p className="font-semibold">What it Covers:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Basics of bug bounty and ethical hacking</li>
          <li>Intro to OWASP Top 10 vulnerabilities</li>
          <li>Tools like Burp Suite, browser dev tools, and intercepting proxies</li>
          <li>Live demonstrations of XSS, IDOR, CSRF, and more</li>
          <li>CTF-style challenges or practical labs</li>
          <li>Insights on responsible disclosure and real bug bounty platforms (e.g., HackerOne, Bugcrowd)</li>
        </ul>
        <p><strong>Special Guests:</strong> Talk sessions by two fantastic speakers experienced in bug bounty. Real-life bug stories and journey into ethical hacking.</p>
      </section>
    </section>
  );
}
