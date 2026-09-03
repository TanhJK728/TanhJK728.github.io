---
layout: default
title: Research
permalink: /research/
slug: research
description: Research experience of Jiaqi Tang in computational social choice, Ethereum transaction risk modeling, and stochastic evolutionary dynamics.
---
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Research</p>
    <h1>Research experience</h1>
    <p class="lead">My research has focused on computational modeling of complex systems: collective decision rules, adversarial transaction dynamics, and stochastic evolutionary processes.</p>
  </div>
</section>

<section class="content-section">
  <div class="container narrow">
    <div class="timeline">
      <article class="timeline-item" id="social-choice">
        <div class="timeline-head">
          <h2>Computational Social Choice Research</h2>
          <span class="timeline-date">May 2026–Present</span>
        </div>
        <p class="timeline-role">Co-author &amp; Undergraduate Researcher · Advisor: Prof. Igor Mineyev · UIUC</p>
        <ul>
          <li>Developed a unified computational framework for dynamic candidate dropout across Plurality, Score, and STAR voting.</li>
          <li>Built a GPU-accelerated simulation calibrated to ANES 2024 data, generating one million Monte Carlo voter draws across seven candidates and 200 voting-elimination rounds.</li>
          <li>Designed four metrics for welfare and preference fidelity and optimized dropout parameters <em>α</em> and <em>γ</em> through adaptive black-box optimization and robustness analysis.</li>
          <li>Under the evaluated dropout settings, found that Score and STAR preserved more aggregate preference information than Plurality.</li>
        </ul>
      </article>

      <article class="timeline-item" id="risk-lab">
        <div class="timeline-head">
          <h2>Illinois Risk Lab</h2>
          <span class="timeline-date">Jan–May 2026</span>
        </div>
        <p class="timeline-role">Undergraduate Researcher · Advisor: Prof. Xiaochen Jing · UIUC</p>
        <ul>
          <li>Studied Ethereum MEV sandwich attacks by reconstructing raw on-chain transactions and DEX swap events in Google BigQuery and building a local sandwich-detection pipeline.</li>
          <li>Formulated victim-conditional risk prediction from pre-trade local context and developed XGBoost and Transformer-based models.</li>
          <li>Validated detected transactions against Dune Analytics-curated sandwich tables under strict and relaxed matching criteria.</li>
          <li>Used relative trade-size features, gas-vulnerability proxies, and counterfactual probing to investigate attack triggers and mitigation strategies.</li>
        </ul>
      </article>

      <article class="timeline-item" id="math-lab">
        <div class="timeline-head">
          <h2>Illinois Mathematics Lab</h2>
          <span class="timeline-date">Jan–May 2025</span>
        </div>
        <p class="timeline-role">Undergraduate Researcher · Advisor: Prof. Daniel Cooney · UIUC</p>
        <ul>
          <li>Worked on stochastic models of cross-scale evolutionary dynamics.</li>
          <li>Derived ODE/PDE systems from Markov-process and mutation dynamics and analyzed continuous-limit stability.</li>
          <li>Implemented Euler and RK4 solvers to characterize steady-state convergence.</li>
        </ul>
      </article>
    </div>

    <div class="project-hero" style="margin-top:56px;">
      <p class="eyebrow">Related current project</p>
      <h2>Reliable Reinforcement Learning under Imperfect Learned Dynamics</h2>
      <p>This work is presented as a selected project rather than formal research experience. It is the clearest current bridge between my mathematical background and my interest in world models and embodied intelligence.</p>
      <div class="hero-actions">
        <a class="button primary" href="{{ '/projects/#world-model-rl' | relative_url }}">View project</a>
        <a class="button secondary" href="https://github.com/TanhJK728/world-model-rl" target="_blank" rel="noopener">GitHub ↗</a>
      </div>
    </div>
  </div>
</section>
