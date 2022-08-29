export default {
    name:'blogs',
    title:'Blogs',
    type: 'document',
    fields:[
        { 
            name:'title',
            title:'Title',
            type: 'string'
        },
        {
            name:'author',
            title:'Author',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },

        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'authorImg',
            title:'Author Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'link',
            title:'Link',
            type:'string'
        }
    ]
}