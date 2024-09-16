export default{
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'about',
            type: 'string',
            title: 'About'
        },
        {
            title: 'Image',
            name: 'authorimage',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
              },
              {
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
              }
            ]
          }
    ]
}