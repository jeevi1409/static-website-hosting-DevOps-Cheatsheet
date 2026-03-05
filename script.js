  function showSection(id, btn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
    if (id !== 'home') {
      document.querySelector('.hero').style.display = 'none';
    } else {
      document.querySelector('.hero').style.display = 'block';
    }
  }

  function copyCmd(text) {
    navigator.clipboard.writeText(text).then(() => {
      const toast = document.getElementById('copyToast');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1800);
    }).catch(() => {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      const toast = document.getElementById('copyToast');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1800);
    });
  }

  function handleSearch(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      document.querySelectorAll('.cmd-item, .cloud-card, .video-card, .card, .interview-card, .flow-card').forEach(el => {
        el.classList.remove('hidden');
      });
      document.querySelectorAll('.topic-list li').forEach(li => li.classList.remove('hidden'));
      return;
    }

    // Show all sections for search
    document.querySelectorAll('.section').forEach(s => s.classList.add('active'));
    document.querySelector('.hero').style.display = 'none';

    document.querySelectorAll('.cmd-item').forEach(item => {
      const text = item.textContent.toLowerCase();
      item.classList.toggle('hidden', !text.includes(q));
    });

    document.querySelectorAll('.topic-list li').forEach(li => {
      li.classList.toggle('hidden', !li.textContent.toLowerCase().includes(q));
    });

    document.querySelectorAll('.video-card').forEach(card => {
      card.classList.toggle('hidden', !card.textContent.toLowerCase().includes(q));
    });

    document.querySelectorAll('.interview-card').forEach(card => {
      card.classList.toggle('hidden', !card.textContent.toLowerCase().includes(q));
    });
  }
