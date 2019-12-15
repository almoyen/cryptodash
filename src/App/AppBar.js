import React, { Component } from 'react'
import styled, {css} from 'styled-components'
import { AppContext } from './AppProvider';
const Bar = styled.div`
    display: grid;
    grid-template-columns: 180px auto 100px 100px;
    margin-bottom: 40px;
`
const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
    text-shadow: 0px 0px 60px #03ff03
    `}
`
function ControlButton ({name, active}) {
return (
    <AppContext.Consumer>
        {({page}) => (
        <ControlButtonElem active= {page === name}> 
        {toProperCase(name)}
        </ControlButtonElem>
        )}
    </AppContext.Consumer>
    )
}

function toProperCase (lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

export class AppBar extends Component {
    render() {
        return (
            <Bar>
                <div>CrytoDash</div>
                <div/>
                <ControlButton active name = 'dashboard' />
                <ControlButton name = 'settings' />
            </Bar>
        )
    }
}

export default AppBar;
