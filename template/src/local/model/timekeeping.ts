import {LaborStates} from 'src/core/common/Constants'

export default class Timekeeping {
    duration: number = 0
    tag: string = ""
    note: string = ""
    state: number = LaborStates.STANDING
    start_time: number = 0
    end_time: number = 0
}
