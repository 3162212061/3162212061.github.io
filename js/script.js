// 工具数据
const tools = [
    {
        id: 1,
        name: "JSON格式化",
        description: "美化和格式化JSON数据",
        icon: "{}",
        category: "开发工具"
    },
    {
        id: 2,
        name: "Base64编码/解码",
        description: "Base64编码和解码工具",
        icon: "🔤",
        category: "编码工具"
    },
    {
        id: 3,
        name: "时间戳转换",
        description: "时间戳与日期时间相互转换",
        icon: "⏰",
        category: "时间工具"
    },
    {
        id: 4,
        name: "颜色选择器",
        description: "RGB/HEX颜色选择和转换",
        icon: "🎨",
        category: "设计工具"
    },
    {
        id: 5,
        name: "二维码生成器",
        description: "生成自定义二维码",
        icon: "📱",
        category: "实用工具"
    },
    {
        id: 6,
        name: "Markdown编辑器",
        description: "在线Markdown编辑和预览",
        icon: "📝",
        category: "写作工具"
    }
];

// 初始化工具卡片
function initTools() {
    const toolsGrid = document.querySelector('.tools-grid');
    
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div class="tool-icon">${tool.icon}</div>
            <h4>${tool.name}</h4>
            <p>${tool.description}</p>
            <span class="tool-category">${tool.category}</span>
            <button class="tool-btn" onclick="openTool(${tool.id})">使用工具</button>
        `;
        toolsGrid.appendChild(toolCard);
    });
}

// 打开工具函数（示例）
function openTool(toolId) {
    const tool = tools.find(t => t.id === toolId);
    if (tool) {
        alert(`即将打开: ${tool.name}\n\n这是一个示例功能，你可以在这里实现具体的工具逻辑。`);
        // 这里可以添加打开具体工具页面的逻辑
        // window.location.href = `tools/tool-${toolId}.html`;
    }
}

// 搜索功能
function setupSearch() {
    // 可以添加搜索框和搜索逻辑
    console.log('搜索功能待实现');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initTools();
    setupSearch();
    
    // 添加平滑滚动
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