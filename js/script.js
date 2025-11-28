// 工具数据
const tools = [
    {
        id: 1,
        name: "身份信息生成器",
        description: "生成虚拟身份信息，支持多种证件类型",
        icon: "🎭",
        category: "开发工具",
        file: "tools/证件号生成器.html"
    },
    {
        id: 2,
        name: "银行卡工具合集",
        description: "LUHN算法验证与虚拟银行卡生成",
        icon: "🏦",
        category: "金融工具",
        file: "tools/虚拟银行卡生成.html"
    },
    {
        id: 3,
        name: "保险年龄校验工具",
        description: "专业的投保年龄计算与校验系统",
        icon: "🛡️",
        category: "保险工具",
        file: "tools/年龄校验2.0.html"
    }
];

// 初始化工具卡片（用于首页展示）
function initTools() {
    const toolsGrid = document.querySelector('.tools-grid');
    if (!toolsGrid) return;
    
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div class="tool-icon">${tool.icon}</div>
            <h4>${tool.name}</h4>
            <p>${tool.description}</p>
            <span class="tool-category">${tool.category}</span>
            <button class="tool-btn" onclick="openTool('${tool.file}')">使用工具</button>
        `;
        toolsGrid.appendChild(toolCard);
    });
}

// 打开工具函数
function openTool(toolFile) {
    // 这里可以添加打开具体工具页面的逻辑
    console.log(`打开工具: ${toolFile}`);
    // 在实际实现中，这里会导航到对应的工具页面
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initTools();
    
    // 添加平滑滚动（用于导航链接）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});