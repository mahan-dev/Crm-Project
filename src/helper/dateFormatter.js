
import moment from "moment"



export const dateFormatter = date => {
    return moment(date).utc().format("YYYY-MM-DD")
}

