import React from 'react'
import { observer } from 'mobx-react'
import { Message } from 'semantic-ui-react'

const Errors = observer(({ model }) => <Message error header="Errors" content={model.flatErrors} />)

export default Errors
