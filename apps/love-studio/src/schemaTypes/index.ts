import {artist} from './documents/artist'
import {contact} from './documents/contact'
import {event} from './documents/event'
import {flyer} from './documents/flyer'
import {link} from './documents/link'
import {member} from './documents/member'
import {settings} from './documents/settings'
import {venue} from './documents/venue'
import {contactCard} from './objects/contactCard'
import {eventSlug} from './objects/eventSlug'
import {imageBlock} from './objects/imageBlock'
import {seoFields} from './objects/seoFields'
import {streetAddress} from './objects/streetAddress'

export const schemaTypes = [
  // Documents
  artist,
  contact,
  event,
  flyer,
  link,
  member,
  settings,
  venue,

  // Objects
  contactCard,
  eventSlug,
  imageBlock,
  seoFields,
  streetAddress,
]
