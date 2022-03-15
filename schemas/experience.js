import { baseLanguage } from './localeString'; 

export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'job',
      title: 'Job',
      type: 'localeString',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'from',
      title: 'From',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'to',
      title: 'To',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'functions',
      title: 'Functions',
      type: 'array',
      of: [{type: 'localeString'}]
    },
    {
      name: 'logo',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  ordering:[
    {
      title: 'Date From, New',
      name: 'DateFromDesc',
      by: [
        {field: 'releaseDate', direction: 'desc'}
      ]
    }
  ],
  preview: {
    select: {
      title: `job.${baseLanguage.id}`
    }
  }
};
