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

  // Scroll to top before browser paints
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="min-h-screen bg-white text-gray-950 font-sans">
      <header className={`sticky top-0 bg-white z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
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
          <h1 className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out text-2xl sm:text-3xl md:text-4xl font-medium mb-3 md:mb-4 leading-tight max-w-3xl text-gray-800">
            PDF Spaces: Designing Collaborative AI for Knowledge Workers
          </h1>
          <p className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-100 text-base sm:text-lg md:text-xl font-normal leading mb-6 md:mb-8 max-w-2xl text-gray-700">
            How I designed permission systems and custom AI agents for Adobe's NotebookLM competitor, shipped in 9 months.
          </p>
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-200 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-sm text-gray-500 mb-6 md:mb-8">
            <span>Product Design</span>
            <span className="hidden sm:inline text-gray-300">·</span>
            <span>Dec '24 – Mar '25</span>
            <span className="hidden sm:inline text-gray-300">·</span>
            <span>Mobile Design Lead</span>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="mb-12 md:mb-24">
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8 md:mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Impact</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">What shipped</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out relative bg-white border-2 border-gray-100 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-sm overflow-hidden">
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-6 text-gray-800">50,000+</h3>
                <p className="text-base sm:text-lg text-gray-700">Beta users launched in December 2024 with multi-user collaboration and custom AI agents</p>
              </div>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out relative bg-white p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl border-2 border-gray-100 shadow-sm overflow-hidden">
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-6 text-gray-800">8+</h3>
                <p className="text-base sm:text-lg text-gray-700">Designers adopted the cross-platform collaboration component library for mobile, desktop, and web</p>
              </div>
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section className="mb-12 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-6 md:mb-8">
            <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
              <div className="max-w-md">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 md:mb-12 text-gray-800">Context</h2>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
                <p className="text-base sm:text-lg text-gray-700">
                  Adobe Acrobat is synonymous with PDFs, but it's a single-document tool. Knowledge workers juggle dozens of files—lawyers with case files, researchers with studies, teams with project documents. We built PDF Spaces as Acrobat's answer to NotebookLM, with two key differentiators:
                </p>
              </div>

              <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Multi-user collaboration</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                    <span>Granular permissions for workspace collaboration</span>
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                    <span>My focus: Designing the sharing and permission systems</span>
                  </li>
                </ul>
              </div>

              <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Customizable AI agents</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                    <span>AI that adapts to different working styles</span>
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                    <span>My focus: Designing the agent personality and creation flow</span>
                  </li>
                </ul>
              </div>

              <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Validation</h3>
                <p className="text-base sm:text-lg text-gray-600">
                  User research with knowledge workers revealed they don't work with files in isolation. Early prototype testing with 50 enterprise teams confirmed users wanted AI that understood document relationships and could adapt its communication style to different contexts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="mb-12 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-6 md:mb-8">
            <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
              <div className="max-w-md">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 md:mb-12 text-gray-800">Insights</h2>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Collaboration friction</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                    <span>Existing share patterns were binary (view/no view)</span>
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                    <span>Users spent too much time deciding "what level of access?"</span>
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                    <span>Permission models optimized for single documents, not workspaces</span>
                  </li>
                </ul>
              </div>

              <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">AI personality mismatch</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                    <span>Generic AI responses didn't match specialized work contexts</span>
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                    <span>Users wanted AI that "understood" their domain</span>
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                    <span>One-size-fits-all tone felt impersonal in collaborative spaces</span>
                  </li>
                </ul>
              </div>

              <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Cross-platform complexity</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                    <span>Mobile constraints (320px width) vs. desktop affordances</span>
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                    <span>Different interaction patterns across platforms</span>
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                    <span>No unified collaboration component system existed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Goals Section */}
        <section className="mb-12 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-6 md:mb-8">
            <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
              <div className="max-w-md">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 md:mb-12 text-gray-800">Design goals</h2>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Permission as invitation</h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Frame access as roles ("what are you doing here?") not restrictions ("what can't you do?")
                </p>
              </div>

              <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Adaptable AI personalities</h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Let users customize how AI communicates, not just what it knows
                </p>
              </div>

              <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Context-driven responsive design</h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Design for platform strengths, not just screen sizes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HMW Statement */}
        <section className="mb-12 md:mb-24">
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out relative bg-white border-2 border-gray-100 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-sm overflow-hidden">
            <h2 className="text-center text-base sm:text-lg md:text-2xl font-medium text-gray-800">
              How might we design AI collaboration that respects both team dynamics and individual working styles?
            </h2>
          </div>
        </section>

        {/* PART 1: PERMISSIONS */}
        <section className="mb-12 md:mb-24">
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8 md:mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Part 1</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">Rethinking Permissions for AI Workspaces</h2>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out space-y-6 text-base sm:text-lg text-gray-700 mb-8">
            <p>
              <span className="font-semibold text-gray-900">The problem:</span> Existing share sheets were binary (view/no view), designed for document sharing not workspace collaboration.
            </p>
            <p>
              <span className="font-semibold text-gray-900">The reframe:</span> Instead of "what restrictions apply?", I designed around "what role are you playing?"
            </p>
          </div>

          {/* Three Permission Roles */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">The three permission roles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="p-6 rounded-2xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Contributor</h4>
                <p className="text-sm text-gray-500 mb-2">"We're working together"</p>
                <p className="text-sm text-gray-600">Add/edit documents, unrestricted chat</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Reviewer</h4>
                <p className="text-sm text-gray-500 mb-2">"I'm giving feedback"</p>
                <p className="text-sm text-gray-600">Comment, suggest, annotate</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Viewer</h4>
                <p className="text-sm text-gray-500 mb-2">"I'm learning from this"</p>
                <p className="text-sm text-gray-600">Read, chat for understanding</p>
              </div>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Why this mattered</h3>
            <p className="text-base sm:text-lg text-gray-700">
              In user feedback sessions, participants responded positively to role-based framing. They found it more intuitive than technical permission labels like "read/write/admin." The language shift from permissions to roles changed how people thought about collaboration.
            </p>
          </div>

          {/* Mobile-first constraint */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">Mobile-first constraint as design advantage</h3>
            <div className="space-y-4 text-base sm:text-lg text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Challenge:</span> 320px screen width couldn't show all three permission options with full descriptions without overwhelming the interface.
              </p>
              <p>
                <span className="font-semibold text-gray-900">Solution:</span> Smart defaults based on collaboration context:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-medium">First person added to a Space</span> → Contributor (assumes collaborative intent)</li>
                <li><span className="font-medium">Adding to large Spaces (10+ people)</span> → Viewer (prevents chaos)</li>
                <li><span className="font-medium">External email domain</span> → Reviewer (safe middle ground)</li>
              </ul>
              <p className="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-4">
                <span className="font-semibold text-gray-900">Design thinking:</span> Defaults aren't just convenience—they're teaching tools. By surfacing intelligent suggestions, we educated users about collaboration patterns without requiring documentation or tutorials.
              </p>
            </div>
          </div>

          {/* Share flow simplification */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">Share flow simplification</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              I simplified the share experience from 5 steps to 2 primary actions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Before: 5 steps</h4>
                <ol className="text-sm text-gray-600 space-y-1 list-decimal pl-4">
                  <li>Select recipient</li>
                  <li>Choose permission</li>
                  <li>Add message</li>
                  <li>Confirm access</li>
                  <li>Send notification</li>
                </ol>
              </div>
              <div className="p-6 rounded-2xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">After: 2 actions</h4>
                <ol className="text-sm text-gray-600 space-y-1 list-decimal pl-4">
                  <li>Select recipient</li>
                  <li>Confirm (with smart default permission)</li>
                </ol>
                <p className="text-xs text-gray-500 mt-3">Advanced options remained accessible but didn't block the primary flow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PART 2: CUSTOM AGENTS */}
        <section className="mb-12 md:mb-24">
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8 md:mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Part 2</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">Designing AI Agents That Adapt</h2>
          </div>

          {/* The pivot */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">The pivot that changed everything</h3>
            <div className="space-y-4 text-base sm:text-lg text-gray-700">
              <p><span className="font-semibold">Original design:</span> Agents lived in the share sheet (you'd create an agent, then share it).</p>
              <p><span className="font-semibold">Early beta feedback:</span> This felt backwards. People wanted to choose how they interacted with their Space, not share a fixed AI personality.</p>
              <p className="bg-white p-4 rounded-xl border border-gray-200">
                <span className="font-semibold text-gray-900">The insight:</span> Agents aren't shared objects. Agents are interaction modes—like switching between formal and casual conversation styles.
              </p>
              <p><span className="font-semibold">Redesign:</span> Moved agents to main Space interface. Made them personal and contextual.</p>
            </div>
          </div>

          {/* Agent personality spectrum */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">The agent personality spectrum</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Instead of freeform customization (which created decision paralysis), I designed a spectrum of personality types:
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Formal</span>
              <span className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium text-gray-700">Professional</span>
              <span className="px-4 py-2 bg-gray-300 rounded-full text-sm font-medium text-gray-700">Casual</span>
              <span className="px-4 py-2 bg-gray-400 rounded-full text-sm font-medium text-white">Creative</span>
              <span className="px-4 py-2 bg-gray-500 rounded-full text-sm font-medium text-white">Educator</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="bg-gray-50 p-3 rounded-xl text-center">
                <p className="text-xs text-gray-500">Legal analysis, compliance review</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl text-center">
                <p className="text-xs text-gray-500">Business communication, reports</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl text-center">
                <p className="text-xs text-gray-500">Brainstorming, quick questions</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl text-center">
                <p className="text-xs text-gray-500">Ideation, storytelling</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl text-center">
                <p className="text-xs text-gray-500">Patient explanations, learning</p>
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mt-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <span className="font-semibold">Why a spectrum?</span> User research showed people understood personality as a continuum, not discrete categories. The spectrum gave structure while allowing nuance.
            </p>
          </div>

          {/* Mobile agent design */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">Mobile agent design</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6">Key design decisions:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Visual icons for quick recognition</h4>
                  <p className="text-sm text-gray-600">Not just text labels—users could switch agents at a glance</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Outcome-focused descriptions</h4>
                  <p className="text-sm text-gray-600">"Clear, patient explanations" vs. "Educator personality" — Users care about what they get, not what it is</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Persistent current agent indicator</h4>
                  <p className="text-sm text-gray-600">Chat header always shows active agent so users know who they're talking to</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Minimal creation flow</h4>
                  <p className="text-sm text-gray-600">3 fields maximum: name, personality type, optional focus area</p>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Design constraint as clarity</h3>
            <p className="text-base sm:text-lg text-gray-700">
              On mobile, customization options had to be radically simplified. I focused on the minimum viable inputs that would create meaningfully different agent behaviors. This constraint actually improved the desktop experience too—we realized users didn't want 15 customization knobs, they wanted 3 meaningful choices.
            </p>
          </div>
        </section>

        {/* PART 3: MOBILE INTERACTION DESIGN */}
        <section className="mb-12 md:mb-24">
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8 md:mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Part 3</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">Designing the AI Prompt Experience</h2>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out space-y-6 text-base sm:text-lg text-gray-700 mb-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800">The challenge mobile revealed</h3>
            <p>
              Once agents lived in the main interface, I faced a new problem: how do users know which agent they're talking to while typing?
            </p>
            <p>
              On desktop, there's room for a persistent sidebar showing the active agent. On mobile's 320px width, every pixel matters.
            </p>
          </div>

          {/* Prompt bar redesign iterations */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">The prompt bar redesign</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Initial design</h4>
                <p className="text-sm text-gray-600 mb-2">Standard chat input with agent selector above</p>
                <p className="text-sm text-gray-500"><span className="font-medium text-gray-700">Problem:</span> Agent selector felt disconnected. Users forgot which agent was active.</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Iteration 1</h4>
                <p className="text-sm text-gray-600 mb-2">Agent name inside the prompt bar placeholder — "Ask your Legal Agent..."</p>
                <p className="text-sm text-gray-500"><span className="font-medium text-gray-700">Problem:</span> Placeholder text disappears when typing. Lost context mid-conversation.</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Iteration 2</h4>
                <p className="text-sm text-gray-600 mb-2">Agent pill/chip above the input field</p>
                <p className="text-sm text-gray-500"><span className="font-medium text-gray-700">Problem:</span> Took up valuable vertical space. Keyboard + chip pushed conversation out of view.</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-900 bg-gray-50">
                <h4 className="font-semibold text-gray-900 mb-2">Final solution</h4>
                <p className="text-sm text-gray-600 mb-2">Agent indicator integrated into prompt bar chrome — small avatar + name to the left of input</p>
                <p className="text-sm text-gray-900 font-medium mt-2">This worked: Always visible, minimal space, clear context</p>
              </div>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Why this mattered</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              The prompt bar is the primary interaction point. If users don't know which agent they're talking to, the whole customization feature becomes meaningless.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              In beta testing, users with the final design <span className="font-semibold">switched between agents 3x more frequently</span> than those with earlier versions. The persistent visual reminder made agent personalities feel like a real part of the conversation, not just a setting they configured once.
            </p>
          </div>

          {/* Mobile-specific interaction patterns */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">Mobile-specific interaction patterns</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6">Beyond the prompt bar, I designed several mobile-first patterns:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Quick agent switching</h4>
                <p className="text-sm text-gray-600">Tap agent indicator → Bottom sheet with agent list</p>
                <p className="text-xs text-gray-500 mt-2">No need to leave the conversation or navigate menus</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Suggested prompts</h4>
                <p className="text-sm text-gray-600 mb-2">Long-press prompt bar → Context-specific suggestions based on active agent</p>
                <p className="text-xs text-gray-500">Legal Agent: "Summarize key terms" | "Find precedents"</p>
                <p className="text-xs text-gray-500">Creative Agent: "Generate ideas" | "Explore alternatives"</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Agent preview</h4>
                <p className="text-sm text-gray-600">Hold on agent in selector → Peek at personality and focus area</p>
                <p className="text-xs text-gray-500 mt-2">Quick reference without committing to a switch</p>
              </div>
            </div>
          </div>

          {/* Design constraint as advantage */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out bg-gray-900 p-6 sm:p-8 rounded-2xl mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">Design constraint as advantage</h3>
            <p className="text-base sm:text-lg text-gray-400 mb-4">
              <span className="font-semibold text-white">The constraint:</span> Mobile screens force you to show less.
            </p>
            <p className="text-base sm:text-lg text-gray-400 mb-4">
              <span className="font-semibold text-white">The advantage:</span> By designing for the most constrained platform first, I was forced to identify what was truly essential. The mobile agent indicator became the pattern we used everywhere—even on desktop where we had more room.
            </p>
            <p className="text-base sm:text-lg text-white font-medium">
              The principle: Good mobile design isn't desktop design shrunk down. It's a forcing function for clarity.
            </p>
          </div>

          {/* Text input vs. quick actions */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">Text input vs. quick actions</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Another mobile challenge: typing on phones is slower and more error-prone than on desktop.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              <span className="font-semibold">Design decision:</span> I added quick action buttons that appear contextually:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-sm font-medium text-gray-800 mb-2">When viewing a document:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-xs border border-gray-200">Summarize</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs border border-gray-200">Ask a question</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs border border-gray-200">Find key points</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-sm font-medium text-gray-800 mb-2">When agent responds:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-xs border border-gray-200">Tell me more</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs border border-gray-200">Simplify this</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs border border-gray-200">Show sources</span>
                </div>
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
              These weren't just shortcuts—they were teaching tools. By showing contextual quick actions, users learned what agents could do without reading documentation. In beta feedback, users reported that quick actions helped them discover capabilities they didn't know existed.
            </p>
          </div>

          {/* The balance */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">The balance: Speed vs. customization</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              Mobile design is always about tradeoffs. I had to balance:
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6 text-center font-medium">
              Fast interaction (tap and go) <span className="text-gray-400">vs.</span> Customization depth (configure your agent)
            </p>
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100">
              <p className="text-base sm:text-lg text-gray-700 mb-4"><span className="font-semibold">My approach:</span></p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700">
                <li>Make the default path fast (quick actions, smart suggestions)</li>
                <li>Make customization accessible but not mandatory (long-press reveals options)</li>
                <li>Progressive disclosure (show advanced features after users master basics)</li>
              </ul>
              <p className="text-base sm:text-lg text-gray-700 mt-4">
                <span className="font-semibold">Result:</span> Users could chat immediately with a default agent, then gradually customize as they understood the system better.
              </p>
            </div>
          </div>
        </section>

        {/* AI-FIRST PRINCIPLES */}
        <section className="mb-12 md:mb-24">
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8 md:mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">AI-First Principles</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">What I learned designing for AI collaboration</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out group relative bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gray-400 text-sm font-medium">1</span>
                <h3 className="text-lg font-semibold text-gray-900">Default intelligence, intentional control</h3>
              </div>
              <p className="text-base text-gray-600">
                AI should anticipate, humans decide. Smart defaults reduced friction while users retained override capability.
              </p>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out group relative bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gray-400 text-sm font-medium">2</span>
                <h3 className="text-lg font-semibold text-gray-900">Explainable AI through design</h3>
              </div>
              <p className="text-base text-gray-600 mb-3">Every AI response showed:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Which agent responded (icon + name in chat header)</li>
                <li>• Sources used (tap to see document excerpts)</li>
                <li>• Confidence indicators for factual claims</li>
              </ul>
              <p className="text-sm text-gray-500 mt-3 italic">Trust through transparency without cluttering the interface.</p>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out group relative bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gray-400 text-sm font-medium">3</span>
                <h3 className="text-lg font-semibold text-gray-900">Progressive disclosure of capabilities</h3>
              </div>
              <p className="text-base text-gray-600 mb-3">Don't overwhelm users upfront. Reveal power features through scaffolded discovery:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• First visit: Just "Chat" and "Upload"</li>
                <li>• After first chat: Introduce custom agents</li>
                <li>• After 5+ chats: Show advanced features</li>
              </ul>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out group relative bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gray-400 text-sm font-medium">4</span>
                <h3 className="text-lg font-semibold text-gray-900">Personality as interface</h3>
              </div>
              <p className="text-base text-gray-600">
                AI agents aren't just features—they're how users shape their relationship with the tool. The agent selector became the primary customization surface, more important than traditional settings.
              </p>
            </div>
          </div>
        </section>

        {/* LEARNINGS */}
        <section className="mb-12 md:mb-24">
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8 md:mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Learnings</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">What I learned</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out group relative bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 ">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">0→1 products require different design thinking</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Early stage isn't about polish, it's about validation. I shipped "good enough" designs faster to learn what mattered, then refined based on real usage.
              </p>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out group relative bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 ">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Mobile constraints drive better design</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                The prompt bar problem forced me to strip away everything non-essential. That clarity made the desktop experience better too. Constraints force priorities.
              </p>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out group relative bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 ">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Interaction design is product design</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                The prompt bar iterations weren't just UI polish—they fundamentally changed how users understood agents. The right interaction pattern made the feature comprehensible.
              </p>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out group relative bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 ">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Design for the most constrained platform first</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                By solving for mobile's limitations, I created patterns that worked everywhere. Starting with desktop would have produced designs that didn't translate down.
              </p>
            </div>
          </div>
        </section>

        {/* REFLECTION */}
        <section className="mb-16 md:mb-32">
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8 md:mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Reflection</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">Impact & what's next</h2>
          </div>

          {/* What shipped */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">What shipped</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-base sm:text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">–</span>
                  Permission-based sharing system (3 role levels)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">–</span>
                  Mobile share flow with contextual defaults
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">–</span>
                  Custom agent selector and creation flow
                </li>
              </ul>
              <ul className="space-y-2 text-base sm:text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">–</span>
                  Agent personality framework (5-point spectrum)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">–</span>
                  Mobile-optimized prompt bar with persistent agent context
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">–</span>
                  Contextual quick actions for mobile chat
                </li>
              </ul>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mt-6 font-medium">
              Launched December 2024 to 50,000+ beta users
            </p>
          </div>

          {/* What I'm proudest of */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What I'm proudest of</h3>
            <p className="text-base sm:text-lg text-gray-700">
              The prompt bar iterations taught me that interaction design is product strategy. The final design didn't just look better—it changed how users understood what agents were. Small UI decisions compound into big product outcomes.
            </p>
          </div>

          {/* Where I'd invest next */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">Where I'd invest next</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Agent memory across sessions</h4>
                <p className="text-sm text-gray-600">Right now, agents start fresh each time. What if they remembered context and adapted over time?</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Collaborative agent tuning</h4>
                <p className="text-sm text-gray-600">Multiple users could contribute examples to refine a shared agent's behavior together.</p>
              </div>
            </div>
          </div>

          {/* My role */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">My role</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">What I owned:</h4>
                <ul className="space-y-2 text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">–</span>
                    Led mobile design for permissions and agent systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">–</span>
                    Designed agent personality framework and creation flow
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">–</span>
                    Iterated prompt bar experience through 4+ versions based on beta feedback
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">–</span>
                    Created mobile-first interaction patterns (quick actions, agent switching)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Who I collaborated with:</h4>
                <ul className="space-y-2 text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">–</span>
                    4 Product Managers: Defined collaboration and agent strategy
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">–</span>
                    12 Engineers: Worked through technical constraints of agent indicator
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">–</span>
                    Design team: Shared mobile patterns that influenced desktop designs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">–</span>
                    ML team: Shaped agent behavior framework and suggested prompts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Next Project Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out max-w-4xl mx-auto flex justify-end">
            <a
              href="/aia"
              className="inline-block px-6 sm:px-8 py-2 rounded-full border-2 border-black text-base sm:text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300"
            >
              Next Project →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-950 text-white py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out text-2xl sm:text-3xl md:text-5xl lg:text-6xl pl-0 sm:pl-6 md:pl-12 mb-4 max-w-2xl font-normal">
            Want to chat more about this case study?
          </h2>
          <p className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500 pl-0 sm:pl-6 md:pl-12 font-normal">
            <a
              href="https://calendly.com/kasturi-khanke/30min?month=2024-11"
              className="text-xl sm:text-2xl md:text-3xl transition-colors duration-300 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </a>
          </p>
          <p className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out text-xs sm:text-sm text-gray-500 pl-0 sm:pl-6 md:pl-12 mt-4 md:mt-8">
            Made with love using Claude AI
          </p>
        </div>
      </section>

      <footer className="w-full bg-transparent pb-8">
        <BottomNav activePage={activePage} onNavClick={handleNavClick} isCaseStudy={true} />
      </footer>
    </div>
  );
};

export default PDFSpaces;
