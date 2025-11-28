// ==================== 全局变量 ====================
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const overlay = document.getElementById('overlay');
const themeToggle = document.getElementById('themeToggle');

// ==================== 侧边栏切换 ====================
function toggleSidebar() {
    sidebar.classList.toggle('collapsed');
    localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
}

// 桌面端侧边栏切换
if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
}

// 移动端菜单切换
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.add('mobile-open');
        overlay.classList.add('active');
    });
}

// 点击遮罩层关闭侧边栏
if (overlay) {
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
    });
}

// ==================== 子菜单展开/收起 ====================
document.querySelectorAll('[data-toggle="submenu"]').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = toggle.closest('.has-submenu');
        
        // 关闭其他打开的子菜单
        document.querySelectorAll('.has-submenu').forEach(item => {
            if (item !== parent) {
                item.classList.remove('open');
            }
        });
        
        // 切换当前子菜单
        parent.classList.toggle('open');
    });
});

// ==================== 导航链接点击处理 ====================
document.querySelectorAll('.nav-link[data-page], .submenu-link[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const page = link.getAttribute('data-page');
        
        // 移除所有激活状态
        document.querySelectorAll('.nav-link, .submenu-link').forEach(l => {
            l.classList.remove('active');
        });
        
        // 添加当前激活状态
        link.classList.add('active');
        
        // 如果是子菜单项，也激活父菜单
        if (link.classList.contains('submenu-link')) {
            const parentLink = link.closest('.has-submenu').querySelector('.nav-link');
            parentLink.classList.add('active');
        }
        
        // 加载对应页面内容
        loadPageContent(page);
        
        // 移动端：关闭侧边栏
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('mobile-open');
            overlay.classList.remove('active');
        }
    });
});

// ==================== 页面内容切换 ====================
function loadPageContent(page) {
    const mainContent = document.querySelector('.main-content');
    
    // 这里可以根据不同的 page 加载不同的内容
    console.log('加载页面:', page);
    
    // 更新页面标题
    const pageTitle = document.querySelector('.top-bar h1');
    const titles = {
        'home': '欢迎来到 AI 工具导航',
        'ai-chat': 'AI 对话工具',
        'ai-image': 'AI 绘画工具',
        'ai-write': 'AI 写作工具',
        'ai-code': 'AI 编程工具',
        'ai-video': 'AI 视频工具',
        'ai-audio': 'AI 音频工具',
        'projects': '项目展示',
        'about': '关于我'
    };
    
    if (pageTitle && titles[page]) {
        pageTitle.textContent = titles[page];
    }
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== 主题切换 ====================
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// ==================== 搜索功能 ====================
const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('.search-btn');

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
}

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
}

function performSearch(query) {
    if (query.trim()) {
        console.log('搜索:', query);
        // 这里添加搜索逻辑
    }
}

// ==================== 页面加载时恢复状态 ====================
window.addEventListener('DOMContentLoaded', () => {
    // 恢复侧边栏状态
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (sidebarCollapsed) {
        sidebar.classList.add('collapsed');
    }
    
    // 恢复主题
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }
});

// ==================== 响应式处理 ====================
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
    }
});
