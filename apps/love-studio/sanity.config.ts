// import {schemaTypes as sharedSchemaTypes} fro`   m '@consent-love/shared-schema'
import {SmileyMeltingIcon} from '@phosphor-icons/react'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {imageAssetPickerPlugin} from 'sanity-plugin-image-asset-picker'
import {media} from 'sanity-plugin-media'
import {singletonTools} from 'sanity-plugin-singleton-tools'
import {tags} from 'sanity-plugin-tags'

import {schemaTypes} from './src/schemaTypes'
import {structure} from './src/structure'
import {defaultDocumentNode} from './src/structure/defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'Love Hangover',
  icon: SmileyMeltingIcon,

  projectId: '6ziojjbn',
  dataset: 'production',

  plugins: [
    structureTool({structure, defaultDocumentNode}),
    visionTool(),
    media(),
    imageAssetPickerPlugin(),
    singletonTools(),
    tags(),
  ],

  schema: {
    types: schemaTypes,
  },
})
