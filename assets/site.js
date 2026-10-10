document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-menu');
  const nav = document.getElementById('site-navigation');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const active = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!active));
      nav.classList.toggle('is-open', !active);
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false'); }
    });
  }
  document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', async () => {
      const currentUrl = window.location.href;
      if (navigator.share) { try { await navigator.share({title:document.title, url:currentUrl}); return; } catch (e) { if (e.name === 'AbortError') return; } }
      if (navigator.clipboard?.writeText) { try { await navigator.clipboard.writeText(currentUrl); button.querySelector('.share-text').textContent='Copied!'; setTimeout(() => button.querySelector('.share-text').textContent='Share', 1800); return; } catch(e) {} }
      const input=document.createElement('textarea'); input.value=currentUrl;input.style.position='fixed';input.style.opacity='0';document.body.appendChild(input);input.select();try {document.execCommand('copy');button.querySelector('.share-text').textContent='Copied!';setTimeout(()=>button.querySelector('.share-text').textContent='Share', 1800)} catch(e) {} input.remove();
    });
  });
});