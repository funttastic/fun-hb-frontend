import {Map} from '@/model/helper/extendable-immutable/map'
import {app} from '@/model/storage/app'

let actionCreators = app.getIn('redux.actions.creators')

if (actionCreators == null) {
	actionCreators = new Map().asMutable()

	app.setIn('redux.actions.creators', actionCreators)
}

export {actionCreators}
