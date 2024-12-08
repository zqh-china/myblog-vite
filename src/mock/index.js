import Mock from 'mockjs';
// 模拟文章列表数据
const articleListData = Mock.mock({
    "list|10": [
        {
            "id": "@increment",
            "title": "@ctitle(5, 10)",
            "content": "@cparagraph(3, 5)",
            "likeCount": "@natural(0, 100)",
            "createTime": "@date('yyyy-MM-dd HH:mm:ss')"
        }
    ]
});

export default [
    {
        url: '/api/articles',
        method: 'get',
        timeout: 200,
        statusCode: 200,
        response: () => {
            return {
                "code": "200",
                "success": true,
                "message": "请求文章列表成功",
                "data": articleListData,
            }
        }
    },
    {
        url: /\/api\/article\/\d+/,
        method: 'get',
        timeout: 200,
        statusCode: 200,
        response: (options) => {
            const id = options.url.match(/\d+/)[0];
            console.log(options);
            
            const article = articleListData.list.find(article => article.id == id);
    
            return {
                "code": "200",
                "success": true,
                "message": "请求文章详情成功",
                "data": article,
            }
        }
    }
];

/*
// 模拟文章列表数据
const articleListData = Mock.mock({
    "list|10": [
        {
            "id": "@increment",
            "title": "@ctitle(5, 10)",
            "content": "@cparagraph(3, 5)",
            "likeCount": "@natural(0, 100)",
            "createTime": "@date('yyyy-MM-dd HH:mm:ss')"
        }
    ]
});

// 模拟获取文章列表接口
Mock.mock('/api/articles', 'post', () => {
    return {
        code: 200,
        data: articleListData.list
    };
});

// 模拟获取文章详情接口（根据文章id获取详情，这里简单模拟根据传入的id匹配对应文章）
Mock.mock(/\/api\/article\/\d+/, 'get', (options) => {
    const id = options.url.match(/\d+/)[0];
    const article = articleListData.list.find(article => article.id == id);
    return {
        code: 200,
        data: article
    };
});

*/