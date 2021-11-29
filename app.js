// TODO
// const Cucumbers = () => (
//   <li>Cucumbers</li>
// );

// const Kale = () => (
//   <li>Kale</li>
// );

// const createList = (groceryItems) => {
//   let itemsArr = []
//   for (let i = 0; i < groceryItems.length; i++) {
//     itemsArr.push(<GroceryListItem item={groceryItems[i]}/>);
//   }
//   return itemsArr;
// }

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render () {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

var App = () => (
  <div id="grocery-list">
    <h2>My Grocery List</h2>
    <GroceryList items={['Cucumbers', 'Kale', 'Mtn Dew']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));