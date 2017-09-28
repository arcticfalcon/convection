import React from 'react'
import PropTypes from 'prop-types'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import DataGrid from 'components/DataGrid'

const buildRowRenderer = children => (row, i) => {
  const cells = React.Children.map(children, (child, key) => ({
    content: React.cloneElement(child, { record: row }),
    key,
  }))

  return {
    key: `row-${i}`,
    // warning: !!(status && status.match('Requires Action')),
    cells,
  }
}

@observer
class ListResource extends React.Component {
  @observable data = []

  componentDidMount() {
    this.props.fetcher().then(response => (this.data = response.data))
  }

  render() {
    const { Grid, children } = this.props

    return (
      <div>
        <Grid
          headers={['a', 'b']}
          data={this.data.peek()}
          renderBodyRow={buildRowRenderer(children)}
        />
      </div>
    )
  }
}

ListResource.propTypes = {
  // filters: PropTypes.string.isRequired,
  preserveFilters: PropTypes.bool,
  // sortable: PropTypes.string.isRequired,
  perPage: PropTypes.number.isRequired,
  Grid: PropTypes.any.isRequired,
  fetcher: PropTypes.func.isRequired,
}

ListResource.defaultProps = {
  preserveFilters: false,
  perPage: 10,
  Grid: DataGrid,
}

export default ListResource
