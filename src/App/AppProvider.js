import React, { Component } from 'react'
const cc = require('cryptocompare');
export const AppContext = React.createContext();
export class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites 
        }
    }

    componentDidMount = () => {
        this.fetchcoins();
    }

    fetchcoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList})
    }

    confirmFavorites = () => {
        this.setState({
            firstVisit:false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'hello'
        }));
    }
    savedSettings() {
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if (!cryptoDashData) {
            return {page: 'settings', firstVisit: true}
        }
        return {};
    }
    setPage = page => this.setState({page})
    render() {
        return (
            <AppContext.Provider value = {this.state}>
            {this.props.children}
            </AppContext.Provider>
        )
    }
}
