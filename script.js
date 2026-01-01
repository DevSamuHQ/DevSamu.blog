const posts = [
   { id: 8, title: "Learning English", date: "Dec 30, 2025", excerpt: " Today I started learning English.", content: "<h1>Why I Started Learning English</h1><p>If you want to be successful, you need to learn English. Today I started learning English. I made a plan with ChatGPT. It's day 1, so I don't fell much progress yet, but Iwill keep learning.</p>" },
   { id: 7, title: "v 0.1", date: "Dec 30, 2025", excerpt: "This is the first version of my blog website.", content: "<h1>Version 0.1 Is Here!</h1><p>I created a basic blog website. This is the first version. It's not professional yet, but i'm happy with it. I will post new blogs every week. </p>" },
   { id: 6, title: "Why I code every day", date: "Jan 1, 2026", excerpt: "Why I code every day? Here is the answer", content: "<h1>Why I want to code every day</h1><p>I code every day because it's really important to me. Daily coding is great practice, and this is how real development happens. If you want to become a succesful developer, you need to spend a lot od hours coding. About 1,5 years ago, I started coding in Python. I wrote very basic programs, like asking 'What is your name?' and then printing 'Hello  (your name). I also made a simple calculator. At that time, I thought coding was borint, so I  quit. After half year, I decided to start web development. In the first two months, I took learned basic HTML and CSS. After those two months, I took a break. In July, I  came back. And now, here we are. And Happy New Year    </p>" },
    // { id: 5, title: "AI in Software Dev", date: "Nov 02, 2025", excerpt: "Leveraging LLMs to boost your daily coding productivity.", content: "<h1>AI Tools</h1><p>Review of Copilot and Cursor...</p>" },
    // { id: 4, title: "CSS Subgrid Guide", date: "Oct 20, 2025", excerpt: "Aligning complex layouts across nested components perfectly.", content: "<h1>CSS Subgrid</h1><p>The layout revolution...</p>" }
];

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.getElementById('mobileMenu').classList.remove('active');
    document.getElementById('hamburgerIcon').classList.remove('open');
    window.scrollTo(0, 0);
}

function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
    document.getElementById('hamburgerIcon').classList.toggle('open');
}

function navTo(pageId) { toggleMenu(); showPage(pageId); }

function toggleTheme() {
    const h = document.documentElement;
    const isDark = h.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    h.setAttribute('data-theme', newTheme);
    
    // Csak az ikont állítjuk be, szöveg nélkül
    const icon = isDark ? '🌙' : '☀️';
    document.getElementById('desktopThemeBtn').textContent = icon;
    document.getElementById('mobileThemeBtn').textContent = icon;
}

function render() {
    const card = p => `
        <div class="blog-card" onclick="openPost(${p.id})">
            <span>${p.date}</span>
            <h3>${p.title}</h3>
            <p>${p.excerpt}</p>
        </div>`;
    document.getElementById('latest-posts').innerHTML = posts.slice(0, 2).map(card).join('');
    document.getElementById('grid-posts').innerHTML = posts.map(card).join('');
}

function openPost(id) {
    const p = posts.find(x => x.id === id);
    document.getElementById('post-content').innerHTML = `
        <span style="color:var(--text-muted)">${p.date}</span>
        <div style="margin-top:20px">${p.content}</div>`;
    showPage('single-post');
}


render();
