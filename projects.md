---
layout: default
title: Projects
permalink: /projects/
slug: projects
description: Selected technical projects by Jiaqi Tang, including reliable reinforcement learning under imperfect learned dynamics.
---
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Projects</p>
    <h1>Selected projects</h1>
    <p class="lead">Technical work that complements my formal research experience, with an emphasis on learning dynamics, uncertainty, and reliable decision-making.</p>
  </div>
</section>

<section class="content-section">
  <div class="container narrow">
    <article class="project-hero" id="world-model-rl">
      <p class="eyebrow">Jul 2026–Present</p>
      <h2>Reliable Reinforcement Learning under Imperfect Learned Dynamics</h2>
      <p class="project-meta">Python · PyTorch · Model-Based RL · Uncertainty Estimation</p>
      <p>
        This project studies a central failure mode of model-based reinforcement learning: a policy can exploit errors in a learned dynamics model rather than improve in the real environment. I built both the policy-learning and world-model components to measure that gap directly.
      </p>

      <div class="metrics">
        <div class="metric"><strong>−153</strong><span>Mean Pendulum-v1 return across three PPO seeds</span></div>
        <div class="metric"><strong>−1199</strong><span>Random-policy comparison return</span></div>
        <div class="metric"><strong>Ensemble</strong><span>Bootstrapped dynamics model for epistemic uncertainty</span></div>
      </div>

      <div class="prose">
        <h3>What I implemented</h3>
        <ul>
          <li>Continuous-control PPO from scratch with a tanh-Gaussian policy, generalized advantage estimation, clipped objectives, KL monitoring, and vectorized rollouts.</li>
          <li>A bootstrapped dynamics-ensemble world model with epistemic-uncertainty estimation.</li>
          <li>Evaluation of horizon-compounding model error under distribution shift.</li>
          <li>Measurements of the world-model exploitation gap and uncertainty-aware rollout termination / confidence-weighted policy updates.</li>
        </ul>
      </div>

      <div class="hero-actions">
        <a class="button primary" href="https://github.com/TanhJK728/world-model-rl" target="_blank" rel="noopener">View repository ↗</a>
        <a class="button secondary" href="{{ '/research/' | relative_url }}">Research context</a>
      </div>
    </article>
  </div>
</section>
