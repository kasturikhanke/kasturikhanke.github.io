import React, { useState, useEffect, useLayoutEffect } from 'react';
import SpinningLogo from './SpinningLogo';
import BottomNav from './BottomNav';
import StandardNavbar from './StandardNavbar';
import { motion } from 'framer-motion';

// Disable browser scroll restoration immediately
if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const PDFSpaces = () => {
  const [activePage, setActivePage] = useState('pdf-spaces');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [sfTime, setSfTime] = useState('');

  // Scroll to top before browser paints
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update San Francisco time
  useEffect(() => {
    const updateSfTime = () => {
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setSfTime(time);
    };
    updateSfTime();
    const interval = setInterval(updateSfTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (page) => {
    if (page === 'home') {
      window.location.href = '/?fromCaseStudy=true';
      window.scrollTo(0, 0);
    } else {
      setActivePage(page);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/70 backdrop-blur-md border-b border-white/20' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-4 flex justify-between items-center">
          <SpinningLogo />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: showNav ? 0 : 20, opacity: showNav ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <StandardNavbar />
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-8 sm:px-6 max-w-4xl">
        {/* Hero Section */}
        <section className="mb-12 md:mb-16">
          <h1 className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out text-2xl sm:text-3xl md:text-4xl font-normal mb-3 md:mb-4 leading-tight text-gray-900">
            PDF Spaces
          </h1>
          <p className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-100 text-base sm:text-lg md:text-xl font-normal mb-6 md:mb-8 text-gray-600">
            Designing collaborative AI for knowledge workers—permission systems and custom AI agents for Adobe's NotebookLM competitor, shipped in 9 months.
          </p>
          
          {/* Role Details */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-200 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-sm mb-8 md:mb-12">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Role</p>
              <p className="text-gray-900">Mobile Design Lead</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Timeline</p>
              <p className="text-gray-900">9 months</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Team</p>
              <p className="text-gray-900">4 PMs, 12 Engineers</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Platform</p>
              <p className="text-gray-900">iOS, Android & Web</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-300">
            <div className="w-full aspect-[16/9] bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center px-8">
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Image Needed</p>
                <p className="text-gray-600 text-base max-w-md">
                  Hero product shot: iPhone mockup showing PDF Spaces main interface with a Space open, visible AI chat, and multiple PDFs. Consider a multi-device composition (iPhone + iPad) to show the ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="relative py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-6 md:mb-8">
              <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
                <div className="max-w-md">
                  <h2 className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out text-lg sm:text-xl md:text-2xl font-medium md:mb-12 mb-3 md:mb-6 text-gray-900">Impact</h2>
                </div>
              </div>

              <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-100">
                <div className="flex items-start gap-8 md:gap-12 mb-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-900 mb-2">0→1</h3>
                    <p className="text-base sm:text-lg text-gray-600 max-w-[180px]">Shipped to production in 9 months</p>
                  </div>
                  <div className="w-px bg-gray-200 self-stretch min-h-[80px]"></div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-900 mb-2">3x</h3>
                    <p className="text-base sm:text-lg text-gray-600 max-w-[180px]">Agent switching frequency vs. beta</p>
                  </div>
                </div>
                {/* Metrics note */}
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-xs text-amber-700 uppercase tracking-wide mb-1 font-medium">Metrics to add</p>
                  <p className="text-sm text-amber-800">
                    Add specific adoption metrics: How many users created Spaces in first month? Share completion rate improvement? Agent creation rate? Collaboration session frequency?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context & Problem Section */}
        <section className="relative py-6 md:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
            <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
              <h2 className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out text-lg sm:text-xl md:text-2xl font-medium mb-3 md:mb-8 text-gray-900">The Problem</h2>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-100 space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg text-gray-600">
                Adobe Acrobat is synonymous with PDFs, but it's a single-document tool. Knowledge workers juggle dozens of files—lawyers with case files, researchers with studies, teams with project documents.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                We built PDF Spaces as Acrobat's answer to NotebookLM, with two key differentiators: <span className="text-gray-900 font-medium">multi-user collaboration with granular permissions, and customizable AI agents that adapt to different working styles.</span>
              </p>
            </div>
          </div>

          {/* Competitive Context */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
            <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
              <h2 className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out text-lg sm:text-xl md:text-2xl font-medium mb-3 md:mb-8 text-gray-900">Competitive Landscape</h2>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-100 space-y-6">
              <p className="text-base sm:text-lg text-gray-600">
                NotebookLM proved the market for AI-powered document workspaces, but had clear gaps we could exploit.
              </p>
              {/* Competitive comparison placeholder */}
              <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center px-6">
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Image Needed</p>
                  <p className="text-gray-600 text-sm max-w-sm">
                    2x2 competitive matrix showing: NotebookLM (single-user, generic AI) vs PDF Spaces (multi-user, customizable AI). Or a simple feature comparison table highlighting collaboration and agent customization gaps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Discovery & Research */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
            <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
              <h2 className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out text-lg sm:text-xl md:text-2xl font-medium mb-3 md:mb-8 text-gray-900">Discovery</h2>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-100 space-y-6">
              {/* Research note */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-xs text-amber-700 uppercase tracking-wide mb-1 font-medium">Content to add</p>
                <p className="text-sm text-amber-800">
                  How did you learn about user needs? Add: Number of user interviews conducted. Key user segments (legal, research, enterprise teams). How you discovered "people think in relationships, not permissions." Any analytics or support ticket insights.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 font-mono text-sm mt-1">01</span>
                  <div>
                    <p className="font-medium text-gray-900">User interviews revealed permission confusion</p>
                    <p className="text-sm text-gray-600">Users described collaborators by relationship ("my reviewer") not access level ("comment-only")</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 font-mono text-sm mt-1">02</span>
                  <div>
                    <p className="font-medium text-gray-900">AI responses felt generic across domains</p>
                    <p className="text-sm text-gray-600">Legal researchers wanted citations; creative teams wanted brainstorming. One-size-fits-all failed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 font-mono text-sm mt-1">03</span>
                  <div>
                    <p className="font-medium text-gray-900">Mobile sharing was an afterthought</p>
                    <p className="text-sm text-gray-600">Existing Acrobat share flow required 5+ taps and showed every permission option regardless of context</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My Contribution Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
            <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
              <h2 className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out text-lg sm:text-xl md:text-2xl font-medium mb-3 md:mb-8 text-gray-900">My Contribution</h2>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-100 space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg text-gray-600">
                I led mobile design for the two features that differentiated PDF Spaces from competitors: the sharing and permission system, and the custom AI agent framework. Both shipped across iOS, Android, and web.
              </p>
            </div>
          </div>
        </section>

        {/* What Shipped Section */}
        <section className="relative py-12">
          <div className="space-y-20">
            {/* Mobile Sharing Framework */}
            <motion.div 
              id="sharing" 
              className="border-b border-gray-200 pb-12 md:pb-20"
              style={{ scrollMarginTop: '8vh'}}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-900">Mobile Sharing Framework</h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Acrobat's existing share patterns were binary—view or no view. For a collaborative workspace, we needed permissions that matched how teams actually work together.
                </p>
              </div>

              {/* Before/After Comparison */}
              <div className="mb-8 md:mb-12">
                <h4 className="text-lg md:text-xl font-medium mb-4 text-gray-900">Before & After</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center px-4">
                      <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Image Needed</p>
                      <p className="text-gray-600 text-xs max-w-[200px]">
                        BEFORE: Old Acrobat share sheet showing binary "View only" / "Can edit" toggle. Show the cluttered UI with too many options visible at once.
                      </p>
                    </div>
                  </div>
                  <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center px-4">
                      <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Image Needed</p>
                      <p className="text-gray-600 text-xs max-w-[200px]">
                        AFTER: New PDF Spaces share sheet showing Contributor/Reviewer/Viewer roles with relationship-based labels. Clean, focused UI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Reframe */}
              <div className="mb-8 md:mb-12 pl-5 border-l-2 border-gray-200">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Key Insight</p>
                <blockquote className="text-base sm:text-lg text-gray-900 leading-relaxed mb-3">
                  People think in relationships, not permissions. "She's reviewing this" is clearer than "she has comment access."
                </blockquote>
              </div>

              {/* The Three Roles */}
              <div className="mb-8 md:mb-12">
                <h4 className="text-lg md:text-xl font-medium mb-4 text-gray-900">Three Roles That Shipped</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="group">
                    <div className="pt-4">
                      <span className="text-xs uppercase tracking-widest text-gray-400 mb-3 block">Contributor</span>
                      <p className="font-medium text-gray-900 mb-2">"We're working together"</p>
                      <p className="text-sm text-gray-600">Full edit access. Default for teammates.</p>
                    </div>
                  </div>
                  <div className="group">
                    <div className="pt-4">
                      <span className="text-xs uppercase tracking-widest text-gray-400 mb-3 block">Reviewer</span>
                      <p className="font-medium text-gray-900 mb-2">"I'm giving feedback"</p>
                      <p className="text-sm text-gray-600">Comment and annotate. Default for external domains.</p>
                    </div>
                  </div>
                  <div className="group">
                    <div className="pt-4">
                      <span className="text-xs uppercase tracking-widest text-gray-400 mb-3 block">Viewer</span>
                      <p className="font-medium text-gray-900 mb-2">"I'm learning from this"</p>
                      <p className="text-sm text-gray-600">Read and chat only. Default for large groups.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Two-Tap Share Flow */}
              <div className="mb-8 md:mb-12">
                <h4 className="text-lg md:text-xl font-medium mb-4 text-gray-900">Two-Tap Share Flow</h4>
                <p className="text-base text-gray-600 mb-6">
                  Select recipient, confirm. Advanced options available but never blocking the primary path.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center px-2">
                      <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Step 1</p>
                      <p className="text-gray-600 text-xs">
                        Tap share → Contact picker with recent collaborators
                      </p>
                    </div>
                  </div>
                  <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center px-2">
                      <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Step 2</p>
                      <p className="text-gray-600 text-xs">
                        Smart default applied (shows "Reviewer" for external email)
                      </p>
                    </div>
                  </div>
                  <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center px-2">
                      <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Step 3</p>
                      <p className="text-gray-600 text-xs">
                        Confirm & send (optional: tap role to change)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smart Defaults */}
              <div className="mb-8 md:mb-12">
                <h4 className="text-lg md:text-xl font-medium mb-4 text-gray-900">Smart Defaults in Action</h4>
                <p className="text-base text-gray-600 mb-6">
                  320px screens can't show all options. The system infers the right role from email domain, Space size, and sharing history.
                </p>
                <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center px-6">
                    <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Image Needed</p>
                    <p className="text-gray-600 text-sm max-w-md">
                      Annotated mockup showing smart defaults logic: @adobe.com → Contributor (internal), @external.com → Reviewer (external), 10+ recipients → Viewer (large group). Show the UI with visual indicators of why each default was chosen.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Custom AI Agents */}
            <motion.div 
              id="agents" 
              className="border-b border-gray-200 pb-12 md:pb-20"
              style={{ scrollMarginTop: '8vh'}}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-900">Custom AI Agents</h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Generic AI doesn't work for specialized domains. A legal researcher needs different responses than a creative brainstormer. We shipped customizable agents that adapt to how users want to work.
                </p>
              </div>

              {/* Design Pushback */}
              <div className="mb-8 md:mb-12 pl-5 border-l-2 border-gray-200">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">The Friction Point</p>
                <blockquote className="text-base sm:text-lg text-gray-900 leading-relaxed mb-3">
                  PMs initially defined custom agents as a sharing feature—something that belonged in the share sheet alongside permissions. I pushed back in multiple conversations with leadership: customization is valuable, but it shouldn't be the primary entry point. Users need to understand agents as interaction modes first, then optionally customize.
                </blockquote>
                <cite className="text-sm text-gray-500 not-italic">
                  The result: agents live in the prompt bar where users interact with them. Customization is accessible, not mandatory.
                </cite>
              </div>

              {/* PM vs. My Approach Comparison */}
              <div className="mb-8 md:mb-12">
                <h4 className="text-lg md:text-xl font-medium mb-4 text-gray-900">Placement Exploration</h4>
                <p className="text-base text-gray-600 mb-6">
                  Where should agent customization live? This was the key design debate.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">PM's Initial Proposal</p>
                    <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 mb-3">
                      <div className="text-center px-4">
                        <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Wireframe Needed</p>
                        <p className="text-gray-600 text-xs max-w-[180px]">
                          Lo-fi wireframe showing agents buried in share sheet alongside permissions. Cluttered, requires multiple taps to access.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Agents as a sharing setting—hidden behind the share button, alongside permissions.</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Shipped Design</p>
                    <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 mb-3">
                      <div className="text-center px-4">
                        <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Wireframe Needed</p>
                        <p className="text-gray-600 text-xs max-w-[180px]">
                          Lo-fi wireframe showing agent indicator in prompt bar, easily tappable. One tap to switch, visible during conversation.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Agents in the prompt bar—visible, contextual, one tap to switch.</p>
                  </div>
                </div>
              </div>

              {/* Shipped UI */}
              <div className="mb-8 md:mb-12">
                <h4 className="text-lg md:text-xl font-medium mb-4 text-gray-900">What Shipped</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center px-4">
                      <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Image Needed</p>
                      <p className="text-gray-600 text-xs max-w-[200px]">
                        Hi-fi mockup: Prompt bar with small agent avatar visible. Shows the "persistent agent indicator" integrated into the input field.
                      </p>
                    </div>
                  </div>
                  <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center px-4">
                      <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Image Needed</p>
                      <p className="text-gray-600 text-xs max-w-[200px]">
                        Hi-fi mockup: Agent switching menu expanded. Shows visual icons for each agent type (Formal, Professional, Casual, Creative, Educator) with outcome-focused descriptions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personality Spectrum */}
              <div className="mb-8 md:mb-12">
                <h4 className="text-lg md:text-xl font-medium mb-4 text-gray-900">The Personality Spectrum</h4>
                <p className="text-base text-gray-600 mb-6">
                  Freeform customization created decision paralysis. We shipped a constrained spectrum that gives users meaningful control without overwhelming them:
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600">Formal</span>
                  <span className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium text-gray-600">Professional</span>
                  <span className="px-4 py-2 bg-gray-300 rounded-full text-sm font-medium text-gray-600">Casual</span>
                  <span className="px-4 py-2 bg-gray-400 rounded-full text-sm font-medium text-white">Creative</span>
                  <span className="px-4 py-2 bg-gray-500 rounded-full text-sm font-medium text-white">Educator</span>
                </div>
                <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center px-6">
                    <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Image Needed</p>
                    <p className="text-gray-600 text-sm max-w-md">
                      Hi-fi mockup: The actual personality spectrum selector UI as it appears in the product. Show the slider or selection interface, not just pills. Include outcome-focused labels ("Clear, patient explanations" for Educator).
                    </p>
                  </div>
                </div>
              </div>

              {/* Agent Creation Flow */}
              <div className="mb-8 md:mb-12">
                <h4 className="text-lg md:text-xl font-medium mb-4 text-gray-900">Three-Field Agent Creation</h4>
                <p className="text-base text-gray-600 mb-6">
                  Mobile constraints forced clarity. We stripped agent creation down to three fields: name, personality type, optional focus area.
                </p>
                <div className="w-full aspect-[9/19] max-w-[280px] mx-auto bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center px-4">
                    <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Image Needed</p>
                    <p className="text-gray-600 text-xs max-w-[200px]">
                      Hi-fi mockup: Agent creation screen showing the three fields: (1) Name input, (2) Personality type selector, (3) Optional focus area. Clean, focused mobile form.
                    </p>
                  </div>
                </div>
              </div>

              {/* Design Decisions */}
              <div className="mb-8 md:mb-12">
                <h4 className="text-lg md:text-xl font-medium mb-4 text-gray-900">Design Decisions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Visual icons for quick switching</p>
                    <p className="text-sm text-gray-600">Users switch agents mid-conversation. Icons let them do this at a glance without reading labels.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Outcome-focused descriptions</p>
                    <p className="text-sm text-gray-600">"Clear, patient explanations" instead of "Educator personality." Users care about what they get.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Three-field creation</p>
                    <p className="text-sm text-gray-600">Name, personality type, optional focus area. Mobile constraints forced this clarity.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Persistent agent indicator</p>
                    <p className="text-sm text-gray-600">Small avatar integrated into the prompt bar. Always visible, minimal space.</p>
                  </div>
                </div>
              </div>

              {/* Iteration: Freeform vs Constrained */}
              <div className="mb-8 md:mb-12">
                <h4 className="text-lg md:text-xl font-medium mb-4 text-gray-900">Exploration: Freeform vs. Constrained</h4>
                <p className="text-base text-gray-600 mb-6">
                  Early explorations let users write freeform personality descriptions. Testing showed this created decision paralysis.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Explored: Freeform</p>
                    <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 mb-3">
                      <div className="text-center px-4">
                        <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Wireframe Needed</p>
                        <p className="text-gray-600 text-xs max-w-[180px]">
                          Lo-fi wireframe: Large text area asking "Describe how you want the AI to respond." Too open-ended, users stared at blank field.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">Abandoned: Users didn't know what to write</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Shipped: Constrained Spectrum</p>
                    <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 mb-3">
                      <div className="text-center px-4">
                        <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Wireframe Needed</p>
                        <p className="text-gray-600 text-xs max-w-[180px]">
                          Lo-fi wireframe: Personality spectrum with 5 preset options. Clear choices, easy to understand and select.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">Shipped: Meaningful control without paralysis</p>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="rounded-xl p-5 md:p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">Result</p>
                    <p className="text-lg font-semibold text-gray-900">3x increase in agent switching frequency</p>
                  </div>
                  <div className="text-sm text-gray-500 md:text-right">
                    Users engaged with agents as a core part of their workflow, not a hidden setting
                  </div>
                </div>
                {/* Metrics note */}
                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-xs text-amber-700">
                    <span className="font-medium">Add context:</span> 3x compared to what baseline? Beta users? First week vs. fourth week? What was the absolute number?
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-16 md:mb-32">
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
            <h2 className="text-xl sm:text-2xl font-medium mb-6 md:mb-8 text-gray-900">Reflection</h2>
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                This was my first 0→1 product at Adobe scale. The biggest shift was learning to ship "good enough" faster to validate assumptions, then refine based on real usage rather than speculation.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Mobile-first design was a forcing function. The 320px constraint stripped away everything non-essential from both the sharing flow and agent UI—clarity that made the desktop experience better too.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                If I did this again, I'd sync with the web team earlier on cross-platform patterns. Some mobile solutions required rework when scaling up.
              </p>
            </div>
          </div>
        </section>

        {/* Next Project Section */}
        <section className="py-12 md:py-24">
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out max-w-4xl mx-auto flex justify-end">
            <a 
              href="/aia"
              className="inline-block px-6 sm:px-8 py-2 rounded-full border-2 border-black text-base sm:text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300"
            >
              Next Project →
            </a>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section className="bg-gray-950 text-white pt-16 sm:pt-24 md:pt-32 pb-0 overflow-hidden">
        {/* Top Content Area */}
        <div className="container mx-auto px-6 sm:px-8 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            
            {/* About Column */}
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">about</p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Kasturi is a product designer<br />
                crafting AI-powered experiences<br />
                that drive measurable impact<br />
                and delight users.
              </p>
            </div>

            {/* Contact Column */}
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-100">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">contact</p>
              <a 
                href="mailto:kasturi.khanke@gmail.com"
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300 block"
              >
                kasturi.khanke@gmail.com
              </a>
            </div>

            {/* Social Column */}
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-200">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">social</p>
              <a 
                href="https://www.linkedin.com/in/kasturikhanke/"
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar - Above Name */}
        <div className="container mx-auto px-6 sm:px-8 md:px-12 max-w-6xl mt-16 sm:mt-24 md:mt-32">
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-6">
            <p className="text-sm text-gray-400">
              © 2026 Kasturi Khanke
            </p>
            <p className="text-sm text-gray-400">
              San Francisco, CA · {sfTime}
            </p>
            <p className="text-sm text-gray-400">
              Made with ♥ using Claude + Cursor
            </p>
          </div>
        </div>

        {/* Large Name - Full Width, Clipped at Bottom */}
        <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out overflow-hidden">
          <h3 
            className="text-[15vw] sm:text-[14vw] md:text-[12vw] font-bold tracking-tighter leading-none whitespace-nowrap text-center select-none translate-y-[25%]"
            style={{ color: 'white' }}
          >
            KASTURI KHANKE
          </h3>
        </div>
      </section>

      <footer className="w-full bg-gray-950">
        <BottomNav activePage={activePage} onNavClick={handleNavClick} isCaseStudy={true} />
      </footer>
    </div>
  );
};

export default PDFSpaces;
