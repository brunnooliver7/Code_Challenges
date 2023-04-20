/// <reference path="./global.d.ts" />
// @ts-check

export class TranslationService {
  constructor(api) {
    this.api = api;
  }

  free(text) {
      return this.api.fetch(text)
        .then(res => res.translation)
  }

  batch(texts) {
    if (texts.length === 0) return Promise.reject(new BatchIsEmpty());
    return Promise.all(texts.map((text) => this.free(text)))
  }

  request(text) {
    const requestPromise = () => 
      new Promise ((resolve, reject) => {
       this.api.request(text, (error) => 
         error ? reject(error) : resolve())
    });
    return this.api.fetch(text)
                   .catch(requestPromise)
                   .catch(requestPromise)
                   .catch(requestPromise)
  }

  premium(text, minimumQuality) {
    return this.request(text)
               .then(() => this.api.fetch(text))
               .then((result) => {
                 if (result.quality < minimumQuality){
                 throw new QualityThresholdNotMet(text);
                 }
                return result.translation;
               })
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}
