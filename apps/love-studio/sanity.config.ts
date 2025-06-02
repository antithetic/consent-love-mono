import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {imageAssetPickerPlugin} from 'sanity-plugin-image-asset-picker'
import {media} from 'sanity-plugin-media'

import {schemaTypes} from './src/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Love Hangover',

  projectId: '6ziojjbn',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), media(), imageAssetPickerPlugin()],

  schema: {
    types: schemaTypes,
  },
})
