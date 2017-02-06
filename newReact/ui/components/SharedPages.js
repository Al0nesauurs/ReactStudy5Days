// SharedPages.js
export default class SharedPages extends Component {
  render() {
    return (
      <table>
      <tr>
        <th>{id}</th>
        <td>{title}</td>
        <td>
          <a href='javascript:void(0)'>Show</a>
        </td>
      </tr>
    )
  }
}