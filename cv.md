---
layout: default
title: CV
permalink: /cv/
slug: cv
description: Curriculum vitae of Jiaqi Tang.
---
<section class="page-hero compact">
  <div class="container">
    <p class="eyebrow">Curriculum Vitae</p>
    <h1>CV</h1>
    <p class="lead">The PDF below is the same current CV used as the factual source for this website rebuild.</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="cv-actions">
      <a class="button primary" href="{{ site.cv_url | relative_url }}" target="_blank" rel="noopener">Open PDF</a>
      <a class="button secondary" href="{{ site.cv_url | relative_url }}" download>Download PDF</a>
    </div>
    <object class="cv-frame" data="{{ site.cv_url | relative_url }}" type="application/pdf">
      <p>Your browser cannot display the PDF inline. <a href="{{ site.cv_url | relative_url }}">Open the CV PDF</a>.</p>
    </object>
  </div>
</section>
