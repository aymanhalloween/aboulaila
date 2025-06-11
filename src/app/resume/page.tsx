'use client';

import Link from "next/link";

export default function Resume() {
  return (
    <main className="min-h-screen bg-[#040404] text-white page-transition w-full flex justify-center relative z-10">
      <div className="max-w-4xl w-full px-6 py-12 md:py-20">
        {/* Header */}
        <header className="mb-16">
          <Link href="/" className="text-[#c2c2c2] hover:text-white transition-all duration-300 mb-8 inline-block hover-scale link-slide">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-light mb-8 fade-in-up">Resume</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 fade-in-up animate-delay-200">
            <p className="text-[#c2c2c2] text-lg">Mohamed Aboulaila</p>
            <span className="hidden md:block text-[#5d5d5d]">•</span>
            <p className="text-[#c2c2c2] text-lg">Growth Hacker & Partnerships Manager</p>
            <span className="hidden md:block text-[#5d5d5d]">•</span>
            <p className="text-[#c2c2c2] text-lg">Web3 & Influencer Marketing Specialist</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 fade-in-up animate-delay-300">
            <p className="text-[#c2c2c2]">San Francisco, California</p>
            <span className="hidden md:block text-[#5d5d5d]">•</span>
            <a href="mailto:mohamedabolaila@gmail.com" className="text-[#c2c2c2] link-slide hover:text-white transition-all duration-300">mohamedabolaila@gmail.com</a>
            <span className="hidden md:block text-[#5d5d5d]">•</span>
            <a href="https://cal.com/aboulaila" className="text-[#c2c2c2] link-slide hover:text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">cal.com/aboulaila</a>
            <span className="hidden md:block text-[#5d5d5d]">•</span>
            <a href="https://x.com/mabthemangoo" className="text-[#c2c2c2] link-slide hover:text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">@mabthemangoo</a>
          </div>
        </header>

        <div className="section-divider fade-in animate-delay-300" />

        {/* Summary */}
        <section className="mb-16 fade-in-up animate-delay-400">
          <h2 className="text-2xl font-light mb-8">Summary</h2>
          <div className="text-[#c2c2c2] leading-relaxed hover:text-white transition-colors duration-300">
            <p>
              With 4+ years of experience in growth hacking, I've been at the forefront of scaling brands, driving user acquisition, and building thriving communities. I've worked with industry leaders like Playa3ull, <a href="https://www.redbull.com/us-en" target="_blank" rel="noopener noreferrer" className="link-underline">Red Bull Gaming</a>, Invisible Friends, Samsung, Mike and Ike, Shrapnel, <a href="https://www.basedbrett.com/" target="_blank" rel="noopener noreferrer" className="link-underline">Brett</a>, Play Bloom Verse, helping them expand their reach, optimize marketing funnels, and accelerate token adoption.
            </p>
            <br />
            <p>
              My approach blends data-driven experimentation, influencer marketing, and viral growth strategies to maximize engagement and retention. I specialize in crypto, social media, influencer marketing, token growth, and community building, seamlessly integrating Web3 trends with high-impact promotional campaigns.
            </p>
          </div>
        </section>

        <div className="section-divider fade-in animate-delay-500" />

        {/* Experience */}
        <section className="mb-16 fade-in-up animate-delay-600">
          <h2 className="text-3xl md:text-4xl font-light mb-12 fade-in-up">Experience</h2>

          {/* Playa3ull */}
          <div className="mb-12 fade-in-up animate-delay-200">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-medium text-white mb-2">Partnerships Manager</h3>
                <p className="text-xl text-[#c2c2c2]"><a href="https://playa3ull.games" target="_blank" rel="noopener noreferrer" className="link-underline">Playa3ull</a></p>
              </div>
              <p className="text-[#8c8c8c] text-lg mt-2 md:mt-0">January 2025 - March 2025</p>
            </div>
            <ul className="text-[#c2c2c2] space-y-3 ml-4">
              <li>• Managed Twitter and Discord channels, increasing engagement 3x</li>
              <li>• Onboarded 1K+ new Web2 users into Web3 community through simplified UX campaigns</li>
              <li>• Built and maintained relationships with Web3 projects to co-host AMAs, giveaways, and community crossovers</li>
              <li>• Developed partner pitch decks and onboarding flows to streamline collaboration and increase activation rates</li>
            </ul>
          </div>

          {/* Play Bloomverse */}
          <div className="mb-12 fade-in-up animate-delay-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-medium text-white mb-2">Launch Strategist</h3>
                <p className="text-xl text-[#c2c2c2]"><a href="https://akasha.bloomverse.io" target="_blank" rel="noopener noreferrer" className="link-underline">Play Bloomverse</a></p>
              </div>
              <p className="text-[#8c8c8c] text-lg mt-2 md:mt-0">December 2024 - February 2025</p>
            </div>
            <ul className="text-[#c2c2c2] space-y-3 ml-4">
              <li>• Led influencer partnerships during token launch</li>
              <li>• <strong>Campaign resulted in over $150M volume and a $51M market cap within two months</strong></li>
              <li>• Coordinated go-to-market messaging across Discord, X (Twitter), and Web3 communities</li>
              <li>• Built activation pipelines with key KOLs to sustain momentum post-launch</li>
            </ul>
          </div>

          {/* Brett */}
          <div className="mb-12 fade-in-up animate-delay-400">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-medium text-white mb-2">Growth Partnerships Manager</h3>
                <p className="text-xl text-[#c2c2c2]"><a href="https://www.basedbrett.com/" target="_blank" rel="noopener noreferrer" className="link-underline">Brett ($BRETT)</a></p>
              </div>
              <p className="text-[#8c8c8c] text-lg mt-2 md:mt-0">March 2024 - December 2024</p>
            </div>
            <ul className="text-[#c2c2c2] space-y-3 ml-4">
              <li>• Led strategic partnerships and influencer campaigns for top memecoin project</li>
              <li>• Coordinated cross-platform marketing initiatives driving community engagement</li>
              <li>• Developed growth strategies resulting in increased token adoption and trading volume</li>
              <li>• Managed relationships with key opinion leaders and crypto influencers</li>
              <li>• <strong>Onboarded Rick Ross, Offset, Gilbert Burns, and NASCAR driver Witold Ramasauskas</strong></li>
              <li>• <strong>Helped secure Forbes feature</strong></li>
              <li>• Contributed to philanthropic milestones: 5 clean water wells in Nigeria, school in Tamil Nadu, India</li>
            </ul>
          </div>

          {/* Mike and Ike */}
          <div className="mb-12 fade-in-up animate-delay-500">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-medium text-white mb-2">Tournament Marketing Coordinator</h3>
                <p className="text-xl text-[#c2c2c2]"><a href="https://www.mikeandike.com/bringing-the-flavor-game/" target="_blank" rel="noopener noreferrer" className="link-underline">Mike and Ike</a></p>
              </div>
              <p className="text-[#8c8c8c] text-lg mt-2 md:mt-0">November 2024 - February 2025</p>
            </div>
            <ul className="text-[#c2c2c2] space-y-3 ml-4">
              <li>• Helped coordinate branded Fortnite tournament in partnership with Dignitas</li>
              <li>• Supported planning, creator recruitment, and marketing rollout across social platforms</li>
            </ul>
          </div>

          {/* Shrapnel */}
          <div className="mb-12 fade-in-up animate-delay-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-medium text-white mb-2">Influencer & Creator Partnerships Manager</h3>
                <p className="text-xl text-[#c2c2c2]"><a href="https://www.shrapnel.com" target="_blank" rel="noopener noreferrer" className="link-underline">Shrapnel</a></p>
              </div>
              <p className="text-[#8c8c8c] text-lg mt-2 md:mt-0">July 2024 - December 2024</p>
            </div>
            <ul className="text-[#c2c2c2] space-y-3 ml-4">
              <li>• Outreach Lead for public playtest influencer push</li>
              <li>• Orchestrated content rollouts across Twitch and Twitter to drive playtest access</li>
              <li>• Collaborated with gaming talent managers to structure contract and delivery</li>
              <li>• Identified and onboarded emerging creators to diversify Shrapnel's promotional reach</li>
            </ul>
          </div>

          {/* Red Bull */}
          <div className="mb-12 fade-in-up animate-delay-700">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-medium text-white mb-2">Marketing Campaign Coordinator</h3>
                <p className="text-xl text-[#c2c2c2]"><a href="https://www.redbull.com/us-en" target="_blank" rel="noopener noreferrer" className="link-underline">Red Bull</a></p>
              </div>
              <p className="text-[#8c8c8c] text-lg mt-2 md:mt-0">January 2023 - February 2024</p>
            </div>
            <ul className="text-[#c2c2c2] space-y-3 ml-4">
              <li>• Coordinated gaming tournaments and esports events with millions of viewers</li>
              <li>• Managed influencer partnerships and sponsored content campaigns</li>
              <li>• Developed activation strategies for gaming and lifestyle marketing initiatives</li>
              <li>• Collaborated with content creators to produce engaging brand content</li>
            </ul>
          </div>

          {/* Samsung */}
          <div className="mb-12 fade-in-up animate-delay-800">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-medium text-white mb-2">Creator Campaign Coordinator</h3>
                <p className="text-xl text-[#c2c2c2]"><a href="https://samsungodysseycup.gg/" target="_blank" rel="noopener noreferrer" className="link-underline">Samsung</a></p>
              </div>
              <p className="text-[#8c8c8c] text-lg mt-2 md:mt-0">February 2023 - June 2023</p>
            </div>
            <ul className="text-[#c2c2c2] space-y-3 ml-4">
              <li>• Executed Galaxy S-series gaming campaign by equipping creators like Bugha and AsianJeff</li>
              <li>• Helped launch the Samsung Odyssey Cup, handling backend logistics and creator contracts</li>
              <li>• <strong>Campaign generated 4M+ views</strong> and was featured in creator tech content and live events</li>
            </ul>
          </div>

          {/* Invisible Friends */}
          <div className="mb-12 fade-in-up animate-delay-900">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-medium text-white mb-2">Community Operations</h3>
                <p className="text-xl text-[#c2c2c2]"><a href="https://invisiblefriends.io/" target="_blank" rel="noopener noreferrer" className="link-underline">Invisible Friends</a></p>
              </div>
              <p className="text-[#8c8c8c] text-lg mt-2 md:mt-0">December 2021 - May 2022</p>
            </div>
            <ul className="text-[#c2c2c2] space-y-3 ml-4">
              <li>• Moderated Discord and managed Web3 community growth</li>
              <li>• <strong>Project reached 15 ETH floor price (~$40K) with over $130M in trading volume</strong></li>
              <li>• Facilitated partnerships with Web3 communities for AMAs and collaborative giveaways</li>
            </ul>
          </div>
        </section>

        <div className="section-divider fade-in animate-delay-600" />

        {/* Skills */}
        <section className="mb-16 fade-in-up animate-delay-700">
          <h2 className="text-2xl font-light mb-8">Skills & Tools</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="hover-lift transition-all duration-300">
              <h3 className="text-lg font-medium mb-4 text-white">Growth & Marketing</h3>
              <ul className="text-[#c2c2c2] space-y-2 stagger-container">
                <li className="hover:text-white transition-colors duration-300">• Growth Strategy & Viral Loops</li>
                <li className="hover:text-white transition-colors duration-300">• Influencer Campaigns & KOL Management</li>
                <li className="hover:text-white transition-colors duration-300">• Community Building & Engagement</li>
                <li className="hover:text-white transition-colors duration-300">• Token Launches & Web3 Marketing</li>
                <li className="hover:text-white transition-colors duration-300">• Partnership Development</li>
                <li className="hover:text-white transition-colors duration-300">• Campaign Analytics & Optimization</li>
              </ul>
            </div>

            <div className="hover-lift transition-all duration-300">
              <h3 className="text-lg font-medium mb-4 text-white">Platforms & Tools</h3>
              <ul className="text-[#c2c2c2] space-y-2 stagger-container">
                <li className="hover:text-white transition-colors duration-300">• Web3: Galxe, Zealy, Layer3</li>
                <li className="hover:text-white transition-colors duration-300">• Analytics: Amplitude, Dune, Mixpanel</li>
                <li className="hover:text-white transition-colors duration-300">• Tools: Notion, Figma, Airtable, Zapier</li>
                <li className="hover:text-white transition-colors duration-300">• Social: Twitter, Discord, Telegram</li>
                <li className="hover:text-white transition-colors duration-300">• Gaming: Twitch, YouTube Gaming</li>
                <li className="hover:text-white transition-colors duration-300">• Creator Platforms & Talent Management</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider fade-in animate-delay-600" />

        {/* Community Involvement */}
        <section className="mb-16 fade-in-up animate-delay-800">
          <h2 className="text-2xl font-light mb-8">Community & Speaking</h2>

          <div className="hover-lift transition-all duration-300">
            <ul className="text-[#c2c2c2] space-y-2 leading-relaxed stagger-container">
              <li className="hover:text-white transition-colors duration-300">• Public Relations Society of America</li>
              <li className="hover:text-white transition-colors duration-300">• Volunteer – Dallas Blockchain Club</li>
              <li className="hover:text-white transition-colors duration-300">• Workshop Speaker – Web3 Creator Mastermind (2024)</li>
            </ul>
          </div>
        </section>

        <div className="section-divider fade-in animate-delay-600" />

        {/* Download */}
        <section className="fade-in-up animate-delay-900">
          <div className="flex flex-col md:flex-row md:items-center gap-4 stagger-container">
            <a
              href="/mohamed-aboulaila-resume.pdf"
              className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-[#c2c2c2] transition-all duration-300 hover-lift hover-scale"
            >
              Download Resume
            </a>
            <a href="mailto:mohamedabolaila@gmail.com" className="text-white link-slide text-lg hover:text-white transition-all duration-300 hover-lift">
              Get in touch
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
