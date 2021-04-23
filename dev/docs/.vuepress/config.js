module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    basa: '/vuepress_tut/',
    themeConfig: {
      sidebar: [
        '/',
        '/Category_1/',
        {
          title: "Category2_nest",
          path: '/Category_2/',
          children: [
            '/Category_2/test1.md',
            '/Category_2/test2.md'
          ]
        }
      ]
    }  
  }