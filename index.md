---
layout: default
title: Jiaqi Tang
slug: home
description: Jiaqi Tang is a Mathematics and Physics undergraduate at UIUC interested in embodied AI, world models, stochastic modeling, and computational research.
---
<section class="hero">
  <div class="container hero-grid">
    <div>
      <p class="eyebrow">University of Illinois Urbana-Champaign</p>
      <h1>Jiaqi Tang</h1>
      <p class="identity">Mathematics &amp; Physics · Embodied AI &amp; World Models</p>
      <p class="lead">
        I study how mathematical structure, stochastic modeling, and learning-based methods can help intelligent systems model dynamics, reason under uncertainty, and act reliably in the physical world.
      </p>
      <div class="hero-actions">
        <a class="button primary" href="{{ '/research/' | relative_url }}">Explore research</a>
        <a class="button secondary" href="{{ '/projects/' | relative_url }}">Selected projects</a>
        <a class="button secondary" href="{{ site.cv_url | relative_url }}" target="_blank" rel="noopener">CV PDF</a>
      </div>
    </div>

    <aside class="hero-panel" aria-label="Current academic profile">
      <p class="hero-panel-label">Academic profile</p>
      <ul>
        <li><strong>B.S. Physics + B.S. Mathematics</strong>Computer Science minor · Expected May 2027</li>
        <li><strong>Research trajectory</strong>World models, stochastic systems, computational social choice</li>
        <li><strong>Current selected project</strong>Reliable reinforcement learning under imperfect learned dynamics</li>
        <li><strong>Based in</strong>Champaign, Illinois</li>
      </ul>
    </aside>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-heading">
      <div>
        <span class="section-kicker">Research direction</span>
        <h2>From mathematical structure to intelligent systems.</h2>
      </div>
      <p>
        My work crosses mathematical modeling and machine learning. I am especially interested in systems that must learn dynamics from data, quantify uncertainty, and remain reliable when their internal models are imperfect.
      </p>
    </div>

    <div class="grid-3">
      <article class="card">
        <span class="tag orange">Learning systems</span>
        <h3>Embodied AI &amp; World Models</h3>
        <p>Model-based reinforcement learning, learned dynamics, epistemic uncertainty, and robust decision-making under model error.</p>
      </article>
      <article class="card">
        <span class="tag">Mathematical foundations</span>
        <h3>Stochastic &amp; Dynamical Modeling</h3>
        <p>Markov-process models, ODE/PDE limits, stochastic dynamics, numerical methods, and uncertainty-aware optimization.</p>
      </article>
      <article class="card">
        <span class="tag">Computational systems</span>
        <h3>Social Choice &amp; Data-Driven Modeling</h3>
        <p>Large-scale simulation, preference aggregation, candidate dropout, and computational evaluation of collective decision rules.</p>
      </article>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="container">
    <div class="section-heading">
      <div>
        <span class="section-kicker">Selected work</span>
        <h2>Research and projects.</h2>
      </div>
      <p>A compact view of the work most relevant to my current research trajectory. Full details are available on the Research and Projects pages.</p>
    </div>

    <div class="feature-list">
      <article class="feature">
        <div class="feature-meta"><strong>Selected project</strong>Jul 2026–Present</div>
        <div>
          <h3>Reliable Reinforcement Learning under Imperfect Learned Dynamics</h3>
          <p>Built PPO from scratch and a bootstrapped world-model ensemble to measure model exploitation and horizon-compounding error, then evaluated uncertainty-aware safeguards for model-based policy learning.</p>
          <div class="links">
            <a href="{{ '/projects/#world-model-rl' | relative_url }}">Project details →</a>
            <a href="https://github.com/TanhJK728/world-model-rl" target="_blank" rel="noopener">GitHub repository ↗</a>
          </div>
        </div>
      </article>

      <article class="feature">
        <div class="feature-meta"><strong>Research</strong>May 2026–Present</div>
        <div>
          <h3>Computational Social Choice</h3>
          <p>Developed a GPU-accelerated simulation framework for dynamic candidate dropout across Plurality, Score, and STAR voting, calibrated to ANES 2024 data and evaluated with preference-fidelity metrics.</p>
          <div class="links"><a href="{{ '/research/#social-choice' | relative_url }}">Research details →</a></div>
        </div>
      </article>

      <article class="feature">
        <div class="feature-meta"><strong>Research</strong>Jan–May 2025</div>
        <div>
          <h3>Stochastic Models of Evolutionary Dynamics</h3>
          <p>Derived ODE/PDE systems from Markov-process and mutation dynamics, analyzed continuous-limit stability, and implemented numerical solvers to characterize steady-state convergence.</p>
          <div class="links"><a href="{{ '/research/#math-lab' | relative_url }}">Research details →</a></div>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-heading">
      <div>
        <span class="section-kicker">Experience</span>
        <h2>Research, industry, and teaching.</h2>
      </div>
      <p>My experience spans academic research, data science and quantitative modeling in industry, and undergraduate physics instruction.</p>
    </div>
    <div class="grid-3">
      <article class="card">
        <span class="tag">Research</span>
        <h3>UIUC research groups</h3>
        <p>Computational social choice, Ethereum transaction risk modeling, and stochastic evolutionary dynamics.</p>
        <a class="card-link" href="{{ '/research/' | relative_url }}">View research →</a>
      </article>
      <article class="card">
        <span class="tag">Industry</span>
        <h3>ZEISS &amp; Huafu Securities</h3>
        <p>Forecasting, sequential optimization, working-capital modeling, Bayesian state-space methods, and quantitative ML.</p>
        <a class="card-link" href="{{ '/experience/' | relative_url }}">View experience →</a>
      </article>
      <article class="card">
        <span class="tag">Teaching</span>
        <h3>Physics learning assistant</h3>
        <p>Supported PHYS 212 laboratory instruction and mentored newly admitted physics students at UIUC.</p>
        <a class="card-link" href="{{ '/experience/#teaching' | relative_url }}">View teaching →</a>
      </article>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container cta-inner">
    <div>
      <h2>Research profile and application materials</h2>
      <p>For a concise overview, see my CV. For technical context, explore Research and Projects.</p>
    </div>
    <a class="button" href="{{ '/cv/' | relative_url }}">View CV</a>
  </div>
</section>
