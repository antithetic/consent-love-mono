import {
  AddressBookTabsIcon,
  CalendarDotsIcon,
  FactoryIcon,
  FileTextIcon,
  GearIcon,
  ImagesSquareIcon,
  UserCircleGearIcon,
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
        .child(S.documentList().title('Upcoming Events').filter('date >= now()')),
      S.listItem()
        .title('Past Events')
        .schemaType('event')
        .icon(CalendarDotsIcon)
        .child(S.documentList().title('Past Events').filter('date < now()')),
      S.divider(),
      S.documentTypeListItem('artist')
        .title('Artists')
        .icon(UserRectangleIcon)
        .child(
          S.documentList()
            .title('Artists')
            .filter('_type == "artist"')
            .defaultOrdering([{field: 'name', direction: 'asc'}]),
        ),
      S.documentTypeListItem('venue').title('Venues').icon(FactoryIcon),
      S.divider(),
      S.listItem()
        .id('about')
        .schemaType('about')
        .title('About')
        .icon(FileTextIcon)
        .child(S.editor().id('about').schemaType('about').documentId('about')),
      S.documentTypeListItem('event')
        .title('Events')
        .icon(CalendarDotsIcon)
        .child(
          S.documentList()
            .title('Events')
            .filter('_type == "event"')
            .defaultOrdering([{field: 'date', direction: 'desc'}]),
        ),
      S.documentTypeListItem('contact')
        .title('Contacts')
        .icon(AddressBookTabsIcon)
        .child(
          S.documentList()
            .title('Contacts')
            .filter('_type == "contact"')
            .defaultOrdering([{field: 'name', direction: 'asc'}]),
        ),
      S.documentTypeListItem('flyer').title('Flyer Archive').icon(ImagesSquareIcon),
      S.divider(),
      S.documentTypeListItem('member').title('Members').icon(UserCircleGearIcon),
      S.listItem()
        .id('settings')
        .schemaType('settings')
        .title('Site Settings')
        .icon(GearIcon)
        .child(S.editor().id('settings').schemaType('settings').documentId('settings')),
    ])
