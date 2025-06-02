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
      S.listItem()
        .title('Upcoming Events')
        .schemaType('event')
        .icon(CalendarDotsIcon)
        .child(
          S.documentList().title('Upcoming Events').filter('date >= now()'),
        ),
      S.listItem()
        .title('Past Events')
        .schemaType('event')
        .icon(CalendarDotsIcon)
        .child(S.documentList().title('Past Events').filter('date < now()')),
      S.divider(),
      S.documentTypeListItem('artist').title('Artists').icon(UserRectangleIcon),
      S.documentTypeListItem('venue').title('Venues').icon(FactoryIcon),
    ])
