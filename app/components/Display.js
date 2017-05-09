
var React = require("react");

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
render() {

    return (
<div className="col-md-12 col-sm-12 col-lg-12 well">
    <h1 className="well">Portfolio Viewer</h1>
    <div className="well col-sm-12 col-md-3 col-lg-3">
    <div class="list-group">
        <a href="#/portfolio/trades"><button type="button" className="list-group-item btn btn-default">Trade Blotter</button></a>
        <button type="button" className="list-group-item btn btn-default">Account Summary</button>
        <button type="button" className="list-group-item btn btn-default">Morbi leo risus</button>
        <button type="button" className="list-group-item btn btn-default">Porta ac consectetur ac</button>
        <button type="button" className="list-group-item btn btn-default">Vestibulum at eros</button>
    </div>
    </div>
    <div className="col-sm-12 col-md-9 col-lg-9">
    {this.props.children}
  </div>


</div>
    )
}
}

module.exports = Display;