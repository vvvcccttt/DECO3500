// 获取 like 按钮元素
const likeBtn = document.getElementById('like-btn');

// 为按钮添加点击事件监听器
likeBtn.addEventListener('click', () => {
    // 切换 active 类，达到切换颜色的效果
    likeBtn.classList.toggle('active');
});


// 确保在页面加载时隐藏评论输入框
window.addEventListener('DOMContentLoaded', () => {
    const commentContainer = document.getElementById('comment-container');
    commentContainer.style.display = 'none'; // 确保加载时隐藏
});
// 获取评论按钮和输入框容器元素
const commentBtn = document.getElementById('comment-btn');
const commentContainer = document.getElementById('comment-container');

// 添加评论按钮点击事件监听器
commentBtn.addEventListener('click', () => {
    // 切换输入框容器的显示状态
    if (commentContainer.style.display === 'none') {
        commentContainer.style.display = 'flex'; // 显示输入框
    } else {
        commentContainer.style.display = 'none'; // 隐藏输入框
    }
});
