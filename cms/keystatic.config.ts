import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'content/projects/*',
      format: {
        contentField: 'story',
      },
      schema: {
        title: fields.slug({
          name: {
            label: 'Project title',
            validation: { isRequired: true },
          },
          slug: {
            label: 'URL slug',
            description: 'Used in the project URL. Avoid changing after publishing.',
          },
        }),
        caption: fields.text({
          label: 'Caption',
          validation: { isRequired: true },
        }),
        image: fields.image({
          label: 'Cover image',
          description: 'Optional. If not set, the first gallery image is used as cover.',
          directory: 'public/projects',
          publicPath: '/projects/',
        }),
        gallery: fields.array(
          fields.image({
            label: 'Gallery image',
            directory: 'public/projects',
            publicPath: '/projects/',
          }),
          {
            label: 'Gallery images',
            itemLabel: (props) => {
              const val = props.value;
              if (val && typeof val === 'object' && 'filename' in val) {
                return (val as { filename: string }).filename;
              }
              return 'Gallery image';
            },
          }
        ),
        tags: fields.array(
          fields.text({
            label: 'Tag',
          }),
          {
            label: 'Tags',
            itemLabel: (props) => props.value || 'Tag',
          }
        ),
        testimonial: fields.object(
          {
            quote: fields.text({
              label: 'Quote',
              multiline: true,
            }),
            author: fields.text({
              label: 'Author',
            }),
            position: fields.text({
              label: 'Position',
            }),
          },
          {
            label: 'Testimonial',
          }
        ),
        order: fields.integer({
          label: 'Display order',
          description: 'Lower numbers appear earlier. Leave blank to sort after ordered projects.',
        }),
        story: fields.markdoc({
          label: 'Project story',
          extension: 'md',
          options: {
            image: {
              directory: 'public/projects/story-images',
              publicPath: '/projects/story-images/',
            },
          },
        }),
      },
    }),
    media: collection({
      label: 'Media',
      slugField: 'title',
      path: 'content/media/*',
      schema: {
        title: fields.slug({
          name: {
            label: 'Headline',
            description: 'Title shown on the media card.',
            validation: { isRequired: true },
          },
          slug: {
            label: 'URL slug',
            description: 'Used as the filename. Avoid changing after publishing.',
          },
        }),
        publication: fields.text({
          label: 'Publication',
          description: 'Name of the outlet, e.g. CBC News.',
          validation: { isRequired: true },
        }),
        publishedAt: fields.date({
          label: 'Published date',
          validation: { isRequired: true },
        }),
        url: fields.url({
          label: 'Article URL',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Description',
          description: 'A catchy one-liner shown on the media card.',
          multiline: true,
          validation: { isRequired: true },
        }),
        image: fields.image({
          label: 'Cover image',
          directory: 'public/images',
          publicPath: '/images/',
        }),
      },
    }),
  },
});
