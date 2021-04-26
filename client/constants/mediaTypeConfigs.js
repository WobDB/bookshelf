import mediaStatuses from './mediaStatuses';

/*
Default fields that apply to all media types
Values for each default field MUST correspond to field names in database
*/

export const defaultFields = {
  TITLE: 'title',
  TYPE: 'type',
  CURRENT_STATUS: 'currentStatus'
};

/*
Contains all media types available in the applicaiton
and any custom figurations for each media type

-displayName: How the media type is displayed to the user
-customFields: Any custom fields/attributes applicable to a specific media type
-statusNames: Custom display names for each status type, for a given media type
*/
export const mediaTypesSchema = {
  books: {
    displayName: 'Books',
    customFields: [
      'Author'
    ],
    statusNames: {
      [mediaStatuses.BACKLOG]: 'Want to Read',
      [mediaStatuses.IN_PROGRESS]: 'Currently Reading',
      [mediaStatuses.COMPLETE]: 'Finished Reading'
    }
  },

  tvShows: {
    displayName: 'TV Shows',
    customFields: [
    ],
    statusNames: {
      [mediaStatuses.BACKLOG]: 'Want to Watch',
      [mediaStatuses.IN_PROGRESS]: 'Currently Watching',
      [mediaStatuses.COMPLETE]: 'Already Watched'
    }
  },

  songs: {
    displayName: 'Songs',
    customFields: [
      'Artist'
    ],
    statusNames: {
      [mediaStatuses.BACKLOG]: 'Want to Listen',
      [mediaStatuses.IN_PROGRESS]: 'Currently Listening',
      [mediaStatuses.COMPLETE]: 'Recently Listened'
    }
  }
}