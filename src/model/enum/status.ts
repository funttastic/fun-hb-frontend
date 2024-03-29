import { BaseEnum } from './base-enum'

import { List } from '@/model/helper/extendable-immutable/list'

/**
 *
 */
export class Status extends BaseEnum {
    static stopped = new Status('stopped', 'Stopped', 'Stopped.', 'stopped')
    static starting = new Status(
        'starting',
        'Starting',
        'Starting...',
        'starting',
    )
    static idle = new Status('idle', 'Idle', 'Idle', 'idle')
    static running = new Status('running', 'Running', 'Running...', 'running')
    static stopping = new Status(
        'stopping',
        'Stopping',
        'Stopping...',
        'stopping',
    )
    static unknown = new Status(
      'unknown',
      'Unknown',
      'Unknown',
      'unknown',
    )

    static list = new List([
        Status.stopped,
        Status.starting,
        Status.idle,
        Status.running,
        Status.stopping,
        Status.unknown,
    ])

    /**
     *
     * @param id
     */
    constructor(id, title, message, value) {
        super()

        this.id = id
        this.title = title
        this.message = message
        this.value = value
    }

    /**
     *
     * @param id
     * @returns {*}
     */
    static getById(id) {
        if (!id) {
            return Status.undefined
        }

        return Status.list.find((item) => item.id === id)
    }
}
