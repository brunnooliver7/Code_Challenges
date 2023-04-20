// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const set = transformToSetWithoutDuplicates(playlist);
  return Array.from(set);
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const set = transformToSetWithoutDuplicates(playlist);
  return set.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const set = transformToSetWithoutDuplicates(playlist);
  set.add(track);
  return Array.from(set);
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const set = transformToSetWithoutDuplicates(playlist);
  set.delete(track);
  return Array.from(set);
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const playlistSet = transformToSetWithoutDuplicates(playlist);
  const artistSet = new Set();

  const regex = /(?<=- ).*/;

  for (const item of playlistSet) {
    const artistString = item.match(regex)[0];
    if (!artistSet.has(artistString)) artistSet.add(artistString)
  }

  return Array.from(artistSet);
}

export function transformToSetWithoutDuplicates(playlist) {
  const set = new Set();

  for (const item of playlist) {
    if (!set.has(item)) {
      set.add(item);
    }  
  }

  return set;
}
