class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (this.events.has(eventName)) {
      let eventValue = this.events.get(eventName);
      eventValue.push(callback);
      this.events.set(eventName, eventValue);
    } else {
      this.events.set(eventName, [callback]);
    }

    return {
      unsubscribe: () => {
        let eventValue = this.events.get(eventName);
        eventValue.splice(eventValue.indexOf(callback), 1);
        this.events.set(eventName, eventValue);
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    const event = this.events.get(eventName);
    if (event) return event.map((cb) => (args.length ? cb(...args) : cb()));
    return [];
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
