export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fbd38df4e2b5236ea89c770',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hkhpaoue',
                  apiId: 'd76a10e7-2e5f-46fb-81f3-e70f9dd75baf'
                },
                {
                  buildHookId: '5fbd38e0e1cbdb336902bfc3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-11tj674a',
                  apiId: '01220b4e-8854-43cb-b83a-7bf552ba7f3a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/philiboua/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-11tj674a.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
