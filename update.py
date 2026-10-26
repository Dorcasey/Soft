p='index.html'
s=open(p,encoding='utf-8').read()

repls = [
('''          At Gent Official, we believe a man's wardrobe is his signature. We combine
          centuries-old tailoring craft with modern sourcing expertise to deliver garments,
          accessories and fabrics that speak of quiet confidence.
        </p>
        <p>
          From hand-picked premium cloths to meticulously finished cufflinks and caps,
          every piece is curated for the man who refuses to compromise on quality.''',
'''          At Gent Official, we believe a man's traditional wear is his signature. We source
          premium traditional fabrics — Cashmere, 7stars, Lana, Calany, Osha Mila, Swiss and
          Voile — in a wide range of colours, and tailor them into neat, well-finished outfits
          based on each client's request.
        </p>
        <p>
          From hand-picked cloths to meticulously finished cufflinks and trad caps, every
          piece is curated for the man who refuses to compromise on quality.'''),
('''        <ul class="check-list">
          <li>Premium &amp; rare fabric sourcing worldwide</li>
          <li>Bespoke and ready-to-wear tailoring</li>
          <li>Handcrafted accessories — cufflinks &amp; caps</li>
          <li>Personal styling consultations</li>
        </ul>''',
'''        <ul class="check-list">
          <li>Traditional fabric sourcing — Cashmere, 7stars, Lana, Calany, Osha Mila, Swiss, Voile</li>
          <li>Fabrics available in different colours</li>
          <li>Tailoring of sourced fabrics to client request</li>
          <li>Handcrafted cufflinks &amp; trad caps</li>
        </ul>'''),
('''        <p class="section-sub">Four pillars of gentlemanly refinement, under one roof.</p>''',
'''        <p class="section-sub">Traditional fabric sourcing, neat tailoring, cufflinks and trad caps — under one roof.</p>'''),
('''          <p>Curated selection of premium wool, linen, cotton, silk and rare blends from trusted mills across the globe.</p>''',
'''          <p>Premium traditional fabrics — Cashmere, 7stars, Lana, Calany, Osha Mila, Swiss and Voile — sourced in a wide range of colours.</p>'''),
('''          <p>Bespoke suits, shirts and trousers cut to your exact measurements with impeccable finishing.</p>''',
'''          <p>Sourced fabrics tailored into neat, well-finished traditional outfits based on the client's request and measurements.</p>'''),
('''          <p>Hand-finished cufflinks in precious metals, enamel and stone — the perfect finishing touch.</p>''',
'''          <p>Hand-finished cufflinks in precious metals, enamel and stone — the perfect finishing touch for traditional wear.</p>'''),
('''        <article class="service-card">
          <div class="service-icon">🧢</div>
          <h3>Caps</h3>
          <p>Refined caps and headwear crafted from premium materials for casual elegance.</p>''',
'''        <article class="service-card">
          <div class="service-icon">🧢</div>
          <h3>Trad Caps</h3>
          <p>Refined trad caps and headwear crafted from premium materials to match your traditional outfit.</p>'''),
('''        <p class="section-sub">A curated edit of our most loved items.</p>''',
'''        <p class="section-sub">Traditional fabrics, trad caps, cufflinks and tailored pieces.</p>'''),
('''        <p>Premium fabric sourcing, cufflinks, caps and neat tailoring for the modern gentleman.</p>''',
'''        <p>Premium traditional fabric sourcing — Cashmere, 7stars, Lana, Calany, Osha Mila, Swiss and Voile — plus neat tailoring, cufflinks and trad caps.</p>'''),
('''          <li><a href="#services">Caps</a></li>''',
'''          <li><a href="#services">Trad Caps</a></li>'''),
('''        <h2>The Art of Dressing Well</h2>''',
'''        <h2>Traditional Wear, Tailored to You</h2>'''),
]
for old,new in repls:
    if old in s:
        s=s.replace(old,new)
    else:
        print('NOT FOUND:', old[:70].replace(chr(10),' '))
open(p,'w',encoding='utf-8').write(s)
print('done')
