import {
  CalendarDotsIcon,
  FactoryIcon,
  UserRectangleIcon,
} from '@phosphor-icons/react'
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem('event').title('Events').icon(CalendarDotsIcon),
      S.documentTypeListItem('artist').title('Artists').icon(UserRectangleIcon),
      S.documentTypeListItem('venue').title('Venues').icon(FactoryIcon),
    ])
