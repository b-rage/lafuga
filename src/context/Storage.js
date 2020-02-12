import React from 'react'
//import logic from '../logic'


export const storageContext = React.createContext()

export const StorageConsumer = storageContext.Consumer

export const WithStorageConsumer = WrappedComponent => {
  return function(props) {
    return (
      <StorageConsumer>
        {ctx => <WrappedComponent {...props} context={ctx} />}
      </StorageConsumer>
    )
  }
}

export class StorageProvider extends React.Component {


  state = {
    loggedIn: false,
    setLoggedIn: value => {
        this.setState({ loggedIn: value })
    },
    listAuthors: null,
    setListAuthors: value => {
      /* const _listAuthors = [...this.state.listAuthors, value]
      this.setState({listAuthors: _listAuthors} ) */
    },
  }



  render() {
    return (
      <storageContext.Provider value={this.state}>
        {this.props.children}
      </storageContext.Provider>
    )
  }
}