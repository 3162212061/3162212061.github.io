
// ==================== AI工具数据库 ====================
const aiTools = [
    {
        name: "DeepSeek",
        category: "AI 对话",
        description: "DeepSeek AI 对话助手，提供智能对话服务",
        url: "https://chat.deepseek.com/",
        logo: "https://chat.deepseek.com/favicon.ico",
        featured: true
    },
    {
        name: "DevAI",
        category: "开发工具",
        description: "内部开发 AI 助手工具",
        url: "https://devai-internal.xinhulu.com/#/",
        logo: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='%23667eea'/><text x='50%' y='50%' font-size='24' fill='white' text-anchor='middle' dy='.3em'>D</text></svg>",
        featured: true
    },
    {
        name: "年龄校验工具",
        category: "实用工具",
        description: "快速校验和计算年龄信息，支持多种日期格式",
        url: "../年龄校验2.0.html",
        logo: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='%2348bb78'/><text x='50%' y='50%' font-size='24' fill='white' text-anchor='middle' dy='.3em'>年</text></svg>",
        featured: true
    },
    {
        name: "虚拟银行卡生成",
        category: "实用工具",
        description: "生成测试用虚拟银行卡号，支持多种卡类型",
        url: "../虚拟银行卡生成.html",
        logo: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='%23f59e0b'/><text x='50%' y='50%' font-size='24' fill='white' text-anchor='middle' dy='.3em'>💳</text></svg>",
        featured: true
    }
];


// ==================== 页面加载完成后执行 ====================
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedTools();
    initSearch();
});

// ==================== 加载热门工具 ====================
function loadFeaturedTools() {
    const container = document.getElementById('featuredTools');
    if (!container) return;

    const featuredTools = aiTools.filter(tool => tool.featured);
    
    container.innerHTML = featuredTools.map(tool => `
        <div class="tool-card">
            <div class="tool-header">
                <img src="${tool.logo}" alt="${tool.name}" class="tool-logo" 
                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2250%22 height=%2250%22><rect width=%2250%22 height=%2250%22 fill=%22%23667eea%22/><text x=%2250%%22 y=%2250%%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dy=%22.3em%22>${tool.name[0]}</text></svg>'">
                <div class="tool-info">
                    <h3>${tool.name}</h3>
                    <span class="tool-category">${tool.category}</span>
                </div>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-footer">
                <a href="${tool.url}" target="_blank" class="tool-link">
                    访问工具 <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    `).join('');
}

// ==================== 搜索功能 ====================
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const keyword = e.target.value.toLowerCase().trim();
        const container = document.getElementById('featuredTools');
        
        if (keyword === '') {
            loadFeaturedTools();
            return;
        }

        const results = aiTools.filter(tool => 
            tool.name.toLowerCase().includes(keyword) ||
            tool.description.toLowerCase().includes(keyword) ||
            tool.category.toLowerCase().includes(keyword)
        );

        if (results.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #999; grid-column: 1/-1;">未找到相关工具</p>';
            return;
        }

        container.innerHTML = results.map(tool => `
            <div class="tool-card">
                <div class="tool-header">
                    <img src="${tool.logo}" alt="${tool.name}" class="tool-logo" 
                         onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2250%22 height=%2250%22><rect width=%2250%22 height=%2250%22 fill=%22%23667eea%22/><text x=%2250%%22 y=%2250%%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dy=%22.3em%22>${tool.name[0]}</text></svg>'">
                    <div class="tool-info">
                        <h3>${tool.name}</h3>
                        <span class="tool-category">${tool.category}</span>
                    </div>
                </div>
                <p class="tool-description">${tool.description}</p>
                <div class="tool-footer">
                    <a href="${tool.url}" target="_blank" class="tool-link">
                        访问工具 <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        `).join('');
    });
}
