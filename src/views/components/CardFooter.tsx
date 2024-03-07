import { Switcher } from '@/components/ui'
import { apiPostServiceStart, apiPostServiceStop } from '@/model/service/api/funttastic'
import { Status } from '@/model/enum/status'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => ({
    status: state.app.api.funttastic.client.status,
})

const mapDispatchToProps = (dispatch, props) => ({
    toggleStartStop: () => {
        return async () => {
            dispatch(async (dispatch, getState) => {
                const status = getState().app.api.funttastic.client.status

                console.log("status[props.target]", status[props.target])

                if ([Status.stopped.id, Status.unknown.id].includes(status[props.target])) {
                    await apiPostServiceStart({ id: props.target })
                } else {
                    await apiPostServiceStop({ id: props.target })
                }
            })
        }
    },
})

const CardFooterStructure = (props) => (
    <div className="flex">
        <Switcher
            checkedContent=""
            color="green-500"
            onChange={
                props.toggleStartStop && props.toggleStartStop(props.target)
            }
        />
    </div>
)

const CardFooter = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CardFooterStructure)

export default CardFooter
