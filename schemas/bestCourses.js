
export default {
    name: 'best-courses',
    type: 'document',
    title: 'Best Courses',
    fields: [
      {
  name: 'image',
  title: 'image',
  type: 'image',
  options: {
    hotspot: true, // If you want to allow hotspot for cropping
  },
},{
        name: 'description',
        type: 'string',
        title: 'Description',
      },{
        name: 'title',
        type: 'string',
        title: 'Title',
      }
      
    ]
  }