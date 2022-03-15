import { baseLanguage } from './localeString'; 

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeString',
    },
    {
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [{type: 'localeString'}]
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'image'}]
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    }
  ],
  
  preview: {
    select: {
      title: `name`
    }
  }
};
