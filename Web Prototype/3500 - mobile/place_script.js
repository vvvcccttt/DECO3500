// 获取 like 按钮元素
const likeBtn = document.getElementById('like-btn');

// 为按钮添加点击事件监听器
likeBtn.addEventListener('click', () => {
    // 切换 active 类，实现切换颜色的效果
    likeBtn.classList.toggle('active');
});
