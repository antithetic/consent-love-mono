import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {imageAssetPickerPlugin} from 'sanity-plugin-image-asset-picker'
import {media} from 'sanity-plugin-media'
import {tags} from 'sanity-plugin-tags'

import {schemaTypes} from './src/schemaTypes'
import {structure} from './src/structure'
import {defaultDocumentNode} from './src/structure/defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'Love Hangover',

  projectId: '6ziojjbn',
  dataset: 'production',

  plugins: [
    structureTool({structure, defaultDocumentNode}),
    visionTool(),
    media(),
    imageAssetPickerPlugin(),
    tags(),
  ],

  schema: {
    types: schemaTypes,
  },
})
