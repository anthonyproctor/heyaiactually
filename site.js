// After Kit's double opt-in form redirects back with ?subscribed=1, show the thank-you state.
try { if (new URLSearchParams(location.search).get('subscribed') === '1') { document.getElementById('early-access').classList.add('sent'); } } catch (e) {}
