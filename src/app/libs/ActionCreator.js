class ActionCreator {
  constructor (prefix) {
    this.prefix = prefix;
  }
  create ({type, payload}) {
    return {
      type: `${this.prefix}.${type}`,
      payload
    }
  }
}

export default ActionCreator;
