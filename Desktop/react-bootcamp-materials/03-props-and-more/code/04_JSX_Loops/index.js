class App extends React.Component {
  render() {
  return (
    <div>
      <Friend
      name="Elton"
      hobbies={["Piano", "Shopping", "Swimming"]}
      />
            <Friend
      name="Subeida"
      hobbies={["Coding", "Designing", "Swimming"]}
      />
    </div>
  )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))