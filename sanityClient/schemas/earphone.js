export default {
    name: 'earphone',
    title: 'Earphone',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'detail',
            title: 'Detail',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'feature1',
            title: 'Feature1',
            type: 'string',
        },
        {
            name: 'feature2',
            title: 'Feature2',
            type: 'string',
        },
        {
            name: 'box',
            title: 'Box',
            type: 'array',
            of: [{ type: 'string'}],
        }
    ]
}