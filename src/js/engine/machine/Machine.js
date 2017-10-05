export default class Machine {
    constructor() {
        this.machineDelay = 700
    }

    getReply(message) {
        return this.sendMessage(message)
    }

    pickReply(message) {
        return (message.toLowerCase().match('(hi|hello|hey|howdy)(\\s|!|\\.|$)'))
            ? 'Hello stranger...'
            : 'Ummm...'
    }

    sendMessage(message) {
        const reply = this.pickReply(message)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(reply)
            }, this.machineDelay)
        })
    }
}
