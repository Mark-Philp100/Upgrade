 // Sticky mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const mobile = document.getElementById('mobileMenu');
    hamburger.addEventListener('click',()=>{
      const isHidden = mobile.hasAttribute('hidden');
      if(isHidden) mobile.removeAttribute('hidden');
      else mobile.setAttribute('hidden','');
    });

    // Intersection Observer reveal
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
      })
    }, {threshold:.2});
    document.querySelectorAll('.hidden').forEach(el=>io.observe(el));

    // Simple tilt on hover (no external libs)
    document.querySelectorAll('[data-tilt]').forEach(card=>{
      const damp = 12; const reset = ()=>{card.style.transform='rotateX(0) rotateY(0) translateY(-6px)'}
      card.addEventListener('mousemove', (e)=>{
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `rotateX(${(-y*damp).toFixed(2)}deg) rotateY(${(x*damp).toFixed(2)}deg) translateY(-6px)`;
      });
      card.addEventListener('mouseleave', ()=>{reset()});
      card.addEventListener('mouseenter', ()=>{card.style.transition='transform .12s ease'});
    });

    // Contact form demo (shows toast)
    document.getElementById('contactForm').addEventListener('submit', function(e){
      e.preventDefault();
      const toast = document.createElement('div');
      toast.textContent = 'Message sent. Thank you!';
      toast.style.cssText = `position:fixed; inset:auto 0 20px 0;
        margin:auto; width:max-content;
        padding:12px 16px; border-radius:12px; 
        border:1px solid var(--border); 
        background:linear-gradient(135deg, rgba(6,182,212,.25), rgba(6,182,212,.12)); 
        color:#042b33; font-weight:700; box-shadow:0 14px 40px rgba(0,0,0,.35); z-index:9999;`;
      document.body.appendChild(toast);
      setTimeout(()=>toast.remove(), 2500);
      e.target.reset();
    });

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    const mP = document.getElementById("mP");
    mP.addEventListener("mouseover", function(){
        mP.style.width = "40px";
        mP.style.height = "40px"
    });
    mP.addEventListener("mouseout", function(){
        mP.style.width = "36px";
        mP.style.height = "36px"
    });

    /*const frontEnd = document.getElementById("frontEnd");
    frontEnd.addEventListener("mouseover", function(){
        frontEnd.style.color = "white";
    });
    frontEnd.addEventListener("mouseout", function(){
         frontEnd.style.color = "rgba(6,182,212,.6)";
    });*/