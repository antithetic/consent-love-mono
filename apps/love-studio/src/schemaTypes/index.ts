import {artist} from './documents/artist'
import {contact} from './documents/contact'
import {event} from './documents/event'
import {flyer} from './documents/flyer'
import {link} from './documents/link'
import {member} from './documents/member'
import {settings} from './documents/settings'
import {venue} from './documents/venue'
import {eventSlug} from './objects/eventSlug'
import {streetAddress} from './objects/streetAddress'

export const schemaTypes = [
  artist,
  contact,
  event,
  eventSlug,
  flyer,
  link,
  member,
  settings,
  streetAddress,
  venue,
]
